import { makeRouter, type RouteDef } from './routes-core';
import { PAGES } from '../lib/guides';
export const LOCALES = ['de', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'de';
const R = (id: string, de: string, en: string, noindex = false): RouteDef<Locale> => ({ id, paths: { de: `/de/${de}/`, en: `/en/${en}/` }, ...(noindex ? { noindex } : {}) });
/** Seiten des Kerns. Themen-, Stadt- und Länderseiten kommen aus `src/content/outils/` (lib/guides.ts),
 *  jede auf Deutsch und Englisch. */
const CORE: RouteDef<Locale>[] = [
  { id: 'home', paths: { de: '/de/', en: '/en/' } },
  R('method', 'methode', 'method'),
  R('about', 'ueber-uns', 'about'),
  R('widget', 'widget', 'widget', true),
  R('contact', 'kontakt', 'contact', true),
  R('editorial', 'redaktionelle-grundsaetze', 'editorial-policy', true),
  R('privacy', 'datenschutz', 'privacy', true),
  R('terms', 'impressum', 'legal-notice', true),
  R('cookies', 'cookies', 'cookies', true),
];
export const ROUTES: RouteDef<Locale>[] = [
  CORE[0],
  ...PAGES.map((p) => ({ id: p.id, paths: Object.fromEntries(LOCALES.filter((l) => p[l]).map((l) => [l, `/${l}/${p[l]!.slug}/`])) as Partial<Record<Locale, string>> })),
  ...CORE.slice(1),
];
const core = makeRouter(LOCALES, ROUTES);
export const { NOINDEX_PATHS, altPaths, hasRoute } = core;
/** Pfad einer Seite in einer Sprache ; fehlt die Übersetzung, die englische, dann die deutsche Fassung. */
export function route(id: string, lang: Locale): string {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) throw new Error(`Unknown route id: ${id}`);
  const p = r.paths[lang] ?? r.paths.en ?? r.paths.de;
  if (!p) throw new Error(`Route ${id} ohne Pfad`);
  return p;
}
