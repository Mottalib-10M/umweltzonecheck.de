import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Stuttgart : ganzes Stadtgebiet seit 1.3.2008, Grün seit 2012 ; Dieselverbote Euro 4 (2019) und Euro 5 kleine Zone (2020). */
export default defineGuide({
  id: 'stuttgart',
  group: 'staedte',
  order: 2,
  tool: 'stadt',
  zone: 'stuttgart',
  preset: { k: 'diesel', n: '5' },
  related: ['diesel-fahrverbot', 'baden-wuerttemberg', 'ausnahmegenehmigung', 'partikelfilter', 'muenchen', 'aufgehobene-umweltzonen'],
  sources: ['stuttgartDiesel', 'stuttgartPlakette', 'rpStuttgart', 'bwVm', 'ubaListe'],
  de: {
    slug: 'umweltzone-stuttgart',
    nav: 'Stuttgart',
    card: 'Ganze Stadt als Zone, dazu Dieselverbote bis Euro 4 und in der kleinen Zone bis Euro 5.',
    title: 'Umweltzone Stuttgart 2026: Plakette und Dieselverbot',
    description: 'Umweltzone Stuttgart 2026: Die ganze Stadt ist Zone, dazu ein Dieselverbot für Euro 4 überall und Euro 5 in der kleinen Umweltzone. Ausnahmen im Überblick.',
    h1: 'Umweltzone und Dieselverbot in Stuttgart',
    intro: 'Voreingestellt ist ein Diesel Euro 5. Die Prüfung zeigt zuerst die Plakette und dann, ob ein Dieselverbot in Stuttgart greift.',
    resume: () => `In Stuttgart ist das gesamte Stadtgebiet Umweltzone, seit dem 1. März 2008, und seit 2012 dürfen dort nur Fahrzeuge mit grüner Plakette fahren. Damit endet es aber nicht, denn Stuttgart hat zusätzlich Dieselverbote. Seit dem 1. Januar 2019 gilt im ganzen Stadtgebiet ein ganzjähriges Verkehrsverbot für Dieselfahrzeuge der Norm Euro 4/IV und schlechter, auch wenn sie eine grüne Plakette tragen. Seit dem 1. Juli 2020 kommt in der kleinen Umweltzone ein Verbot für Euro 5/V hinzu; sie umfasst den Talkessel und die Stadtbezirke Bad Cannstatt, Feuerbach und Zuffenhausen. Die Stadt weist darauf hin, dass dieses Euro-5-Verbot unter dem Vorbehalt weiterer gerichtlicher Entscheidungen steht. Diesel der Norm Euro 6/VI sind nicht betroffen. Allgemein ausgenommen sind nach den Angaben der Stadt vom 24. Februar 2026 unter anderem der geschäftsmäßige Lieferverkehr, Menschen mit bestimmten Behinderungen, medizinische Notfälle, Fahrten zu und von P+R-Parkplätzen sowie Zwei- und Dreiräder. Drei Strecken sind ausgenommen, damit bestimmte Stadtteile erreichbar bleiben. Wer weder darunter fällt noch Euro 6 hat, kann eine Einzelausnahme beantragen.`,
    faqs: () => [
      { q: 'Welche Strecken sind in Stuttgart vom Dieselverbot ausgenommen?', a: 'Die Stadt nennt drei Strecken, die mit „Zufahrt zu … frei“ beschildert sind: die Hafenbahnstraße zwischen B 10 und Obertürkheimer Straße, die Heerstraße, Mittlere Filderstraße und Neuhauser Straße entlang der A 8, sowie die B 10 und B 27a zwischen Korntal-Münchingen und Kornwestheim. Sie erlauben die Durchfahrt zu bestimmten Stadtteilen, nicht die Fahrt durch die übrige Stadt.' },
      { q: 'Darf ich mit einem Euro-5-Diesel zum Flughafen oder zur Messe Stuttgart?', a: 'Flughafen und Messe liegen auf den Fildern in Leinfelden-Echterdingen, außerhalb des Stuttgarter Stadtgebiets und damit außerhalb von Zone und Dieselverbot. Die Anfahrt über die A 8 ist frei. In die kleine Umweltzone im Talkessel darf ein Euro-5-Diesel dagegen nicht, ins übrige Stadtgebiet mit grüner Plakette schon.' },
      { q: 'Wo beantrage ich in Stuttgart die Plakette?', a: 'Die Landeshauptstadt gibt die Plakette über ihre Kfz-Zulassungsstelle aus und beschreibt das Verfahren auf ihrer Seite „Umweltplakette beantragen“. Daneben geben die Stellen für Abgasuntersuchungen sie aus. Für Einzelausnahmen vom Dieselverbot gibt es ein eigenes Antragsverfahren der Stadt; die Plakette allein ersetzt diese Genehmigung nicht.' },
    ],
    body: (h) => `<h2>Stufen der Stuttgarter Zone</h2>
${stufen(h, 'stuttgart')}
<h2>Dieselverbote in Stuttgart</h2>
${h.table(['seit', 'Gebiet', 'betroffen'], [
  [h.date('2019-01-01'), 'ganzes Stadtgebiet', 'Diesel Euro 4/IV und schlechter'],
  [h.date('2020-07-01'), 'kleine Umweltzone: Talkessel, Bad Cannstatt, Feuerbach, Zuffenhausen', 'Diesel Euro 5/V und schlechter'],
], `${h.src('stuttgartDiesel', 'Landeshauptstadt Stuttgart, Stand 24.02.2026')}`)}
<p>Das Land hat die Verbote aufgrund von Gerichtsurteilen eingeführt, um die Grenzwerte für Stickstoffdioxid einzuhalten; die Stadt setzt sie um. Mehr zu allen Verboten in Deutschland steht auf der Seite ${h.a('diesel-fahrverbot', 'Dieselfahrverbot')}.</p>
<h2>Nachbarn</h2>
<p>Im Regierungsbezirk bestehen laut ${h.src('rpStuttgart', 'Regierungspräsidium Stuttgart')} nur noch die Zonen Stuttgart und Ludwigsburg mit Umgebung. Leonberg, Heilbronn und Herrenberg sind ${h.a('aufgehobene-umweltzonen', 'aufgehoben')}. Wie das ganze Land dasteht, zeigt die Seite ${h.a('baden-wuerttemberg', 'Baden-Württemberg')}.</p>`,
  },
  en: {
    slug: 'stuttgart-low-emission-zone',
    nav: 'Stuttgart',
    card: 'The whole city is a zone, plus diesel bans up to Euro 4 and up to Euro 5 in the small zone.',
    title: 'Stuttgart low-emission zone 2026: sticker and diesel ban',
    description: 'Stuttgart low-emission zone 2026: the whole city is a zone, and a diesel ban bars Euro 4 everywhere and Euro 5 in the small zone. Exemptions and routes listed.',
    h1: 'Stuttgart’s low-emission zone and diesel ban',
    intro: 'The preset is a Euro 5 diesel. The check shows the sticker first, then whether a Stuttgart diesel ban applies.',
    resume: () => `In Stuttgart the entire city area has been a low-emission zone since 1 March 2008, and since 2012 only vehicles with a green sticker may drive there. That is not the end of it, because Stuttgart also has diesel bans. Since 1 January 2019 a year-round ban on diesel vehicles of Euro 4/IV and below has applied across the whole city, even if they carry a green sticker. Since 1 July 2020 a ban on Euro 5/V has been added in the small low-emission zone, which covers the central basin and the districts of Bad Cannstatt, Feuerbach and Zuffenhausen. The city points out that this Euro 5 ban is subject to further court rulings. Euro 6/VI diesels are not affected. According to the city’s information of 24 February 2026, general exemptions include commercial deliveries, people with certain disabilities, medical emergencies, trips to and from park-and-ride sites, and two- and three-wheelers. Three routes are exempt so that certain districts stay reachable. Anyone not covered and without Euro 6 can apply for an individual exemption.`,
    faqs: () => [
      { q: 'Which Stuttgart routes are exempt from the diesel ban?', a: 'The city names three routes signposted “Zufahrt zu … frei”: Hafenbahnstraße between the B 10 and Obertürkheimer Straße; Heerstraße, Mittlere Filderstraße and Neuhauser Straße along the A 8; and the B 10 and B 27a between Korntal-Münchingen and Kornwestheim. They allow access to certain districts, not driving through the rest of the city.' },
      { q: 'Can I drive a Euro 5 diesel to Stuttgart airport or the trade fair?', a: 'The airport and trade fair lie on the Filder plateau in Leinfelden-Echterdingen, outside the city of Stuttgart and therefore outside both the zone and the diesel ban. Access via the A 8 is free. A Euro 5 diesel may not enter the small zone in the central basin, but may enter the rest of the city with a green sticker.' },
      { q: 'Where do I apply for the sticker in Stuttgart?', a: 'The city issues the sticker through its vehicle registration office and explains the procedure on its “Umweltplakette beantragen” page. Emission-test bodies issue it as well. Individual exemptions from the diesel ban have their own application procedure with the city; the sticker alone does not replace that permit.' },
    ],
    body: (h) => `<h2>Stages of the Stuttgart zone</h2>
${stufen(h, 'stuttgart')}
<h2>Diesel bans in Stuttgart</h2>
${h.table(['since', 'area', 'affected'], [
  [h.date('2019-01-01'), 'whole city', 'diesel Euro 4/IV and below'],
  [h.date('2020-07-01'), 'small zone: central basin, Bad Cannstatt, Feuerbach, Zuffenhausen', 'diesel Euro 5/V and below'],
], `${h.src('stuttgartDiesel', 'City of Stuttgart, as of 24 Feb 2026')}`)}
<p>The state introduced the bans following court rulings to meet the nitrogen dioxide limits; the city implements them. More on all bans in Germany is on the ${h.a('diesel-fahrverbot', 'diesel bans')} page.</p>
<h2>Neighbours</h2>
<p>According to the ${h.src('rpStuttgart', 'Stuttgart regional council')}, only the Stuttgart and Ludwigsburg zones remain in its district. Leonberg, Heilbronn and Herrenberg have been ${h.a('aufgehobene-umweltzonen', 'lifted')}. The state as a whole is covered on the ${h.a('baden-wuerttemberg', 'Baden-Württemberg')} page.</p>`,
  },
});
