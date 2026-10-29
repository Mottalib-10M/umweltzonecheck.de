# Ajouter ou étoffer une page du site Umweltzone

Cette notice s'adresse aux agents qui prolongent le site. Lisez-la en entier avant d'écrire, avec `~/Documents/GitHub/RECETTE-SITE.md` (§0, §3, §6, §7, §9.3, §11, §21, §26).

## Principe

Une page = **un fichier** `src/content/outils/<id>.ts` (`defineGuide`, type dans `src/lib/guide-types.ts`). Ce fichier porte l'allemand (`de`) et l'anglais (`en`) côte à côte : slug, titre (50 à 60 caractères), description (150 à 160), H1, chapeau, bloc citable (`resume`, un seul paragraphe d'au moins 120 mots), FAQ (réponses de 40 à 90 mots, questions jamais reprises d'une autre page), corps, sources, outil de tête et pages liées. L'`id` est le nom du fichier.

Routes, menus (`src/i18n/nav.ts`, groupes `plakette`, `regeln`, `zonen`, `staedte`, `laender`), sitemap, hreflang et schémas lisent ces fichiers. **Ne touchez à aucun fichier du cœur pour ajouter une page.** Plafond : 100 pages HTML par langue au total, 404 exclue.

L'accueil (page pilier) est dans `src/content/home/{de,en}.ts` : au moins 800 mots, 6 à 8 questions de FAQ.

## Les outils

| `tool` | Composant (`src/components/outils/Tools.tsx`) | Réglages |
|---|---|---|
| `plakette` | `PlaketteCalc` : groupe et couleur selon carburant, norme Euro, filtre, ou date de première immatriculation (§ 6) | `preset.k` (carburant), `preset.n` (norme), `preset.kl` (`pkw` / `lkw`), `preset.m` (`datum`) |
| `stadt` | `StadtCalc` : ce véhicule peut-il entrer dans cette ville ce jour-là, avec interdictions diesel | `zone` = id de lieu (`berlin`, `essen`, `frankfurt-am-main`…), `preset.g`, `preset.k`, `preset.n` |
| `route` | `RouteCalc` : jusqu'à cinq lieux, chaque zone comptée une fois | `preset.route` = ids séparés par des virgules |
| `liste` | `ListeTool` : liste filtrable des zones | `land` (`BW`, `NW`…), `preset.status` (`alle`, `aktiv`, `aufgehoben`) |
| `bussgeld` | `BussgeldCalc` : amende due ou non | `zone` |
| `ausnahme` | `AusnahmeCalc` : exemptions de l'annexe 3 | `preset.fall` (`oldtimerH`, `eKennzeichen`, `schwerbehindert`…) |

Le moteur est dans `src/lib/engine/` (`plakette.ts`, `zonen.ts`, `ausnahme.ts`, `params.ts`) : fonctions pures, testées dans `src/lib/engine/engine.test.ts`. Premier rendu avec les valeurs par défaut et la date de build ; l'URL et la vraie date ne sont lues que dans `useEffect`, et l'URL n'est réécrite qu'après une action du lecteur.

**Rien n'est envoyé** : aucun outil ne fait de requête réseau avec une saisie.

## Les données

- `src/data/params-2026.json` : amende (BKatV n° 153, 100 €, 0 point), frais de vignette, date de l'exemption E-Kennzeichen (1er octobre 2026), valeurs limites UE 2030, et **toutes les sources** avec `retrieved_at`. Tout chiffre d'une page vient de là (`h.P`, `h.eur`, `h.date`, `h.src`).
- `src/data/zonen.json` : 58 zones (actives et levées) avec dates des trois stades, date de levée, communes, sources officielles et interdictions diesel (Stuttgart, München, Darmstadt). Il est produit par un script de génération hors dépôt à partir de la liste de l'Umweltbundesamt (gis.uba.de) et des pages des villes et Länder ; une correction ponctuelle peut se faire à la main dans le JSON, en gardant au moins une source par zone.
- `src/lib/stadt.ts` : tableaux des stades d'une zone et des zones d'un Land.

## Mise à jour (manuelle)

1. Relire la liste de l'Umweltbundesamt (date « letzte Änderung ») et les pages des villes ; reporter levées et nouvelles zones dans `zonen.json`.
2. Relire la 35. BImSchV (annexes 2 et 3), la BKatV et la FZV (§ 10, § 11, § 43) ; mettre à jour `params-2026.json` et `retrieved_at`.
3. Lancer `npx vitest run` puis `npm run check` (0 défaut attendu).

## Règles propres au site

- **Aucune autorité** : ni logo ni emblème de l'État, d'un ministère, d'une ville ou d'un organisme de contrôle ; « Unabhängige, nichtstaatliche Seite » sous chaque H1 et dans l'embed.
- **Aucun vendeur de vignettes** : on peut dire où elles sont délivrées (Zulassungsstelle, TÜV, DEKRA, garages agréés) sans en recommander un ; pas de lien commercial, pas d'affiliation, pas de formulaire.
- **Aucun nom de concurrent ni de moteur de recherche** dans les pages.
- **Écarts de dates** : quand la ville et l'Umweltbundesamt divergent (Hannover, Erfurt, Schramberg, Limburg, Düsseldorf), le calcul suit l'Umweltbundesamt et la page cite l'écart ; ce qui n'est pas confirmé s'écrit « nicht bestätigt » (Darmstadt).
