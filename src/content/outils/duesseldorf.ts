import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Düsseldorf : seit 15.2.2009, vergrößert 1.2.2013, Grün seit 1.7.2014 (Stadt Düsseldorf). */
export default defineGuide({
  id: 'duesseldorf',
  group: 'staedte',
  order: 6,
  tool: 'stadt',
  zone: 'duesseldorf',
  preset: { g: '3', k: 'diesel', n: '3' },
  related: ['nordrhein-westfalen', 'koeln', 'ruhrgebiet', 'partikelfilter', 'route', 'umweltzonen-deutschland'],
  sources: ['duesseldorf', 'nrw', 'ubaListe'],
  de: {
    slug: 'umweltzone-duesseldorf',
    nav: 'Düsseldorf',
    card: 'Seit 2009, 2013 auf einen großen Teil der Stadt vergrößert, seit Juli 2014 nur Grün.',
    title: 'Umweltzone Düsseldorf 2026: großes Stadtgebiet, nur Grün',
    description: 'Umweltzone Düsseldorf 2026: seit Februar 2009, 2013 auf einen großen Teil der Stadt vergrößert, seit Juli 2014 nur Grün. Prüfen Sie Ihr Fahrzeug für Ihren Tag.',
    h1: 'Umweltzone Düsseldorf',
    intro: 'Voreingestellt ist ein Diesel Euro 3 mit gelber Plakette. Prüfen Sie, ob Ihr Fahrzeug in die Düsseldorfer Zone darf.',
    resume: () => `Die Düsseldorfer Umweltzone besteht seit dem 15. Februar 2009. Am 1. Februar 2013 hat die Stadt sie auf einen großen Teil des Stadtgebiets vergrößert, und seit dem 1. Juli 2014 dürfen nur noch Fahrzeuge mit grüner Plakette hineinfahren. Die Daten stammen von der Detailseite der Landeshauptstadt und stimmen mit der Liste des Umweltbundesamts überein; auf der Übersichtsseite der Stadt steht dagegen der 15. September 2009 als Einrichtungsdatum, was ein Schreibfehler sein dürfte, den wir nicht übernehmen. Ein Dieselfahrverbot hat Düsseldorf derzeit nicht. Damit gilt dieselbe Regel wie in allen Zonen Nordrhein-Westfalens: Grün genügt, ohne Grün braucht es eine Befreiung nach Anhang 3 der 35. BImSchV oder eine Einzelgenehmigung der Stadt. Wer mit einem älteren Diesel Euro 3 unterwegs ist, kann Grün über ein nachgerüstetes Partikelminderungssystem erreichen, wenn es für das Modell eines gibt. Ein Euro-2-Diesel kommt dagegen nicht über Gelb hinaus. Für den Flughafen Düsseldorf, die Messe, die Altstadt und die Königsallee gilt die Plakettenpflicht nach dem Plan der Stadt, sofern sie in der vergrößerten Zone liegen; im Zweifel zeigt es die Karte der Stadt.`,
    faqs: () => [
      { q: 'Seit wann gibt es die Umweltzone in Düsseldorf wirklich?', a: 'Seit dem 15. Februar 2009. So steht es auf der Detailseite der Stadt und in der Liste des Umweltbundesamts. Die Übersichtsseite der Stadt nennt den 15. September 2009; wir halten das für einen Fehler auf dieser Seite. Für Ihre Fahrt spielt das keine Rolle mehr, denn seit Juli 2014 gilt ohnehin nur noch die grüne Plakette.' },
      { q: 'Was änderte sich bei der Vergrößerung 2013?', a: 'Am 1. Februar 2013 wurde die Zone von der Innenstadt auf einen großen Teil des Stadtgebiets ausgedehnt. Damit liegen seitdem auch viele Wohngebiete in der Zone, die vorher außerhalb lagen. Die genaue Grenze zeigt die Karte der Stadt. Die Regeln selbst änderten sich erst mit der grünen Stufe am 1. Juli 2014.' },
      { q: 'Muss ich zwischen Düsseldorf und Neuss die Plakette wechseln?', a: 'Nein. Eine Plakette gilt bundesweit in jeder Zone. Neuss hat eine eigene Umweltzone, die das Land in seiner Liste führt, mit derselben Regel: nur Grün. Wer zwischen beiden Städten pendelt, braucht also nur eine grüne Plakette. Die Gebühr zahlen Sie einmal, nicht pro Stadt.' },
    ],
    body: (h) => `<h2>Stufen der Düsseldorfer Zone</h2>
${stufen(h, 'duesseldorf')}
<h2>Quellen und Stand</h2>
<p>Grundlage sind die ${h.src('duesseldorf', 'Detailseite der Landeshauptstadt Düsseldorf')} und die Liste des ${h.src('nrw', 'NRW-Umweltministeriums')}. Beide geben an, dass alle Zonen in Nordrhein-Westfalen nur mit grüner Plakette befahren werden dürfen. Das dort genannte Bußgeld von 80 Euro ist veraltet; der Bußgeldkatalog nennt 100 Euro.</p>
<h2>Nachbarzonen</h2>
<p>Rund um Düsseldorf liegen weitere Zonen: Neuss, Krefeld, Mönchengladbach, Wuppertal, Langenfeld und Remscheid, außerdem ${h.a('koeln', 'Köln')} und das ${h.a('ruhrgebiet', 'Ruhrgebiet')}. Die ${h.a('route', 'Routenprüfung')} testet mehrere davon auf einmal.</p>`,
  },
  en: {
    slug: 'duesseldorf-low-emission-zone',
    nav: 'Düsseldorf',
    card: 'Since 2009, enlarged to a large part of the city in 2013, green only since July 2014.',
    title: 'Düsseldorf low-emission zone 2026: large area, green only',
    description: 'Düsseldorf low-emission zone 2026: since February 2009, enlarged to much of the city in 2013, green only since July 2014. Check your vehicle for your date.',
    h1: 'Düsseldorf low-emission zone',
    intro: 'The preset is a Euro 3 diesel with a yellow sticker. Check whether your vehicle may enter the Düsseldorf zone.',
    resume: () => `Düsseldorf’s low-emission zone has existed since 15 February 2009. On 1 February 2013 the city enlarged it to a large part of the city area, and since 1 July 2014 only vehicles with a green sticker may enter. These dates come from the city’s detail page and match the German Environment Agency list; the city’s overview page, however, gives 15 September 2009 as the start date, which appears to be a typo that we do not adopt. Düsseldorf currently has no diesel ban. The same rule therefore applies as in all North Rhine-Westphalian zones: green is enough; without green you need an exemption under Annex 3 of the 35th BImSchV or an individual permit from the city. If you drive an older Euro 3 diesel, you can reach green with a retrofitted particle reduction system if one exists for the model. A Euro 2 diesel, by contrast, cannot get beyond yellow. Whether the airport, the trade fair, the old town and the Königsallee fall under the sticker rule depends on whether they lie in the enlarged zone; if in doubt, the city map shows it.`,
    faqs: () => [
      { q: 'When did the Düsseldorf zone really start?', a: 'On 15 February 2009. That is what the city’s detail page and the German Environment Agency list say. The city’s overview page gives 15 September 2009; we consider that an error on that page. For your trip it no longer matters, because since July 2014 only the green sticker counts anyway.' },
      { q: 'What changed with the 2013 enlargement?', a: 'On 1 February 2013 the zone was extended from the city centre to a large part of the city area. Many residential districts that were previously outside have been inside the zone since then. The exact boundary is shown on the city map. The rules themselves only changed with the green stage on 1 July 2014.' },
      { q: 'Do I need a different sticker between Düsseldorf and Neuss?', a: 'No. A sticker is valid nationwide in every zone. Neuss has its own low-emission zone, listed by the state, with the same rule: green only. Commuters between the two cities therefore need just one green sticker. You pay the fee once, not per city.' },
    ],
    body: (h) => `<h2>Stages of the Düsseldorf zone</h2>
${stufen(h, 'duesseldorf')}
<h2>Sources and date</h2>
<p>This page is based on the ${h.src('duesseldorf', 'City of Düsseldorf’s detail page')} and the list of the ${h.src('nrw', 'North Rhine-Westphalia Environment Ministry')}. Both state that all zones in North Rhine-Westphalia may only be entered with a green sticker. The 80-euro fine mentioned there is outdated; the fine catalogue says 100 euros.</p>
<h2>Neighbouring zones</h2>
<p>Around Düsseldorf lie further zones: Neuss, Krefeld, Mönchengladbach, Wuppertal, Langenfeld and Remscheid, as well as ${h.a('koeln', 'Cologne')} and the ${h.a('ruhrgebiet', 'Ruhr area')}. The ${h.a('route', 'route check')} tests several of them at once.</p>`,
  },
});
