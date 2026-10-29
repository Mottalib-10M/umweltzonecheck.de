import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** München : Mittlerer Ring und innen ; Dieselzufahrtsbeschränkung Euro 4 seit 1.2.2023 ; 9. Fortschreibung 20.10.2025. */
export default defineGuide({
  id: 'muenchen',
  group: 'staedte',
  order: 3,
  tool: 'stadt',
  zone: 'muenchen',
  preset: { k: 'diesel', n: '4' },
  related: ['diesel-fahrverbot', 'bayern', 'augsburg', 'ausnahmegenehmigung', 'schwerbehindert', 'stuttgart'],
  sources: ['muenchen', 'byStmuv', 'ubaListe'],
  de: {
    slug: 'umweltzone-muenchen',
    nav: 'München',
    card: 'Mittlerer Ring und alles innerhalb, grüne Plakette, Diesel erst ab Euro 5: mit allen Ausnahmen.',
    title: 'Umweltzone München 2026: Mittlerer Ring, Diesel ab Euro 5',
    description: 'Umweltzone München 2026: Mittlerer Ring und alles innerhalb, grüne Plakette Pflicht, Diesel erst ab Euro 5. Ausnahmen für Lieferverkehr, Anwohner, Handwerk.',
    h1: 'Umweltzone München mit Dieselbeschränkung',
    intro: 'Voreingestellt ist ein Diesel Euro 4 mit grüner Plakette. Die Prüfung zeigt, warum er in München trotzdem nicht in die Zone darf.',
    resume: () => `Zur Münchner Umweltzone gehören der Mittlere Ring und alles, was innerhalb des Rings liegt. Die grüne Plakette ist seit Oktober 2012 Pflicht. Seit dem 1. Februar 2023 gilt zusätzlich eine Zufahrtsbeschränkung für Dieselfahrzeuge der Norm Euro 4/IV und schlechter, einschließlich des Mittleren Rings selbst; das Zusatzzeichen lautet sinngemäß „Diesel (außer Lieferverkehr und Anwohner) erst ab Euro 5/V frei“. Diesel ab Euro 5, Benziner und andere Antriebe dürfen mit grüner Plakette fahren. Eine früher geplante Ausweitung auf Euro 5 hat die Stadt nicht in Kraft gesetzt. Seit dem 20. Oktober 2025 gilt die neunte Fortschreibung des Luftreinhalteplans; der Grenzwert für Stickstoffdioxid wird nach Angaben der Stadt seit 2024 im ganzen Stadtgebiet eingehalten. Die Ausnahmen sind in München ungewöhnlich breit. Gesetzlich ausgenommen sind Diesel Euro 6/VI und Fahrzeuge mit entsprechender Hardwarenachrüstung, bestimmte Menschen mit Behinderung und Einsatzkräfte. Pauschal ausgenommen sind unter anderem Anwohner und Lieferverkehr, Taxis und Mietwagen, Bestattungsfahrzeuge, Inhaber des Münchner Handwerker-Parkausweises, soziale und pflegerische Dienste sowie Schichtdienstleistende, denen der Nahverkehr nicht zumutbar ist.`,
    faqs: () => [
      { q: 'Darf ich mit einem Euro-4-Diesel zum Campingplatz Thalkirchen?', a: 'Ja. Die Stadt nennt die Zu- und Abfahrt zum Campingplatz Thalkirchen ausdrücklich unter den pauschalen Ausnahmen von der Dieselbeschränkung, ebenso die Großmarkthalle, den Autoreisezug am Ostbahnhof und die Parkharfe am Olympiastadion. Für die Umweltzone selbst braucht das Fahrzeug trotzdem die grüne Plakette oder eine Befreiung nach Anhang 3.' },
      { q: 'Gilt die Münchner Dieselbeschränkung auch auf dem Mittleren Ring?', a: 'Ja. Der Mittlere Ring gehört zur Umweltzone, und die Zufahrtsbeschränkung für Diesel bis Euro 4 gilt ausdrücklich einschließlich des Rings. Wer mit einem solchen Fahrzeug München umfahren will, muss den Autobahnring nutzen. Für den Ring gilt außerdem die Pflicht zur grünen Plakette für alle Fahrzeuge.' },
      { q: 'Wie beantrage ich in München eine Einzelausnahme?', a: 'Beim Kreisverwaltungsreferat, online über die Seite der Stadt. Antragsberechtigt sind zum Beispiel Fahrten zur Reparatur betriebsnotwendiger Anlagen, zur Behebung von Gebäudeschäden, zur Versorgung der Bevölkerung, aber auch Spezialfahrzeuge mit geringer Fahrleistung, Fahrzeuge mit Umbauten für Schwerbehinderte, regelmäßige Arztbesuche und private Härtefälle. Rechtsgrundlage ist § 1 Abs. 2 der 35. BImSchV.' },
    ],
    body: (h) => `<h2>Stufen der Münchner Zone</h2>
${stufen(h, 'muenchen')}
<h2>Wer trotz Euro 4 hineindarf</h2>
${h.table(['Art der Ausnahme', 'Beispiele'], [
  ['gesetzlich', 'Diesel Euro 6/VI, Hardwarenachrüstung, Behinderung, Einsatzkräfte'],
  ['pauschal per Schild oder Allgemeinverfügung', 'Anwohner, Lieferverkehr, Taxis, Mietwagen, Bestatter, Handwerker-Parkausweis, Pflegedienste, Schichtdienst'],
  ['Zufahrt frei', 'Großmarkthalle, Autoreisezug Ostbahnhof, Parkharfe Olympiastadion, Campingplatz Thalkirchen, ZOB für Linienbusse'],
  ['auf Antrag', 'Härtefälle, Spezialfahrzeuge, Arztbesuche, Produktion'],
], `${h.src('muenchen', 'Landeshauptstadt München, Umweltzone')}`)}
<h2>Bayern und Umgebung</h2>
<p>In Bayern gibt es außer München nur die Zonen ${h.a('augsburg', 'Augsburg')} und Regensburg; Neu-Ulm hat seine Zone 2024 aufgehoben (${h.src('byStmuv', 'Bayerisches Umweltministerium')}). Einen Vergleich mit Stuttgart bietet die Seite ${h.a('diesel-fahrverbot', 'Dieselfahrverbot')}.</p>`,
  },
  en: {
    slug: 'munich-low-emission-zone',
    nav: 'Munich',
    card: 'The Mittlerer Ring and everything inside, green sticker, diesels from Euro 5 only: with all exemptions.',
    title: 'Munich low-emission zone 2026: Mittlerer Ring, Euro 5 diesel',
    description: 'Munich low-emission zone 2026: the Mittlerer Ring and everything inside, green sticker required, diesels from Euro 5 only. Exemptions for residents and more.',
    h1: 'Munich low-emission zone with diesel restriction',
    intro: 'The preset is a Euro 4 diesel with a green sticker. The check shows why it still may not enter the Munich zone.',
    resume: () => `Munich’s low-emission zone consists of the Mittlerer Ring and everything inside it. The green sticker has been required since October 2012. Since 1 February 2023 there has also been an entry restriction for diesel vehicles of Euro 4/IV and below, including on the Mittlerer Ring itself; the additional sign reads, in effect, “Diesel (except deliveries and residents) only from Euro 5/V”. Diesels from Euro 5, petrol cars and other drives may enter with a green sticker. A previously planned extension to Euro 5 was not put into force. The ninth update of the clean-air plan has applied since 20 October 2025; according to the city, the nitrogen dioxide limit has been met across the whole city since 2024. Munich’s exemptions are unusually broad. Statutory exemptions cover Euro 6/VI diesels and vehicles with a corresponding hardware retrofit, certain people with disabilities and emergency services. Blanket exemptions include residents and deliveries, taxis and private-hire cars, funeral vehicles, holders of the Munich tradespeople’s parking permit, social and care services, and shift workers for whom public transport is not reasonable.`,
    faqs: () => [
      { q: 'Can I take a Euro 4 diesel to the Thalkirchen campsite?', a: 'Yes. The city expressly lists access to and from the Thalkirchen campsite among the blanket exemptions from the diesel restriction, along with the wholesale market hall, the car-train terminal at Ostbahnhof and the Olympic stadium car park. For the zone itself, however, the vehicle still needs the green sticker or an Annex 3 exemption.' },
      { q: 'Does the Munich diesel restriction apply on the Mittlerer Ring?', a: 'Yes. The Mittlerer Ring is part of the zone, and the entry restriction for diesels up to Euro 4 expressly includes the ring. To bypass Munich with such a vehicle you have to use the motorway ring. The green sticker requirement also applies to all vehicles on the Mittlerer Ring.' },
      { q: 'How do I apply for an individual exemption in Munich?', a: 'Through the district administration department, online via the city’s page. Eligible cases include trips to repair essential installations, fix building damage or supply the population, as well as special vehicles with low mileage, vehicles adapted for disabled people, regular medical visits and private hardship. The legal basis is section 1(2) of the 35th BImSchV.' },
    ],
    body: (h) => `<h2>Stages of the Munich zone</h2>
${stufen(h, 'muenchen')}
<h2>Who may enter despite Euro 4</h2>
${h.table(['Type of exemption', 'Examples'], [
  ['statutory', 'Euro 6/VI diesel, hardware retrofit, disability, emergency services'],
  ['blanket, by sign or general order', 'residents, deliveries, taxis, private hire, funeral vehicles, tradespeople’s permit, care services, shift work'],
  ['access allowed', 'wholesale market hall, car train at Ostbahnhof, Olympic stadium car park, Thalkirchen campsite, coach station for scheduled buses'],
  ['on application', 'hardship, special vehicles, medical visits, production'],
], `${h.src('muenchen', 'City of Munich, low-emission zone')}`)}
<h2>Bavaria and around</h2>
<p>Besides Munich, Bavaria only has the ${h.a('augsburg', 'Augsburg')} and Regensburg zones; Neu-Ulm lifted its zone in 2024 (${h.src('byStmuv', 'Bavarian Environment Ministry')}). A comparison with Stuttgart is on the ${h.a('diesel-fahrverbot', 'diesel bans')} page.</p>`,
  },
});
