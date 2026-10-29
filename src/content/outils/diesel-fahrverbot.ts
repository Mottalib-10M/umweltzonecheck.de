import { defineGuide } from '../../lib/guide-types';

/** Dieselverbote : Stuttgart (Euro 4 ganz, Euro 5 kleine Zone), München (Euro 4), Darmstadt (Strecken, nicht bestätigt). */
export default defineGuide({
  id: 'diesel-fahrverbot',
  group: 'regeln',
  order: 6,
  tool: 'stadt',
  zone: 'stuttgart',
  preset: { k: 'diesel', n: '5' },
  related: ['stuttgart', 'muenchen', 'partikelfilter', 'ausnahmegenehmigung', 'gruene-plakette', 'ausblick-2030'],
  sources: ['stuttgartDiesel', 'muenchen', 'hessen', 'bimschg40', 'bwVm'],
  de: {
    slug: 'diesel-fahrverbot',
    nav: 'Dieselfahrverbot',
    card: 'Grüne Plakette reicht nicht überall: Stuttgart und München sperren ältere Diesel zusätzlich aus.',
    title: 'Dieselfahrverbot 2026: Stuttgart, München, Darmstadt',
    description: 'Dieselfahrverbot 2026: wo ältere Diesel trotz grüner Plakette nicht fahren dürfen. Stuttgart sperrt bis Euro 4, in der kleinen Zone Euro 5, München bis Euro 4.',
    h1: 'Dieselfahrverbote zusätzlich zur Umweltzone',
    intro: 'Stuttgart ist voreingestellt, mit einem Diesel Euro 5. Ändern Sie Stadt, Norm und Tag: Die Prüfung zeigt Plakette und Dieselverbot zusammen.',
    resume: () => `Ein Dieselfahrverbot ist etwas anderes als die Umweltzone, und die grüne Plakette schützt nicht davor. Es beruht ebenfalls auf § 40 des Bundes-Immissionsschutzgesetzes und auf einem Luftreinhalteplan, richtet sich aber nach der Euro-Norm des Dieselmotors, nicht nach der Schadstoffgruppe. Im Jahr 2026 gibt es solche Verbote vor allem in zwei Städten. In Stuttgart gilt seit dem 1. Januar 2019 im ganzen Stadtgebiet ein ganzjähriges Verkehrsverbot für Diesel der Norm Euro 4/IV und schlechter, und seit dem 1. Juli 2020 in der sogenannten kleinen Umweltzone, also dem Talkessel und den Bezirken Bad Cannstatt, Feuerbach und Zuffenhausen, zusätzlich für Euro 5/V; die Stadt weist darauf hin, dass das Euro-5-Verbot unter dem Vorbehalt weiterer Gerichtsentscheidungen steht. In München dürfen Diesel Euro 4/IV und schlechter seit dem 1. Februar 2023 nicht in die Umweltzone innerhalb des Mittleren Rings einfahren, Lieferverkehr und Anwohner sind per Beschilderung ausgenommen; die geplante Ausweitung auf Euro 5 wurde nicht in Kraft gesetzt. Diesel Euro 6/VI sind in beiden Städten nicht betroffen.`,
    faqs: () => [
      { q: 'Gilt das Stuttgarter Dieselverbot auch für Besucher von außerhalb?', a: 'Ja. Das Verbot betrifft jedes Dieselfahrzeug mit der jeweiligen Norm, unabhängig vom Wohnort oder vom Land der Zulassung. Allgemein ausgenommen sind nach Angaben der Stadt unter anderem der geschäftsmäßige Lieferverkehr, Menschen mit bestimmten Behinderungen, medizinische Notfälle, Fahrten zu und von P+R-Parkplätzen sowie Zwei- und Dreiräder. Drei ausgeschilderte Strecken bleiben befahrbar, damit bestimmte Stadtteile erreichbar sind.' },
      { q: 'Hilft eine Hardware-Nachrüstung gegen das Dieselverbot?', a: 'In München ja: Die Stadt zählt Diesel Euro 6/VI und Fahrzeuge mit entsprechender Hardwarenachrüstung zu den gesetzlichen Ausnahmen. Grundlage ist § 47 des Bundes-Immissionsschutzgesetzes. Für Stuttgart nennt die Stadtseite die Nachrüstung nicht in ihrer Kurzliste; ob ein nachgerüsteter Euro-5-Diesel in die kleine Zone darf, sagen die Details der Ausnahmeregelung. Ein Partikelfilter allein ändert die Euro-Norm nicht.' },
      { q: 'Warum gibt es in Hamburg und Berlin keine Dieselverbote mehr?', a: 'Die Prüfung auf dieser Seite kennt nur Verbote, die eine amtliche Seite für 2026 als geltend nennt. Für Berlin und Hamburg haben wir keine solche Angabe gefunden; Hamburg hat zudem keine Umweltzone. Das Bundes-Immissionsschutzgesetz sagt in § 47, dass Verkehrsverbote bei einem Stickstoffdioxid-Jahresmittel bis 50 Mikrogramm in der Regel unverhältnismäßig sind; mit sinkenden Werten fielen viele Streckenverbote weg.' },
    ],
    body: (h) => `<h2>Dieselverbote im Überblick</h2>
${h.table(['Stadt', 'seit', 'betroffen', 'Gebiet', 'Ausnahmen (Auszug)'], [
  ['Stuttgart', h.date('2019-01-01'), 'Diesel Euro 4/IV und schlechter', 'ganzes Stadtgebiet', 'Lieferverkehr, Behinderung, Notfälle, P+R'],
  ['Stuttgart', h.date('2020-07-01'), 'Diesel Euro 5/V und schlechter', 'kleine Umweltzone', 'wie oben'],
  ['München', h.date('2023-02-01'), 'Diesel Euro 4/IV und schlechter', 'Umweltzone mit Mittlerem Ring', 'Lieferverkehr, Anwohner, Taxis, Handwerker'],
  ['Darmstadt', h.date('2019-06-01'), 'Diesel bis Euro 5, Benziner bis Euro 2', 'zwei Straßen', 'nicht bestätigt'],
], `${h.src('stuttgartDiesel', 'Stadt Stuttgart (Stand 24.02.2026)')}, ${h.src('muenchen', 'Landeshauptstadt München')}`)}
<h2>Darmstadt: nicht bestätigt</h2>
<p>Für Darmstadt sind seit 2019 Streckenverbote auf zwei Straßen bekannt. Die Seiten der Stadt zur Luftreinhaltung waren bei unserer Prüfung nicht erreichbar, und die ${h.src('hessen', 'Seite des Landes Hessen')} nennt die Umweltzone, nicht die Streckenverbote. Ob sie 2026 noch gelten, ist deshalb nicht bestätigt; die Prüfung rechnet vorsichtshalber mit ihnen.</p>
<h2>Was das für Ihr Fahrzeug heißt</h2>
<p>Ein Diesel Euro 5 mit grüner Plakette darf in München in die Zone, in Stuttgart ins Stadtgebiet, aber nicht in die kleine Umweltzone. Ein Euro-4-Diesel mit ${h.a('partikelfilter', 'nachgerüstetem Filter')} hat zwar Grün, bleibt aber in beiden Städten draußen, wenn keine Ausnahme greift. Einzelheiten stehen auf den Seiten ${h.a('stuttgart', 'Stuttgart')} und ${h.a('muenchen', 'München')}; Einzelgenehmigungen beschreibt die Seite ${h.a('ausnahmegenehmigung', 'Ausnahmegenehmigung')}.</p>`,
  },
  en: {
    slug: 'diesel-driving-bans',
    nav: 'Diesel bans',
    card: 'Green is not always enough: Stuttgart and Munich also keep older diesels out.',
    title: 'Diesel driving bans Germany 2026: Stuttgart, Munich',
    description: 'German diesel driving bans 2026: where older diesels may not drive despite a green sticker. Stuttgart bans Euro 4, and Euro 5 in its small zone; Munich Euro 4.',
    h1: 'Diesel bans on top of the low-emission zone',
    intro: 'Stuttgart is preset with a Euro 5 diesel. Change city, norm and date: the check shows sticker and diesel ban together.',
    resume: () => `A diesel driving ban is not the same as a low-emission zone, and a green sticker does not protect you from it. It also rests on section 40 of the Federal Immission Control Act and on a clean-air plan, but it depends on the diesel engine’s Euro norm, not on the emission group. In 2026 such bans exist mainly in two cities. In Stuttgart, a year-round ban on diesels of Euro 4/IV and below has applied across the whole city since 1 January 2019, and since 1 July 2020 the so-called small low-emission zone, covering the central basin and the districts of Bad Cannstatt, Feuerbach and Zuffenhausen, also bans Euro 5/V; the city notes that the Euro 5 ban is subject to further court rulings. In Munich, diesels of Euro 4/IV and below have been barred from the zone inside the Mittlerer Ring since 1 February 2023, with deliveries and residents exempted by signage; the planned extension to Euro 5 was never put into force. Euro 6/VI diesels are not affected in either city.`,
    faqs: () => [
      { q: 'Does the Stuttgart diesel ban apply to visitors?', a: 'Yes. The ban covers every diesel vehicle of the relevant norm, regardless of where the driver lives or where the car is registered. According to the city, general exemptions include commercial deliveries, people with certain disabilities, medical emergencies, trips to and from park-and-ride sites, and two- and three-wheelers. Three signposted routes stay open so that certain districts remain reachable.' },
      { q: 'Does a hardware retrofit help against the diesel ban?', a: 'In Munich, yes: the city lists Euro 6/VI diesels and vehicles with a corresponding hardware retrofit among the statutory exemptions, based on section 47 of the Federal Immission Control Act. Stuttgart’s summary does not mention retrofits; whether a retrofitted Euro 5 diesel may enter the small zone is set out in the detailed exemption rules. A particle filter alone does not change the Euro norm.' },
      { q: 'Why are there no diesel bans in Hamburg or Berlin any more?', a: 'The check on this page only knows bans that an official page lists as in force for 2026. We found no such statement for Berlin or Hamburg, and Hamburg has no low-emission zone. Section 47 of the Federal Immission Control Act says traffic bans are usually disproportionate where annual nitrogen dioxide stays at or below 50 micrograms; as levels fell, many route bans were dropped.' },
    ],
    body: (h) => `<h2>Diesel bans at a glance</h2>
${h.table(['City', 'since', 'affected', 'area', 'exemptions (extract)'], [
  ['Stuttgart', h.date('2019-01-01'), 'diesel Euro 4/IV and below', 'whole city', 'deliveries, disability, emergencies, P+R'],
  ['Stuttgart', h.date('2020-07-01'), 'diesel Euro 5/V and below', 'small low-emission zone', 'as above'],
  ['Munich', h.date('2023-02-01'), 'diesel Euro 4/IV and below', 'zone including Mittlerer Ring', 'deliveries, residents, taxis, tradespeople'],
  ['Darmstadt', h.date('2019-06-01'), 'diesel up to Euro 5, petrol up to Euro 2', 'two streets', 'not confirmed'],
], `${h.src('stuttgartDiesel', 'City of Stuttgart (as of 24 Feb 2026)')}, ${h.src('muenchen', 'City of Munich')}`)}
<h2>Darmstadt: not confirmed</h2>
<p>Route bans on two streets have been known in Darmstadt since 2019. The city’s clean-air pages could not be reached during our check, and the ${h.src('hessen', 'state of Hesse’s page')} lists the zone, not the route bans. Whether they still apply in 2026 is therefore not confirmed; the check includes them as a precaution.</p>
<h2>What this means for your vehicle</h2>
<p>A Euro 5 diesel with a green sticker may enter the zone in Munich and the city of Stuttgart, but not Stuttgart’s small zone. A Euro 4 diesel with a ${h.a('partikelfilter', 'retrofitted filter')} has green but stays out of both cities unless an exemption applies. Details are on the ${h.a('stuttgart', 'Stuttgart')} and ${h.a('muenchen', 'Munich')} pages; individual permits are described on the ${h.a('ausnahmegenehmigung', 'exemption permit')} page.</p>`,
  },
});
