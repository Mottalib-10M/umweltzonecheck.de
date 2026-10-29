import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Aufgehobene Zonen mit Datum, aus zonen.json ; Abweichungen Hannover, Erfurt, Schramberg im Text. */
const rows = (h: Helpers) => [...h.M.AUFGEHOBEN].sort((a, b) => (b.aufhebung ?? '').localeCompare(a.aufhebung ?? ''))
  .map((z) => [z.name[h.lang], h.M.LAENDER[z.land][h.lang], z.aufhebung ? h.date(z.aufhebung) : '–']);

export default defineGuide({
  id: 'aufgehobene-umweltzonen',
  group: 'zonen',
  order: 2,
  tool: 'liste',
  preset: { status: 'aufgehoben' },
  related: ['umweltzonen-deutschland', 'ausblick-2030', 'hannover', 'mainz', 'freiburg', 'baden-wuerttemberg'],
  sources: ['ubaListe', 'rpStuttgart', 'rpKarlsruhe', 'freiburgRp', 'hannoverLrp', 'mainz'],
  de: {
    slug: 'aufgehobene-umweltzonen',
    nav: 'Aufgehobene Zonen',
    card: 'Von Balingen bis Mainz: welche Zonen seit 2020 abgeschafft wurden, mit Datum der Aufhebung.',
    title: 'Aufgehobene Umweltzonen 2026: Liste mit Datum und Quelle',
    description: 'Aufgehobene Umweltzonen 2026: welche Städte ihre Zone abgeschafft haben, von Karlsruhe bis Hannover und Mainz, mit Datum der Aufhebung und amtlicher Quelle.',
    h1: 'Aufgehobene Umweltzonen',
    intro: 'Die Liste ist auf „aufgehoben“ gestellt. Suchen Sie Ihren Ort: Steht er hier, brauchen Sie dort keine Plakette mehr.',
    resume: (h) => `${h.M.AUFGEHOBEN.length} der ${h.M.ZONEN.length} Umweltzonen, die das Umweltbundesamt verzeichnet, sind inzwischen aufgehoben. Eine Zone wird aufgehoben, wenn der Luftreinhalteplan fortgeschrieben wird und die Behörde feststellt, dass die Grenzwerte auch ohne Verkehrsbeschränkung sicher eingehalten werden; die Straßenverkehrsbehörde entfernt dann die Schilder. Die größte Welle kam 2023 und 2024 in Baden-Württemberg: Die Regierungspräsidien Stuttgart, Karlsruhe, Tübingen und Freiburg haben dort fast alle Zonen abgeschafft, darunter Karlsruhe, Heidelberg und Pfinztal am 1. März 2023, Heilbronn, Herrenberg und Leonberg am 1. Januar 2024 sowie Ulm, Tübingen und Reutlingen am 4. Juni 2024. Freiburg folgte mit der Fortschreibung vom 22. April 2025. Außerhalb Baden-Württembergs sind Hannover, Neu-Ulm, Erfurt und Mainz hinzugekommen, Mainz zuletzt am 1. Oktober 2025. Bei einigen Städten nennen Plan und Umweltbundesamt verschiedene Daten: Hannovers Plan nennt den 1. Januar 2024, das Amt den 22. Februar 2024; in Erfurt hob das Oberverwaltungsgericht die Anordnung am 21. April 2021 auf, umgesetzt Ende 2021, während das Amt den 1. Mai 2021 führt. Wir zeigen das Datum des Umweltbundesamts und nennen die Abweichung.`,
    faqs: () => [
      { q: 'Darf ich in einer aufgehobenen Zone ohne Plakette fahren?', a: 'Ja, sobald die Zone aufgehoben und die Beschilderung entfernt ist. Maßgeblich ist am Ende das Verkehrszeichen: Steht noch ein Schild 270.1 an der Einfahrt, gilt es, bis es abgebaut wird. In der Praxis werden die Schilder zum Datum der Aufhebung entfernt; in Freiburg ist dafür die Stadt als Straßenverkehrsbehörde zuständig, ein eigenes Datum dafür haben wir nicht gefunden.' },
      { q: 'Kann eine aufgehobene Zone wieder eingeführt werden?', a: 'Grundsätzlich ja, wenn die Grenzwerte wieder überschritten werden und der Luftreinhalteplan eine Zone als Maßnahme vorsieht. Mit den strengeren EU-Grenzwerten ab 2030 ist das denkbar, aber für keine der hier gelisteten Städte angekündigt. Eine Wiedereinführung bräuchte eine neue Fortschreibung des Plans mit Öffentlichkeitsbeteiligung, also Vorlauf von vielen Monaten.' },
      { q: 'Warum ist Ludwigsburg noch aktiv, wenn Leonberg aufgehoben ist?', a: 'Weil jede Zone ihren eigenen Luftreinhalteplan hat. Das Regierungspräsidium Stuttgart hat für Leonberg, Hemmingen und Umgebung die Zone zum 1. Januar 2024 aufgehoben, für Ludwigsburg mit Kornwestheim, Asperg und weiteren Gemeinden aber die dritte Fortschreibung von 2022 beibehalten. Im Bezirk bestehen nur noch die Zonen Ludwigsburg und Stuttgart.' },
    ],
    body: (h) => `<h2>Alle aufgehobenen Zonen, neueste zuerst</h2>
${h.table(['Zone', 'Land', 'aufgehoben am'], rows(h), `Nach der ${h.src('ubaListe', 'Liste des Umweltbundesamts')}, abgeglichen mit den Plänen der Länder`, ['l', 'l', 'r'])}
<h2>Woher die Daten kommen</h2>
<p>Für Baden-Württemberg haben wir die Fortschreibungen der ${h.src('rpStuttgart', 'Regierungspräsidien Stuttgart')}, ${h.src('rpKarlsruhe', 'Karlsruhe')} und ${h.src('freiburgRp', 'Freiburg')} gelesen, für Hannover den ${h.src('hannoverLrp', 'Luftreinhalteplan 2023')} und für Mainz die ${h.src('mainz', 'Seite der Stadt')}. Die Aufhebung in Schramberg datiert das Regierungspräsidium wie das Amt auf den 1. März 2023; bei der grünen Stufe nennt es den 2. Februar 2015, das Amt den 1. Januar 2015.</p>
<h2>Was bleibt</h2>
<p>Eine Liste der Zonen, die weiter gelten, steht auf der Seite ${h.a('umweltzonen-deutschland', 'Alle Umweltzonen')}. Wie es bis 2030 weitergeht, beschreibt der ${h.a('ausblick-2030', 'Ausblick 2030')}.</p>`,
  },
  en: {
    slug: 'lifted-low-emission-zones',
    nav: 'Lifted zones',
    card: 'From Balingen to Mainz: which zones have been abolished since 2020, with the date of lifting.',
    title: 'Lifted low-emission zones Germany 2026: list with dates',
    description: 'Lifted German low-emission zones 2026: which cities abolished their zone, from Karlsruhe to Hanover and Mainz, with the date of lifting and an official source.',
    h1: 'Lifted low-emission zones',
    intro: 'The list is set to “lifted”. Search for your town: if it appears here, you no longer need a sticker there.',
    resume: (h) => `${h.M.AUFGEHOBEN.length} of the ${h.M.ZONEN.length} low-emission zones recorded by the German Environment Agency have now been lifted. A zone is lifted when the clean-air plan is updated and the authority finds that the limits will be met reliably without traffic restrictions; the road traffic authority then removes the signs. The biggest wave came in 2023 and 2024 in Baden-Württemberg, where the regional councils of Stuttgart, Karlsruhe, Tübingen and Freiburg abolished almost every zone, including Karlsruhe, Heidelberg and Pfinztal on 1 March 2023, Heilbronn, Herrenberg and Leonberg on 1 January 2024, and Ulm, Tübingen and Reutlingen on 4 June 2024. Freiburg followed with its plan update of 22 April 2025. Outside Baden-Württemberg, Hanover, Neu-Ulm, Erfurt and Mainz were added, Mainz most recently on 1 October 2025. For some cities the plan and the Agency give different dates: Hanover’s plan says 1 January 2024, the Agency 22 February 2024; in Erfurt the higher administrative court quashed the order on 21 April 2021, implemented at the end of 2021, while the Agency lists 1 May 2021. We show the Agency’s date and note the discrepancy.`,
    faqs: () => [
      { q: 'May I drive in a lifted zone without a sticker?', a: 'Yes, once the zone has been lifted and the signs removed. In the end the traffic sign decides: if a 270.1 sign still stands at the entry, it applies until taken down. In practice signs are removed on the lifting date; in Freiburg the city, as road traffic authority, is responsible for this, and we found no separate date for it.' },
      { q: 'Can a lifted zone be reintroduced?', a: 'In principle yes, if limits are exceeded again and the clean-air plan includes a zone as a measure. With the stricter EU limits from 2030 that is conceivable, but it has not been announced for any city listed here. Reintroduction would require a new plan update with public consultation, which means a lead time of many months.' },
      { q: 'Why is Ludwigsburg still active when Leonberg was lifted?', a: 'Because each zone has its own clean-air plan. The Stuttgart regional council lifted the zone for Leonberg, Hemmingen and the surrounding area on 1 January 2024, but kept the third update of 2022 for Ludwigsburg with Kornwestheim, Asperg and other towns. Only the Ludwigsburg and Stuttgart zones remain in that district.' },
    ],
    body: (h) => `<h2>All lifted zones, most recent first</h2>
${h.table(['Zone', 'State', 'lifted on'], rows(h), `Based on the ${h.src('ubaListe', 'German Environment Agency list')}, checked against the state plans`, ['l', 'l', 'r'])}
<h2>Where the dates come from</h2>
<p>For Baden-Württemberg we read the plan updates of the ${h.src('rpStuttgart', 'Stuttgart')}, ${h.src('rpKarlsruhe', 'Karlsruhe')} and ${h.src('freiburgRp', 'Freiburg')} regional councils, for Hanover the ${h.src('hannoverLrp', '2023 clean-air plan')} and for Mainz the ${h.src('mainz', 'city’s page')}. The regional council dates the lifting in Schramberg, like the Agency, to 1 March 2023; for the green stage it gives 2 February 2015, the Agency 1 January 2015.</p>
<h2>What remains</h2>
<p>A list of the zones still in force is on the ${h.a('umweltzonen-deutschland', 'all zones')} page. What lies ahead until 2030 is covered in the ${h.a('ausblick-2030', 'outlook 2030')}.</p>`,
  },
});
