/** Startseite (Säulenseite) : Text der zwei Sprachen in src/content/home/{de,en}.ts. Darstellung : components/HomePage.astro. */
import type { PageText, Lang } from '../lib/guide-types';
import { de } from './home/de';
import { en } from './home/en';
type Home = Omit<PageText, 'slug' | 'card' | 'nav'>;
export const HOME: Record<Lang, Home> = { de, en };
