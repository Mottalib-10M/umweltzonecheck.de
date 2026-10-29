import { defineGuide } from '../../lib/guide-types';
import { landTabelle } from '../../lib/stadt';

/** NRW : 17 aktive Zonen, Ruhrgebiet als eine ; Land nennt noch 80 € Bußgeld. */
export default defineGuide({
  id: 'nordrhein-westfalen',
  group: 'laender',
  order: 3,
  tool: 'liste',
  land: 'NW',
  related: ['ruhrgebiet', 'koeln', 'duesseldorf', 'route', 'bussgeld', 'hessen'],
  sources: ['nrw', 'brms', 'aachen', 'koeln', 'duesseldorf', 'ubaListe'],
  de: {
    slug: 'umweltzonen-nrw',
    nav: 'Nordrhein-Westfalen',
    card: 'Die meisten aktiven Zonen Deutschlands, alle grün, keine aufgehoben: von Aachen bis Münster.',
    title: 'Umweltzonen NRW 2026: alle aktiven Zonen, nur grüne Plakette',
    description: 'Umweltzonen in NRW 2026: die meisten aktiven Zonen Deutschlands, von Aachen und Köln über das Ruhrgebiet bis Münster. Alle sind grün, keine wurde aufgehoben.',
    h1: 'Umweltzonen in Nordrhein-Westfalen',
    intro: 'Die Liste ist auf Nordrhein-Westfalen gefiltert. Suchen Sie Ihren Ort, auch einzelne Städte des Ruhrgebiets.',
    resume: (h) => {
      const n = h.M.zonenImLand('NW').filter((z) => z.status === 'aktiv').length;
      return `Nordrhein-Westfalen hat mehr aktive Umweltzonen als jedes andere Land. Die Liste des Umweltbundesamts führt ${n} Zonen, und anders als in Baden-Württemberg ist keine davon aufgehoben. Weil die Zone Ruhrgebiet allein 13 Städte von Duisburg bis Dortmund umfasst, liegt ein großer Teil der Bevölkerung des Landes in einer Umweltzone. Dazu kommen Köln, Düsseldorf, Bonn, Aachen, Münster, Wuppertal, Krefeld, Mönchengladbach, Neuss, Remscheid, Hagen, Langenfeld, Dinslaken, Eschweiler, Siegen und Overath. Das Umweltministerium des Landes schreibt, dass alle Umweltzonen in Nordrhein-Westfalen nur noch mit grüner Plakette befahren werden dürfen; die meisten wurden am 1. Juli 2014 grün, Aachen, Eschweiler, Siegen und Overath waren es von Beginn an. Dieselverbote gibt es im Land derzeit keine. Das vom Ministerium genannte Bußgeld von 80 Euro ist veraltet, maßgeblich sind die 100 Euro der Bußgeldkatalog-Verordnung. Für einige kleinere Zonen, etwa Krefeld, Neuss, Remscheid oder Wuppertal, waren die Stadtseiten bei unserer Prüfung nicht abrufbar; dort stützt sich die Liste auf das Ministerium und das Umweltbundesamt. Für Overath haben wir den Plan der Bezirksregierung Köln gefunden, das Startdatum aber nicht amtlich gegengeprüft.`;
    },
    faqs: () => [
      { q: 'Gibt es in NRW eine Zone, die nicht grün ist?', a: 'Nein. Nach Angaben des Umweltministeriums dürfen alle Umweltzonen in Nordrhein-Westfalen nur noch mit grüner Plakette befahren werden. Die letzte Zone, die von Gelb auf Grün wechselte, war Münster am 1. Januar 2015, nach der Liste des Umweltbundesamts. Seitdem gilt in allen Zonen des Landes dieselbe Regel, die Prüfung oben zeigt sie für jeden Ort.' },
      { q: 'Wo verläuft die Grenze der Aachener Umweltzone?', a: 'Nach Angaben der Stadt Aachen folgt die Grenze weitgehend dem Aachener Außenring. Die Zone gilt seit dem 1. Februar 2016 und ist seitdem grün; einfahren dürfen nur Fahrzeuge mit grüner Plakette oder Ausnahmegenehmigung. Das benachbarte Eschweiler hat seit dem 1. Juni 2016 eine eigene Zone mit derselben Regel.' },
      { q: 'Brauche ich in Bonn eine grüne Plakette?', a: 'Ja. Das Umweltministerium führt Bonn in seiner Liste der bestehenden Umweltzonen; nach der Liste des Umweltbundesamts ist die Zone seit dem 1. Juli 2014 grün. Die Stadtseite von Bonn war bei unserer Prüfung für automatische Abrufe durch eine Sicherheitsprüfung gesperrt, deshalb nennen wir hier nur die Angaben von Land und Bundesamt.' },
    ],
    body: (h) => `<h2>Alle Zonen in Nordrhein-Westfalen</h2>
${landTabelle(h, 'NW')}
<h2>Quellen</h2>
<p>Die Liste des ${h.src('nrw', 'NRW-Umweltministeriums')} ist die Grundlage. Für das Ruhrgebiet haben wir die ${h.src('brms', 'Bezirksregierung Münster')} gelesen, für einzelne Städte die Seiten von ${h.src('aachen', 'Aachen')}, ${h.src('koeln', 'Köln')} und ${h.src('duesseldorf', 'Düsseldorf')}. Wo die Stadt und das Bundesamt unterschiedliche Daten nennen, folgt die Prüfung dem Bundesamt und die Stadtseite nennt die Abweichung.</p>
<h2>Weiterlesen</h2>
<p>Die großen Zonen haben eigene Seiten: ${h.a('ruhrgebiet', 'Ruhrgebiet')}, ${h.a('koeln', 'Köln')} und ${h.a('duesseldorf', 'Düsseldorf')}. Für Fahrten durch mehrere Zonen gibt es die ${h.a('route', 'Routenprüfung')}.</p>`,
  },
  en: {
    slug: 'north-rhine-westphalia-zones',
    nav: 'North Rhine-Westphalia',
    card: 'Germany’s most active zones, all green, none lifted: from Aachen to Münster.',
    title: 'North Rhine-Westphalia low-emission zones 2026: all green',
    description: 'Low-emission zones in North Rhine-Westphalia 2026: Germany’s most active zones, from Aachen and Cologne through the Ruhr to Münster. All green, none lifted.',
    h1: 'Low-emission zones in North Rhine-Westphalia',
    intro: 'The list is filtered to North Rhine-Westphalia. Search for your town, including individual Ruhr cities.',
    resume: (h) => {
      const n = h.M.zonenImLand('NW').filter((z) => z.status === 'aktiv').length;
      return `North Rhine-Westphalia has more active low-emission zones than any other state. The German Environment Agency list shows ${n} zones, and unlike in Baden-Württemberg none of them has been lifted. Because the Ruhr zone alone covers 13 cities from Duisburg to Dortmund, a large share of the state’s population lives inside a zone. Add to that Cologne, Düsseldorf, Bonn, Aachen, Münster, Wuppertal, Krefeld, Mönchengladbach, Neuss, Remscheid, Hagen, Langenfeld, Dinslaken, Eschweiler, Siegen and Overath. The state Environment Ministry writes that all zones in North Rhine-Westphalia may only be entered with a green sticker; most went green on 1 July 2014, while Aachen, Eschweiler, Siegen and Overath were green from the start. There are currently no diesel bans in the state. The 80-euro fine quoted by the ministry is outdated; the 100 euros in the Fine Catalogue Ordinance apply. For some smaller zones, such as Krefeld, Neuss, Remscheid or Wuppertal, the city pages could not be retrieved during our check; there the list relies on the ministry and the Agency. For Overath we found the Cologne district government’s plan but did not officially verify the start date.`;
    },
    faqs: () => [
      { q: 'Is there any zone in North Rhine-Westphalia that is not green?', a: 'No. According to the Environment Ministry, all zones in North Rhine-Westphalia may only be entered with a green sticker. The last zone to switch from yellow to green was Münster on 1 January 2015, according to the German Environment Agency list. Since then the same rule has applied in every zone in the state, and the check above shows it for each place.' },
      { q: 'Where is the boundary of the Aachen zone?', a: 'According to the City of Aachen, the boundary largely follows the Aachen outer ring road. The zone has applied since 1 February 2016 and has been green since then; only vehicles with a green sticker or an exemption permit may enter. Neighbouring Eschweiler has had its own zone with the same rule since 1 June 2016.' },
      { q: 'Do I need a green sticker in Bonn?', a: 'Yes. The Environment Ministry lists Bonn among its existing low-emission zones; according to the German Environment Agency list the zone has been green since 1 July 2014. The City of Bonn’s page blocked automated access with a security check during our review, so we only give the state and federal information here.' },
    ],
    body: (h) => `<h2>All zones in North Rhine-Westphalia</h2>
${landTabelle(h, 'NW')}
<h2>Sources</h2>
<p>The list of the ${h.src('nrw', 'North Rhine-Westphalia Environment Ministry')} is the basis. For the Ruhr we read the ${h.src('brms', 'Münster district government')}, and for individual cities the pages of ${h.src('aachen', 'Aachen')}, ${h.src('koeln', 'Cologne')} and ${h.src('duesseldorf', 'Düsseldorf')}. Where a city and the Agency give different dates, the check follows the Agency and the city page notes the discrepancy.</p>
<h2>Read on</h2>
<p>The large zones have their own pages: ${h.a('ruhrgebiet', 'Ruhr area')}, ${h.a('koeln', 'Cologne')} and ${h.a('duesseldorf', 'Düsseldorf')}. For trips through several zones there is the ${h.a('route', 'route check')}.</p>`,
  },
});
