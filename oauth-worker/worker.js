/**
 * Relais d'authentification GitHub pour l'admin du site (Decap CMS).
 *
 * Pourquoi ce fichier : pour que l'admin se connecte avec un compte
 * GitHub, il faut échanger un code contre un jeton auprès de GitHub —
 * une étape qui exige un "client secret" qui ne doit JAMAIS être
 * visible dans le navigateur. Ce petit relais s'en charge, hébergé
 * gratuitement sur Cloudflare Workers (indépendant de l'offre
 * Hostinger).
 *
 * Déploiement (5 minutes) :
 *   1. Compte gratuit sur https://dash.cloudflare.com
 *   2. Workers & Pages → Create → Create Worker → colle ce fichier
 *   3. Settings → Variables : ajoute GITHUB_CLIENT_ID et
 *      GITHUB_CLIENT_SECRET (valeurs données par ton GitHub OAuth App
 *      — voir le message pour la marche à suivre)
 *   4. Note l'URL du Worker (ex. nkolmintag-auth.TON-COMPTE.workers.dev)
 *      et mets-la dans public/admin/config.yml → backend.base_url
 */

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";

function randomState() {
  return crypto.randomUUID();
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const state = randomState();
  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL);
  authorizeUrl.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set("redirect_uri", `${url.origin}/callback`);
  authorizeUrl.searchParams.set("scope", "repo,user");
  authorizeUrl.searchParams.set("state", state);

  const response = Response.redirect(authorizeUrl.toString(), 302);
  const headers = new Headers(response.headers);
  headers.append(
    "Set-Cookie",
    `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );
  return new Response(null, { status: 302, headers });
}

function renderCallbackPage(status, provider, payload) {
  // Reproduit le petit protocole postMessage attendu par Decap CMS :
  // la popup s'annonce ("authorizing:github"), attend que la fenêtre
  // d'admin réponde, puis lui envoie le vrai message avec le jeton.
  return `<!DOCTYPE html><html><body>
<script>
  (function () {
    function receiveMessage(message) {
      window.opener.postMessage(
        'authorization:${provider}:${status}:${JSON.stringify(payload)}',
        '*'
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:${provider}', '*');
  })();
</script>
</body></html>`;
}

function readCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const expectedState = readCookie(request, "oauth_state");

  if (!returnedState || !expectedState || returnedState !== expectedState) {
    return new Response(
      renderCallbackPage("error", "github", { error: "state_mismatch" }),
      { status: 400, headers: { "Content-Type": "text/html" } }
    );
  }

  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const data = await tokenResponse.json();

  const clearCookie = "oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0";

  if (data.error) {
    return new Response(renderCallbackPage("error", "github", data), {
      headers: { "Content-Type": "text/html", "Set-Cookie": clearCookie },
    });
  }

  return new Response(
    renderCallbackPage("success", "github", { token: data.access_token }),
    { headers: { "Content-Type": "text/html", "Set-Cookie": clearCookie } }
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/auth") return handleAuth(request, env);
    if (url.pathname === "/callback") return handleCallback(request, env);
    return new Response("Relais d'authentification — rien à voir ici.", { status: 200 });
  },
};
