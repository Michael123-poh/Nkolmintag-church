// Met à jour les 3 couleurs principales dans src/index.css à partir de
// src/data/content/settings.json. Exécuté automatiquement avant chaque
// build et avant chaque "dev" (voir package.json) pour que les couleurs
// choisies dans l'admin s'appliquent réellement au site.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const settingsPath = join(root, "src/data/content/settings.json");
const cssPath = join(root, "src/index.css");

const settings = JSON.parse(readFileSync(settingsPath, "utf-8"));
const { bordeaux, gold, cream } = settings.colors || {};

let css = readFileSync(cssPath, "utf-8");

const replace = (css, varName, value) => {
  if (!value) return css;
  const re = new RegExp(`(--${varName}:\\s*)#[0-9a-fA-F]{3,8}(\\s*;)`);
  if (!re.test(css)) {
    console.warn(`apply-theme: variable --${varName} introuvable dans index.css`);
    return css;
  }
  return css.replace(re, `$1${value}$2`);
};

css = replace(css, "color-bordeaux", bordeaux);
css = replace(css, "color-gold-400", gold);
css = replace(css, "color-cream-50", cream);

writeFileSync(cssPath, css);
console.log("index.css : couleurs synchronisées avec settings.json");
