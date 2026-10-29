import type { Locale } from './routes';
const de = {
  updatedOn: 'Aktualisiert am', editorialPolicy: 'Redaktionelle Grundsätze', contactLabel: 'Kontakt', reviewedBy: 'Geprüft von',
  skipToContent: 'Zum Inhalt', mainNav: 'Hauptnavigation', breadcrumbLabel: 'Brotkrumen', breadcrumbHome: 'Startseite', menuOpen: 'Menü öffnen',
  faqTitle: 'Häufige Fragen', relatedCalculators: 'Verwandte Seiten und Prüfungen', sourcesTitle: 'Quellen', writtenBy: 'Geschrieben von',
  asOf: 'Stand der Zonenliste', lastUpdated: 'gelesen am', footerValidated: 'Quellen: Liste des Umweltbundesamts, 35. BImSchV, Bußgeldkatalog, Luftreinhaltepläne der Städte', footerBrowser: 'Prüft in Ihrem Browser · keine Anmeldung, keine E-Mail · kostenlos',
  footerDisclaimer: 'Unabhängige, nichtstaatliche Seite von Radif Partners, ohne Verbindung zum Umweltbundesamt, zu einem Ministerium, einer Stadt, einer Zulassungsstelle oder einer Prüforganisation. Die Zonen stammen aus der Liste des Umweltbundesamts, die Regeln aus der 35. BImSchV und dem Bußgeldkatalog. Wir verkaufen keine Plaketten und vermitteln keine Ausgabestelle. Maßgeblich sind die Beschilderung vor Ort und die Schlüsselnummer in Ihren Fahrzeugpapieren; die Prüfung ist unverbindlich und ersetzt keine Auskunft der zuständigen Behörde.', footerPopular: '', notFound: 'Diese Seite gibt es nicht.',
  readMore: 'Weiterlesen', independent: 'Unabhängige, nichtstaatliche Seite: kein Angebot einer Behörde, kein Plakettenverkauf.',
};
const en: typeof de = {
  updatedOn: 'Updated on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Checked by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Frequently asked questions', relatedCalculators: 'Related pages and checks', sourcesTitle: 'Sources', writtenBy: 'Written by',
  asOf: 'Zone list as of', lastUpdated: 'read on', footerValidated: 'Sources: Federal Environment Agency list, 35th BImSchV, fine catalogue, city clean-air plans', footerBrowser: 'Checks in your browser · no sign-up, no email · free',
  footerDisclaimer: 'Independent, non-governmental site published by Radif Partners, with no link to the Federal Environment Agency, any ministry, any city, any registration office or any vehicle testing body. Zones come from the Federal Environment Agency list, rules from the 35th BImSchV and the fine catalogue. We sell no stickers and steer you to no issuing office. The road signs on site and the key number in your vehicle papers are what count; the check is for guidance and does not replace information from the competent authority.', footerPopular: '', notFound: 'This page does not exist.',
  readMore: 'Read more', independent: 'Independent, non-governmental site: not an authority’s service, no sticker sales.',
};
export function t(lang: Locale) { return lang === 'en' ? en : de; }
