import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Köln : erweitert am 1.10.2019 ; Grün seit 1.7.2014 (UBA). */
export default defineGuide({
  id: 'koeln',
  group: 'staedte',
  order: 4,
  tool: 'stadt',
  zone: 'koeln',
  preset: { g: '3', k: 'benzin', n: '1' },
  related: ['nordrhein-westfalen', 'duesseldorf', 'ruhrgebiet', 'route', 'bussgeld', 'auslaendische-fahrzeuge'],
  sources: ['koeln', 'nrw', 'ubaListe'],
  de: {
    slug: 'umweltzone-koeln',
    nav: 'Köln',
    card: 'Seit 2019 erweitert bis Rodenkirchen, Lindenthal, Ehrenfeld, Mülheim und Kalk: nur Grün.',
    title: 'Umweltzone Köln 2026: erweitertes Gebiet, nur Grün',
    description: 'Umweltzone Köln 2026: Seit Oktober 2019 reicht die Zone über die Innenstadt hinaus bis Rodenkirchen, Lindenthal, Ehrenfeld, Mülheim und Kalk; es gilt nur Grün.',
    h1: 'Umweltzone Köln',
    intro: 'Voreingestellt ist ein alter Benziner mit Euro 1. Tragen Sie Ihr Fahrzeug ein und prüfen Sie, ob es in die Kölner Zone darf.',
    resume: () => `Köln hatte eine der ersten Umweltzonen Deutschlands. Die erste Stufe galt ab dem 1. Januar 2008, damals nur für die Innenstadt. Seit dem 1. Juli 2014 dürfen nur noch Fahrzeuge mit grüner Plakette in die Zone, wie in allen Zonen Nordrhein-Westfalens. Am 1. Oktober 2019 hat die Stadt das Gebiet deutlich erweitert: Seitdem gehören unter anderem Teile von Rodenkirchen, Lindenthal, Ehrenfeld, Nippes, Mülheim und Kalk dazu, also auch Viertel rechts des Rheins. Wer Köln nur von früher kennt, sollte deshalb nicht davon ausgehen, dass die Zone am Ring endet. Ein Dieselfahrverbot gibt es in Köln derzeit nicht; ein Diesel mit grüner Plakette darf überall hinein. Ein Benziner bekommt Grün schon mit geregeltem Katalysator, also meist ab Baujahr 1993, ein Diesel ab Euro 4 oder ab Euro 3 mit Partikelfilter. Für die Messe Köln in Deutz, den Dom, die Altstadt und die Arenen gilt die Plakettenpflicht. Wer von außerhalb zu einem Termin in der Stadt anreist, kann auf die Park-and-Ride-Plätze am Stadtrand ausweichen und mit Bahn oder Bus weiterfahren.`,
    faqs: () => [
      { q: 'Liegt die Messe Köln in der Umweltzone?', a: 'Ja, das Messegelände in Deutz liegt rechts des Rheins innerhalb der Zone, die seit der Erweiterung von 2019 auch große Teile der rechtsrheinischen Stadtteile umfasst. Für die Anfahrt mit dem Auto, auch zu den Parkhäusern der Messe, brauchen Sie deshalb die grüne Plakette oder eine Befreiung. Busse von Ausstellern brauchen ebenfalls Grün.' },
      { q: 'Wo genau verläuft die Grenze der Kölner Umweltzone?', a: 'Die Stadt Köln zeigt die genaue Grenze auf einer Karte auf ihrer Seite zur Umweltzone. Sie folgt größeren Straßen und Bahnlinien und schließt seit dem 1. Oktober 2019 zusätzliche Bereiche in Rodenkirchen, Lindenthal, Ehrenfeld, Nippes, Mülheim und Kalk ein. Maßgeblich ist vor Ort die Beschilderung mit dem Zeichen 270.1 an jeder Einfahrt.' },
      { q: 'Wo bekomme ich in Köln eine Plakette?', a: 'Bei der Kfz-Zulassungsstelle der Stadt sowie bei allen Stellen, die Abgasuntersuchungen durchführen dürfen, also bei Prüforganisationen und anerkannten Werkstätten. Die Gebühr legt die jeweilige Stelle fest; sie liegt bundesweit meist zwischen fünf und zehn Euro. Mitzubringen ist die Zulassungsbescheinigung Teil I, bei ausländischen Fahrzeugen auch ein Nachweis der Abgasnorm.' },
    ],
    body: (h) => `<h2>Stufen der Kölner Zone</h2>
${stufen(h, 'koeln')}
<h2>Die Erweiterung von 2019</h2>
<p>Nach Angaben der ${h.src('koeln', 'Stadt Köln')} gilt seit dem 1. Oktober 2019 die erweiterte Zone. Das Umweltbundesamt führt die grüne Stufe weiter mit dem 1. Juli 2014; die Erweiterung hat das Gebiet vergrößert, nicht die Regeln geändert. Das ${h.src('nrw', 'NRW-Umweltministerium')} führt Köln in seiner Liste der bestehenden Zonen.</p>
<h2>Nach Köln von außerhalb</h2>
<p>Viele fahren von Köln weiter nach ${h.a('duesseldorf', 'Düsseldorf')} oder ins ${h.a('ruhrgebiet', 'Ruhrgebiet')}; beide haben eigene Zonen mit den gleichen Regeln. Für Gäste aus dem Ausland steht das Wichtigste auf der Seite ${h.a('auslaendische-fahrzeuge', 'Ausländische Fahrzeuge')}, die Kosten eines Verstoßes auf der Seite ${h.a('bussgeld', 'Bußgeld')}.</p>`,
  },
  en: {
    slug: 'cologne-low-emission-zone',
    nav: 'Cologne',
    card: 'Extended in 2019 to Rodenkirchen, Lindenthal, Ehrenfeld, Mülheim and Kalk: green only.',
    title: 'Cologne low-emission zone 2026: extended area, green only',
    description: 'Cologne low-emission zone 2026: since October 2019 the zone reaches beyond the centre to Rodenkirchen, Lindenthal, Ehrenfeld, Mülheim and Kalk. Green only.',
    h1: 'Cologne low-emission zone',
    intro: 'The preset is an old Euro 1 petrol car. Enter your vehicle and check whether it may enter the Cologne zone.',
    resume: () => `Cologne had one of Germany’s first low-emission zones. Stage one applied from 1 January 2008, then covering only the city centre. Since 1 July 2014 only vehicles with a green sticker may enter, as in every zone in North Rhine-Westphalia. On 1 October 2019 the city extended the area considerably: since then parts of Rodenkirchen, Lindenthal, Ehrenfeld, Nippes, Mülheim and Kalk have been included, so districts on the right bank of the Rhine as well. If you only know Cologne from earlier visits, do not assume the zone ends at the ring road. Cologne currently has no diesel ban; a diesel with a green sticker may go anywhere. A petrol car gets green with a regulated catalytic converter, usually from 1993 onwards, a diesel from Euro 4 or from Euro 3 with a particle filter. The sticker is required for the Cologne trade fair in Deutz, the cathedral, the old town and the arenas. Visitors from outside can use the park-and-ride sites on the edge of town and continue by train or bus.`,
    faqs: () => [
      { q: 'Is the Cologne trade fair inside the zone?', a: 'Yes, the fairground in Deutz lies on the right bank of the Rhine within the zone, which since the 2019 extension also covers large parts of the right-bank districts. Driving there, including to the fair’s car parks, therefore requires the green sticker or an exemption. Exhibitors’ coaches need green too.' },
      { q: 'Where exactly is the boundary of the Cologne zone?', a: 'The city of Cologne shows the exact boundary on a map on its low-emission zone page. It follows major roads and railway lines and, since 1 October 2019, includes additional areas in Rodenkirchen, Lindenthal, Ehrenfeld, Nippes, Mülheim and Kalk. On the ground, the 270.1 signs at every entry point decide.' },
      { q: 'Where can I get a sticker in Cologne?', a: 'From the city’s vehicle registration office and from any body authorised to carry out emission tests, such as testing organisations and approved garages. Each office sets its own fee; nationwide it is usually between five and ten euros. Bring registration certificate part I and, for foreign vehicles, proof of the emission standard.' },
    ],
    body: (h) => `<h2>Stages of the Cologne zone</h2>
${stufen(h, 'koeln')}
<h2>The 2019 extension</h2>
<p>According to the ${h.src('koeln', 'city of Cologne')}, the extended zone has applied since 1 October 2019. The German Environment Agency still dates the green stage to 1 July 2014; the extension enlarged the area rather than changing the rules. The ${h.src('nrw', 'North Rhine-Westphalia Environment Ministry')} lists Cologne among its existing zones.</p>
<h2>Coming to Cologne from elsewhere</h2>
<p>Many travel on from Cologne to ${h.a('duesseldorf', 'Düsseldorf')} or the ${h.a('ruhrgebiet', 'Ruhr area')}; both have their own zones with the same rules. Visitors from abroad will find the essentials on the ${h.a('auslaendische-fahrzeuge', 'foreign vehicles')} page, and the cost of an offence on the ${h.a('bussgeld', 'fines')} page.</p>`,
  },
});
