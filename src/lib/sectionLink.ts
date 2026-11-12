// Lien vers une page (/chemin) ou vers une section de l'accueil (#ancre).
// Pour une section, on passe l'ancre dans l'état de navigation au lieu de
// l'URL : le défilement fonctionne, mais aucun "#" n'apparaît dans la barre
// d'adresse.
export function linkProps(href: string) {
  return href.startsWith("#")
    ? { to: "/", state: { scrollTo: href } }
    : { to: href };
}
