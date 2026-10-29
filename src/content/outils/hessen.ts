import { defineGuide } from '../../lib/guide-types';
import { landTabelle } from '../../lib/stadt';

/** Hessen : Frankfurt, Darmstadt, Offenbach, Wiesbaden, Marburg, Limburg ; Limburg-Datum Stadt 31.1.2018 vs. Land 1.1.2018. */
export default defineGuide({
  id: 'hessen',
  group: 'laender',
  order: 4,
  tool: 'liste',
  land: 'HE',
  related: ['frankfurt', 'mainz', 'diesel-fahrverbot', 'nordrhein-westfalen', 'route', 'ausblick-2030'],
  sources: ['hessen', 'wiesbaden', 'ubaListe'],
  de: {
    slug: 'umweltzonen-hessen',
    nav: 'Hessen',
    card: 'Sechs grüne Zonen von Frankfurt bis Limburg, dazu die offene Frage der Darmstädter Dieselstrecken.',
    title: 'Umweltzonen Hessen 2026: sechs Städte, alle mit Grün',
    description: 'Umweltzonen in Hessen 2026: Frankfurt, Darmstadt, Offenbach, Wiesbaden, Marburg und Limburg sind grün. Mit Datum je Stadt und den Darmstädter Dieselverboten.',
    h1: 'Umweltzonen in Hessen',
    intro: 'Die Liste ist auf Hessen gefiltert. Suchen Sie einen Ort oder wechseln Sie den Status.',
    resume: () => `In Hessen gibt es sechs aktive Umweltzonen, und alle sind grün: Frankfurt am Main, Darmstadt, Offenbach am Main, Wiesbaden, Marburg und Limburg an der Lahn. Zuständig für die Luftreinhaltepläne ist das Land, genauer das Umweltministerium in Wiesbaden; die Zonen im Süden beruhen auf Teilplänen des Luftreinhalteplans für den Ballungsraum Rhein-Main, die in Marburg und Limburg auf dem Plan für das Gebiet Mittel- und Nordhessen. Frankfurt ist die älteste hessische Zone, eingerichtet 2008 und seit 2012 grün. Wiesbaden folgte 2013, damals gemeinsam mit Mainz, dessen Teil inzwischen aufgehoben ist. Offenbach und Darmstadt kamen 2015 dazu, Marburg am 1. April 2016 und Limburg Anfang 2018. Für Limburg nennen Stadt und Land unterschiedliche Daten: Die Stadt schreibt den 31. Januar 2018, das Land den 1. Januar 2018; das Umweltbundesamt folgt der Stadt. In Marburg ist die Bundesstraße 3 nach Angaben des Landes von der Zone ausgenommen. Darmstadt hatte seit 2019 zusätzlich Fahrverbote für ältere Diesel auf zwei Straßen. Die Stadtseiten dazu waren bei unserer Prüfung nicht erreichbar, und das Land nennt nur die Zone; ob die Streckenverbote 2026 noch gelten, ist deshalb nicht bestätigt. Aufgehoben ist in Hessen bislang keine Zone.`,
    faqs: () => [
      { q: 'Gilt in Darmstadt noch ein Dieselfahrverbot?', a: 'Das ist nicht bestätigt. Seit Juni 2019 galten in Darmstadt Fahrverbote für Diesel bis Euro 5 und Benziner bis Euro 2 auf zwei Straßen. Die Seiten der Stadt zur Luftreinhaltung waren bei unserer Prüfung nicht erreichbar, und die Seite des Landes nennt nur die grüne Umweltzone seit November 2015. Die Prüfung rechnet vorsichtshalber weiter mit den Streckenverboten.' },
      { q: 'Ist die B 3 in Marburg Teil der Umweltzone?', a: 'Nach Angaben des Landes Hessen ist die Bundesstraße 3 von der Marburger Zone ausgenommen. Wer Marburg auf der B 3 nur durchfährt, braucht also keine Plakette. Sobald Sie die B 3 verlassen, um in die Innenstadt, zur Universität oder zum Bahnhof zu fahren, gilt die Pflicht zur grünen Plakette, die seit dem 1. April 2016 besteht.' },
      { q: 'Welche Zone in Hessen ist die jüngste?', a: 'Limburg an der Lahn. Die Stadt nennt den 31. Januar 2018 als Beginn, das Land den 1. Januar 2018, Rechtsgrundlage ist die erste Fortschreibung des Luftreinhalteplans für Mittel- und Nordhessen. Seitdem dürfen dort grundsätzlich nur Fahrzeuge mit grüner Plakette fahren. Die Stadtseite nennt als Bußgeld 80 Euro; maßgeblich sind 100 Euro.' },
    ],
    body: (h) => `<h2>Alle Zonen in Hessen</h2>
${landTabelle(h, 'HE')}
<h2>Quellen und Abweichungen</h2>
<p>Die Seite des ${h.src('hessen', 'Hessischen Umweltministeriums')} nennt alle sechs Zonen. Für Wiesbaden haben wir die ${h.src('wiesbaden', 'Stadtseite')} gelesen; sie erwähnt noch die Mainzer Zone, obwohl diese seit dem 1. Oktober 2025 aufgehoben ist. Die Stadtseiten von Frankfurt, Offenbach und Darmstadt waren nicht abrufbar.</p>
<h2>Weiterlesen</h2>
<p>Mehr zur größten Zone auf der Seite ${h.a('frankfurt', 'Frankfurt am Main')}, zur aufgehobenen Nachbarzone auf der Seite ${h.a('mainz', 'Mainz')}, zu Darmstadt auf der Seite ${h.a('diesel-fahrverbot', 'Dieselfahrverbot')}.</p>`,
  },
  en: {
    slug: 'hesse-zones',
    nav: 'Hesse',
    card: 'Six green zones from Frankfurt to Limburg, plus the open question of Darmstadt’s diesel routes.',
    title: 'Hesse low-emission zones 2026: six cities, all green',
    description: 'Low-emission zones in Hesse 2026: Frankfurt, Darmstadt, Offenbach, Wiesbaden, Marburg and Limburg are green. Dates per city and Darmstadt’s diesel bans.',
    h1: 'Low-emission zones in Hesse',
    intro: 'The list is filtered to Hesse. Search for a place or change the status.',
    resume: () => `Hesse has six active low-emission zones, all of them green: Frankfurt am Main, Darmstadt, Offenbach am Main, Wiesbaden, Marburg and Limburg an der Lahn. The state is responsible for the clean-air plans, specifically the Environment Ministry in Wiesbaden; the southern zones are based on sub-plans of the clean-air plan for the Rhine-Main conurbation, while Marburg and Limburg rest on the plan for central and northern Hesse. Frankfurt is the oldest Hessian zone, set up in 2008 and green since 2012. Wiesbaden followed in 2013, together with Mainz, whose part has since been lifted. Offenbach and Darmstadt joined in 2015, Marburg on 1 April 2016 and Limburg in early 2018. For Limburg the city and the state give different dates: the city says 31 January 2018, the state 1 January 2018; the German Environment Agency follows the city. In Marburg, according to the state, federal road B 3 is excluded from the zone. Darmstadt has also had bans on older diesels on two streets since 2019. The city pages on this were unreachable during our check, and the state only mentions the zone; whether the route bans still apply in 2026 is therefore not confirmed. No zone in Hesse has been lifted so far.`,
    faqs: () => [
      { q: 'Does Darmstadt still have a diesel ban?', a: 'That is not confirmed. From June 2019 Darmstadt had bans on diesels up to Euro 5 and petrol cars up to Euro 2 on two streets. The city’s clean-air pages could not be reached during our check, and the state page only mentions the green zone since November 2015. As a precaution, the check still includes the route bans.' },
      { q: 'Is the B 3 in Marburg part of the zone?', a: 'According to the state of Hesse, federal road B 3 is excluded from the Marburg zone. If you only pass through Marburg on the B 3, you need no sticker. As soon as you leave the B 3 to drive into the centre, to the university or to the station, the green sticker requirement applies, as it has since 1 April 2016.' },
      { q: 'Which zone in Hesse is the newest?', a: 'Limburg an der Lahn. The city gives 31 January 2018 as the start, the state 1 January 2018; the legal basis is the first update of the clean-air plan for central and northern Hesse. Since then only vehicles with a green sticker may generally drive there. The city page quotes an 80-euro fine; 100 euros is what applies.' },
    ],
    body: (h) => `<h2>All zones in Hesse</h2>
${landTabelle(h, 'HE')}
<h2>Sources and discrepancies</h2>
<p>The page of the ${h.src('hessen', 'Hesse Environment Ministry')} lists all six zones. For Wiesbaden we read the ${h.src('wiesbaden', 'city page')}; it still mentions the Mainz zone although that was lifted on 1 October 2025. The city pages of Frankfurt, Offenbach and Darmstadt could not be retrieved.</p>
<h2>Read on</h2>
<p>More on the largest zone on the ${h.a('frankfurt', 'Frankfurt am Main')} page, on the lifted neighbouring zone on the ${h.a('mainz', 'Mainz')} page, and on Darmstadt on the ${h.a('diesel-fahrverbot', 'diesel bans')} page.</p>`,
  },
});
