import { defineGuide, type Helpers } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Ruhrgebiet : 13 Städte, ca. 850 km² (Stadt Essen), Grün seit 1.7.2014 ; Festsetzung bleibt gültig (BR Düsseldorf/Münster). */
const staedte = (h: Helpers) => (h.M.zoneById('ruhrgebiet')?.orte ?? []).map((o) => h.M.ortName(o, h.lang)).join(', ');

export default defineGuide({
  id: 'ruhrgebiet',
  group: 'staedte',
  order: 9,
  tool: 'stadt',
  zone: 'essen',
  preset: { g: '4', k: 'diesel', n: '5' },
  related: ['nordrhein-westfalen', 'route', 'duesseldorf', 'koeln', 'lkw-busse', 'motorrad'],
  sources: ['essen', 'brms', 'dortmund', 'nrw', 'ubaListe'],
  de: {
    slug: 'umweltzone-ruhrgebiet',
    nav: 'Ruhrgebiet',
    card: '13 Städte von Duisburg bis Dortmund, rund 850 km², eine gemeinsame Zone: seit 2014 nur Grün.',
    title: 'Umweltzone Ruhrgebiet 2026: 13 Städte, eine grüne Zone',
    description: 'Umweltzone Ruhrgebiet 2026: 13 Städte von Duisburg bis Dortmund bilden eine Zone von rund 850 km², seit Juli 2014 nur Grün. Alle Städte, Regel für die A 40.',
    h1: 'Umweltzone Ruhrgebiet',
    intro: 'Voreingestellt ist Essen mit einem Diesel Euro 5. Wählen Sie eine andere Ruhrgebietsstadt: Die Zone ist dieselbe.',
    resume: (h) => `Das Ruhrgebiet hat die größte zusammenhängende Umweltzone Deutschlands. Nach Angaben der Stadt Essen erstreckt sie sich von Duisburg bis Dortmund über rund 850 Quadratkilometer, und 13 Städte sind in ihr zusammengefasst: ${staedte(h)}. Die Zone geht auf den Luftreinhalteplan Ruhrgebiet zurück, den die Bezirksregierungen Düsseldorf, Münster und Arnsberg gemeinsam aufgestellt haben. Die erste Stufe begann am 1. Januar 2012, die zweite am 1. Januar 2013, und seit dem 1. Juli 2014 dürfen nur Fahrzeuge mit grüner Plakette hineinfahren. Die Bezirksregierung Düsseldorf hat 2022 festgehalten, dass die Festsetzung der Umweltzonen in den Ruhrgebietsstädten ihre Gültigkeit behält. Wer zwischen den Städten pendelt, fährt also meist durchgehend in der Zone, ohne dass an jeder Stadtgrenze ein neues Schild steht. Die Autobahnen, darunter die A 40, sind nach dem Plan von der Zone ausgenommen, damit der Durchgangsverkehr fließen kann; das zeigen auch die Schilder an den Abfahrten. Hagen hat eine eigene Zone, die nicht zum Verbund gehört, und Dinslaken grenzt im Westen an. Dieselverbote gibt es im Ruhrgebiet derzeit nicht.`,
    faqs: () => [
      { q: 'Brauche ich auf der A 40 durch das Ruhrgebiet eine Plakette?', a: 'Nein, solange Sie auf der Autobahn bleiben. Die Autobahnen sind von der Umweltzone Ruhrgebiet ausgenommen; die Schilder mit dem Zeichen 270.1 stehen an den Abfahrten. Wer die A 40 in Essen, Bochum oder Dortmund verlässt, um in die Stadt zu fahren, braucht die grüne Plakette. Das gilt ebenso für die A 42, die A 43 und die A 52.' },
      { q: 'Gehört Hagen zur Umweltzone Ruhrgebiet?', a: 'Nein. Hagen hat eine eigene Umweltzone, die der Rat am 14. Juli 2011 zum 1. Januar 2012 beschlossen hat; seit dem 1. Juli 2014 gilt dort ebenfalls nur Grün. Sie umfasst die Innenstadt und angrenzende Stadtteile wie Eckesey, Altenhagen und Wehringhausen. Für Autofahrer ändert das nichts, denn die Regel ist dieselbe; die Prüfung führt Hagen als eigene Zone.' },
      { q: 'Muss ich in jeder Ruhrgebietsstadt eine eigene Plakette haben?', a: 'Nein. Eine grüne Plakette gilt in allen 13 Städten der gemeinsamen Zone und darüber hinaus in jeder Umweltzone Deutschlands. Sie ist an Fahrzeug und Kennzeichen gebunden, nicht an eine Stadt. Ausgegeben wird sie von jeder Zulassungsbehörde und jeder Stelle für Abgasuntersuchungen, ganz gleich, in welcher Stadt Sie wohnen.' },
    ],
    body: (h) => `<h2>Stufen der Zone Ruhrgebiet</h2>
${stufen(h, 'ruhrgebiet')}
<h2>Die 13 Städte</h2>
<p>${staedte(h)}. Die ${h.src('essen', 'Stadt Essen')} beschreibt die Zone als zusammenhängendes Gebiet von Duisburg bis Dortmund; die ${h.src('dortmund', 'Stadt Dortmund')} und die ${h.src('brms', 'Bezirksregierung Münster')} führen sie ebenso. In der Prüfung oben sind alle 13 Städte einzeln wählbar und zeigen dieselbe Zone.</p>
<h2>Unterwegs im Revier</h2>
<p>Für ${h.a('lkw-busse', 'Lkw und Busse')} gilt die gleiche Pflicht, ${h.a('motorrad', 'Motorräder')} sind frei. Wer weiter nach ${h.a('duesseldorf', 'Düsseldorf')} oder ${h.a('koeln', 'Köln')} fährt, kommt in weitere grüne Zonen; die ${h.a('route', 'Routenprüfung')} fasst sie zusammen.</p>`,
  },
  en: {
    slug: 'ruhr-low-emission-zone',
    nav: 'Ruhr area',
    card: '13 cities from Duisburg to Dortmund, about 850 km², one joint zone: green only since 2014.',
    title: 'Ruhr low-emission zone 2026: 13 cities, one green zone',
    description: 'Ruhr low-emission zone 2026: 13 cities from Duisburg to Dortmund form one zone of about 850 km², green only since July 2014. Which cities, and the A 40 rule.',
    h1: 'Ruhr area low-emission zone',
    intro: 'Essen is preset with a Euro 5 diesel. Choose another Ruhr city: the zone is the same.',
    resume: (h) => `The Ruhr area has Germany’s largest continuous low-emission zone. According to the city of Essen it stretches from Duisburg to Dortmund over about 850 square kilometres, and 13 cities are combined in it: ${staedte(h)}. The zone goes back to the Ruhr clean-air plan drawn up jointly by the district governments of Düsseldorf, Münster and Arnsberg. Stage one began on 1 January 2012, stage two on 1 January 2013, and since 1 July 2014 only vehicles with a green sticker may enter. In 2022 the Düsseldorf district government confirmed that the designation of the zones in the Ruhr cities remains valid. Commuters between the cities therefore mostly drive within the zone throughout, without a new sign at every city boundary. The motorways, including the A 40, are excluded from the zone under the plan so that through traffic can flow, as the signs at the exits also show. Hagen has its own zone that is not part of the joint one, and Dinslaken adjoins it to the west. There are currently no diesel bans in the Ruhr area.`,
    faqs: () => [
      { q: 'Do I need a sticker on the A 40 through the Ruhr?', a: 'No, as long as you stay on the motorway. Motorways are excluded from the Ruhr zone; the 270.1 signs stand at the exits. If you leave the A 40 in Essen, Bochum or Dortmund to drive into town, you need the green sticker. The same applies to the A 42, A 43 and A 52.' },
      { q: 'Is Hagen part of the Ruhr zone?', a: 'No. Hagen has its own low-emission zone, which the council decided on 14 July 2011 to introduce on 1 January 2012; since 1 July 2014 it too has been green only. It covers the centre and adjacent districts such as Eckesey, Altenhagen and Wehringhausen. For drivers nothing changes, since the rule is the same; the check lists Hagen as a separate zone.' },
      { q: 'Do I need a separate sticker for each Ruhr city?', a: 'No. One green sticker is valid in all 13 cities of the joint zone and in every other low-emission zone in Germany. It is tied to the vehicle and plate, not to a city. Any registration authority and any emission-test body issues it, whichever city you live in.' },
    ],
    body: (h) => `<h2>Stages of the Ruhr zone</h2>
${stufen(h, 'ruhrgebiet')}
<h2>The 13 cities</h2>
<p>${staedte(h)}. The ${h.src('essen', 'City of Essen')} describes the zone as one continuous area from Duisburg to Dortmund; the ${h.src('dortmund', 'City of Dortmund')} and the ${h.src('brms', 'Münster district government')} list it the same way. In the check above all 13 cities can be selected individually and show the same zone.</p>
<h2>Getting around the Ruhr</h2>
<p>${h.a('lkw-busse', 'Trucks and buses')} have the same obligation, while ${h.a('motorrad', 'motorcycles')} are exempt. If you continue to ${h.a('duesseldorf', 'Düsseldorf')} or ${h.a('koeln', 'Cologne')}, you enter further green zones; the ${h.a('route', 'route check')} brings them together.</p>`,
  },
});
