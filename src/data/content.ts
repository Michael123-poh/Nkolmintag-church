/* ──────────────────────────────────────────────────────────────
   Ce fichier ne contient plus le contenu lui-même : il relie le
   site aux fichiers éditables dans ./content/*.json — ce sont ces
   fichiers que la future page admin modifiera (un commit par
   modification). Les composants continuent d'importer depuis
   "../data/content" exactement comme avant : rien d'autre ne
   change.
──────────────────────────────────────────────────────────── */
import settingsData from "./content/settings.json";
import heroData from "./content/hero.json";
import navData from "./content/nav.json";
import servicesData from "./content/services.json";
import sermonsData from "./content/sermons.json";
import eventsData from "./content/events.json";
import contactData from "./content/contact.json";
import socialsData from "./content/socials.json";
import pastorData from "./content/pastor.json";
import aboutShortData from "./content/about-short.json";
import aboutPageData from "./content/about-page.json";

export const settings = settingsData;
export const hero = heroData;
export const nav = navData.items;
export const services = servicesData.items;
export const sermons = sermonsData.items;
export const events = eventsData.items;
export const contact = contactData;
export const socials = socialsData.items;
export const pastor = pastorData;
export const aboutShort = aboutShortData;
export const aboutPage = aboutPageData;
