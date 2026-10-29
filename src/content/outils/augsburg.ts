import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Augsburg : Stufe 1 mit Lkw-Durchfahrtsverbot 1.7.2009, Stufe 2 1.1.2011, Stufe 3 1.6.2016 ; erweiterte Innenstadt. */
export default defineGuide({
  id: 'augsburg',
  group: 'staedte',
  order: 13,
  tool: 'stadt',
  zone: 'augsburg',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['bayern', 'muenchen', 'lkw-busse', 'route', 'gruene-plakette', 'umweltzonen-deutschland'],
  sources: ['augsburg', 'byStmuv', 'ubaListe'],
  de: {
    slug: 'umweltzone-augsburg',
    nav: 'Augsburg',
    card: 'Erweiterte Innenstadt, grün erst seit Juni 2016, dazu ein Lkw-Durchfahrtsverbot seit 2009.',
    title: 'Umweltzone Augsburg 2026: Innenstadt, grün seit Juni 2016',
    description: 'Umweltzone Augsburg 2026: Die erweiterte Innenstadt ist Zone, nur Grün seit 1. Juni 2016, dazu ein Lkw-Durchfahrtsverbot seit 2009. Prüfen Sie Ihr Fahrzeug.',
    h1: 'Umweltzone Augsburg',
    intro: 'Voreingestellt ist ein Diesel Euro 3 mit gelber Plakette. Stellen Sie den Tag der Fahrt ein: Vor Juni 2016 durfte er noch hinein.',
    resume: () => `Augsburg hat seine Umweltzone in drei Schritten eingeführt, langsamer als die meisten anderen Städte. Die erste Stufe begann am 1. Juli 2009, zusammen mit einem Durchfahrtsverbot für Lkw. Die zweite Stufe, ab der nur noch gelbe und grüne Plaketten erlaubt waren, folgte am 1. Januar 2011. Erst seit dem 1. Juni 2016 gilt die dritte Stufe, und seitdem dürfen nur noch Fahrzeuge mit grüner Plakette in die Zone. Die Zone umfasst die erweiterte Innenstadt, also neben der Altstadt mit Rathaus und Fuggerei auch die angrenzenden Viertel. Das Lkw-Durchfahrtsverbot ist eine eigene Regel: Es richtet sich gegen den Durchgangsverkehr schwerer Fahrzeuge und gilt unabhängig von der Plakette. Ein Dieselverbot wie in München gibt es in Augsburg nicht; ein Diesel mit grüner Plakette darf überall hinein. Augsburg ist neben München und Regensburg eine von drei aktiven Zonen in Bayern. Wer zwischen Augsburg und München pendelt, braucht deshalb in beiden Städten Grün und in München mit einem Diesel zusätzlich mindestens Euro 5. Die Plakette gibt es bei der Zulassungsstelle der Stadt und bei den Stellen für Abgasuntersuchungen.`,
    faqs: () => [
      { q: 'Liegt die Fuggerei in der Augsburger Umweltzone?', a: 'Ja. Die Fuggerei liegt in der Jakobervorstadt östlich der Altstadt und damit in der erweiterten Innenstadt, die die Zone umfasst. Für die Anfahrt mit dem Auto brauchen Sie die grüne Plakette. Wer ohne Plakette kommt, kann die Park-and-Ride-Plätze am Stadtrand nutzen und mit der Straßenbahn in die Innenstadt fahren.' },
      { q: 'Für welche Lkw gilt das Augsburger Durchfahrtsverbot?', a: 'Das Durchfahrtsverbot führte die Stadt am 1. Juli 2009 zusammen mit der ersten Stufe der Umweltzone ein. Es richtet sich gegen den Durchgangsverkehr schwerer Lkw, nicht gegen Lieferverkehr mit Ziel in der Stadt. Die genauen Gewichtsgrenzen und Strecken stehen auf den Schildern und der Seite der Stadt; sie gelten unabhängig davon, welche Plakette das Fahrzeug trägt.' },
      { q: 'Warum wurde Augsburg erst 2016 grün?', a: 'Die Stufen legt der Luftreinhalteplan fest, und Augsburg hat die dritte Stufe später eingeführt als viele andere Städte, nämlich am 1. Juni 2016. Die Gründe stehen im Plan der Regierung von Schwaben. Für heutige Fahrten spielt das keine Rolle, denn seit 2016 gilt nur noch Grün; die Prüfung zeigt aber für jedes frühere Datum die damals geltende Stufe.' },
    ],
    body: (h) => `<h2>Stufen der Augsburger Zone</h2>
${stufen(h, 'augsburg')}
<h2>Quellen</h2>
<p>Die Daten stammen von der ${h.src('augsburg', 'Stadt Augsburg')} und stimmen mit der Liste des Umweltbundesamts überein. Das ${h.src('byStmuv', 'Bayerische Umweltministerium')} führt Augsburg unter den Umweltzonen in Bayern. Mehr zu den bayerischen Zonen auf der Seite ${h.a('bayern', 'Bayern')}.</p>
<h2>Zwischen Augsburg und München</h2>
<p>Die A 8 verbindet beide Städte. In ${h.a('muenchen', 'München')} gilt zusätzlich die Dieselbeschränkung bis Euro 4, in Augsburg nicht. Für ${h.a('lkw-busse', 'Lkw und Busse')} gilt in Augsburg zusätzlich das Durchfahrtsverbot. Die ${h.a('route', 'Routenprüfung')} zeigt beide Städte nebeneinander.</p>`,
  },
  en: {
    slug: 'augsburg-low-emission-zone',
    nav: 'Augsburg',
    card: 'Extended city centre, green only since June 2016, plus a truck through-traffic ban since 2009.',
    title: 'Augsburg low-emission zone 2026: centre, green since 2016',
    description: 'Augsburg low-emission zone 2026: the extended centre is a zone, green only since 1 June 2016, plus a truck through-traffic ban since 2009. Check your vehicle.',
    h1: 'Augsburg low-emission zone',
    intro: 'The preset is a Euro 3 diesel with a yellow sticker. Set the date of your trip: before June 2016 it could still enter.',
    resume: () => `Augsburg introduced its low-emission zone in three steps, more slowly than most other cities. Stage one began on 1 July 2009, together with a through-traffic ban for trucks. Stage two, from which only yellow and green stickers were allowed, followed on 1 January 2011. Only since 1 June 2016 has stage three applied, and since then only vehicles with a green sticker may enter. The zone covers the extended city centre, meaning the old town with the town hall and the Fuggerei plus the adjacent districts. The truck through-traffic ban is a separate rule: it targets through traffic of heavy vehicles and applies regardless of the sticker. Augsburg has no diesel ban like Munich’s; a diesel with a green sticker may go anywhere. Augsburg is one of three active zones in Bavaria, alongside Munich and Regensburg. Commuters between Augsburg and Munich therefore need green in both cities and, in Munich, at least Euro 5 for a diesel. Stickers are available from the city’s registration office and from emission-test bodies.`,
    faqs: () => [
      { q: 'Is the Fuggerei inside the Augsburg zone?', a: 'Yes. The Fuggerei lies in the Jakobervorstadt east of the old town, and so within the extended city centre covered by the zone. Driving there requires the green sticker. Without one, you can use the park-and-ride sites on the edge of town and take the tram into the centre.' },
      { q: 'Which trucks does the Augsburg through-traffic ban cover?', a: 'The city introduced the through-traffic ban on 1 July 2009 together with the first stage of the zone. It targets through traffic of heavy trucks, not deliveries to destinations in the city. The exact weight limits and routes are on the signs and the city’s page; they apply regardless of which sticker the vehicle carries.' },
      { q: 'Why did Augsburg only go green in 2016?', a: 'The stages are set by the clean-air plan, and Augsburg introduced stage three later than many other cities, on 1 June 2016. The reasons are in the plan of the Swabia regional government. For trips today it does not matter, since only green has applied since 2016; the check does, however, show the stage in force for any earlier date.' },
    ],
    body: (h) => `<h2>Stages of the Augsburg zone</h2>
${stufen(h, 'augsburg')}
<h2>Sources</h2>
<p>The dates come from the ${h.src('augsburg', 'City of Augsburg')} and match the German Environment Agency list. The ${h.src('byStmuv', 'Bavarian Environment Ministry')} lists Augsburg among Bavaria’s low-emission zones. More on the Bavarian zones on the ${h.a('bayern', 'Bavaria')} page.</p>
<h2>Between Augsburg and Munich</h2>
<p>The A 8 links the two cities. ${h.a('muenchen', 'Munich')} also has the diesel restriction up to Euro 4, Augsburg does not. ${h.a('lkw-busse', 'Trucks and buses')} must also observe Augsburg’s through-traffic ban. The ${h.a('route', 'route check')} shows both cities side by side.</p>`,
  },
});
