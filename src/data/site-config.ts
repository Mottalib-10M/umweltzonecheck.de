/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://de-umweltzone.example";
export const SITE_NAMES: Record<string, string> = {"de": "DE Umweltzone", "en": "DE Umweltzone"};
// Partie du nom affichée en couleur dans l'en-tête (RECETTE §10.3), « » pour aucune.
export const BRAND_ACCENT = "Umweltzone";
export const LANG_TAGS: Record<string, string> = {"de": "de-DE", "en": "en-DE"};
export const OG_LOCALES: Record<string, string> = {"de": "de_DE", "en": "en_GB"};
export const LOCALE_TAG = 'de-DE';
/** Format des nombres par langue : l'anglais garde le point décimal (en-IE, euro). */
export const LOCALE_BY_LANG: Record<string, string> = { de: 'de-DE', en: 'en-IE' };
export const CURRENCY = 'EUR';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-10-29';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"de": "Herausgeber eines unabhängigen Nachschlagewerks zu den deutschen Umweltzonen, das jede Zone auf die Meldung an das Umweltbundesamt und den Luftreinhalteplan zurückführt", "en": "Publisher of an independent reference on German low-emission zones that traces every zone back to the Federal Environment Agency register and the clean-air plan behind it"};
export const AUTHOR_DESC: Record<string, string> = {"de": "Radif Partners gleicht die Liste der Umweltzonen des Umweltbundesamts mit den Luftreinhalteplänen, Allgemeinverfügungen und Aufhebungsbeschlüssen der Städte und Länder ab und ordnet Fahrzeuge nach der 35. BImSchV einer Schadstoffgruppe zu. Wir verkaufen keine Plaketten, vermitteln keine Ausgabestelle und speichern keine Eingaben.", "en": "Radif Partners checks the Federal Environment Agency list of low-emission zones against the clean-air plans, general orders and repeal decisions of the cities and states, and sorts vehicles into emission groups under the 35th Federal Immission Control Ordinance. We sell no stickers, steer you to no issuing office and store nothing you type."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"de": ["Umweltzonen nach § 40 BImSchG", "Kennzeichnungsverordnung (35. BImSchV)", "Schadstoffgruppen und Umweltplaketten", "Luftreinhaltepläne der Länder und Städte", "Diesel-Verkehrsverbote"], "en": ["Low-emission zones under section 40 of the Federal Immission Control Act", "Labelling Ordinance (35th BImSchV)", "Emission groups and environmental stickers", "Clean-air plans of the German states and cities", "Diesel driving bans"]};
export const CONTACT_EMAIL = "contact@de-umweltzone.example";
export const THEME_COLOR = '#166534';
export const LOGO_SYMBOL = 'UZ';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = '';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = '';
export const INDEXNOW_KEY = '6129ffb1782ec98c4c79bb7d2eaf5339';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',
  legalForm: '',  // vide : forme juridique non publiée, comme sur les autres sites du portefeuille
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "Frankreich / France",
  phone: '',
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "USt-IdNr.",
  vatNumber: '',
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
