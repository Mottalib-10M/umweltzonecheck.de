import { defineGuide } from '../../lib/guide-types';

/** Ausnahmegenehmigung : § 1 Abs. 2 der 35. BImSchV, Behörde vor Ort ; allgemeine Ausnahmen Anhang 3. */
export default defineGuide({
  id: 'ausnahmegenehmigung',
  group: 'regeln',
  order: 2,
  tool: 'ausnahme',
  preset: { fall: 'pkw' },
  related: ['oldtimer', 'schwerbehindert', 'motorrad', 'bussgeld', 'wohnmobil', 'lkw-busse'],
  sources: ['bimschv35', 'anhang3', 'bimschg40', 'stuttgartPlakette', 'berlin'],
  de: {
    slug: 'ausnahmegenehmigung-umweltzone',
    nav: 'Ausnahmegenehmigung',
    card: 'Elf allgemeine Ausnahmen in Anhang 3 und die Einzelgenehmigung der Stadt: wer ohne Grün fahren darf.',
    title: 'Ausnahmegenehmigung Umweltzone 2026: wer darf ohne Grün?',
    description: 'Ausnahmegenehmigung für die Umweltzone 2026: die elf allgemeinen Ausnahmen nach Anhang 3 der 35. BImSchV und die Einzelgenehmigung der Stadt nach § 1 Abs. 2.',
    h1: 'Ausnahmen und Ausnahmegenehmigung',
    intro: 'Wählen Sie Ihren Fall: Die Prüfung zeigt, ob Anhang 3 Sie allgemein befreit oder ob Sie eine Genehmigung der Stadt brauchen.',
    resume: () => `Es gibt zwei Arten von Ausnahmen, und sie werden oft verwechselt. Die erste gilt kraft Gesetzes und überall: Anhang 3 der 35. BImSchV nennt elf Gruppen von Kraftfahrzeugen, die auch ohne Plakette in jede Umweltzone dürfen, darunter Motorräder, Krankenwagen, Fahrzeuge mit Sonderrechten, Oldtimer mit H-Kennzeichen, Fahrzeuge von Menschen mit den Merkzeichen aG, H oder Bl und seit Oktober 2026 Fahrzeuge mit E-Kennzeichen. Dafür muss man nichts beantragen. Die zweite ist die Ausnahmegenehmigung im Einzelfall nach § 1 Absatz 2 der Verordnung. Sie erteilt die zuständige Behörde der jeweiligen Stadt, in unaufschiebbaren Fällen auch die Polizei, für Fahrten von und zu bestimmten Einrichtungen, wenn ein öffentliches Interesse besteht, etwa die Versorgung der Bevölkerung, oder überwiegende und unaufschiebbare Interessen Einzelner es erfordern, etwa wenn Produktionsabläufe sonst nicht aufrechterhalten werden können. Diese Genehmigung gilt nur in der Zone, für die sie erteilt wurde, ist meist befristet, kostet eine Gebühr und setzt in vielen Städten voraus, dass eine Nachrüstung technisch nicht möglich ist.`,
    faqs: () => [
      { q: 'Gilt eine Ausnahmegenehmigung aus einer Stadt auch in anderen Umweltzonen?', a: 'Grundsätzlich nicht. Jede Genehmigung nach § 1 Abs. 2 wird von der Behörde der jeweiligen Zone erteilt und gilt nur dort. Einige Städte erkennen die Genehmigungen anderer Behörden an oder haben Absprachen getroffen, etwa im Ruhrgebiet für die gemeinsame Zone. Wer durch mehrere Zonen fährt, braucht im Zweifel mehrere Genehmigungen oder ein Fahrzeug mit grüner Plakette.' },
      { q: 'Was muss ich für den Antrag vorlegen?', a: 'Das legen die Städte selbst fest. Üblich sind die Zulassungsbescheinigung Teil I, ein Nachweis, dass das Fahrzeug nicht nachgerüstet werden kann (zum Beispiel eine Bescheinigung des Herstellers oder einer Werkstatt), und eine Begründung des Bedarfs, etwa ein Gewerbenachweis oder die Lage der Wohnung. Viele Städte verlangen auch einen Nachweis über die wirtschaftliche Lage, wenn kein Ersatzfahrzeug finanzierbar ist.' },
      { q: 'Brauche ich als Anwohner eine Ausnahmegenehmigung?', a: 'Die Plakettenpflicht kennt keine allgemeine Anwohnerausnahme; auch wer in der Zone wohnt, braucht Grün oder eine Befreiung. Anders bei manchen Dieselverboten: In München sind Anwohner vom Zufahrtsverbot für Diesel bis Euro 4 ausgenommen. Für die Umweltzone selbst bleibt Anwohnern ohne grüne Plakette nur die Einzelgenehmigung nach § 1 Abs. 2 bei ihrer Stadt.' },
    ],
    body: (h) => `<h2>Die elf allgemeinen Ausnahmen</h2>
${h.table(['Nr.', 'Fahrzeuge'], [
  ['1', 'mobile Maschinen und Geräte'],
  ['2', 'Arbeitsmaschinen'],
  ['3', 'land- und forstwirtschaftliche Zugmaschinen'],
  ['4', 'zwei- und dreirädrige Kraftfahrzeuge'],
  ['5', 'Krankenwagen, Arztwagen mit Schild „Arzt Notfalleinsatz“'],
  ['6', 'Fahrzeuge, mit denen Menschen mit Merkzeichen aG, H oder Bl fahren oder gefahren werden'],
  ['7', 'Fahrzeuge mit Sonderrechten nach § 35 StVO'],
  ['8', 'Fahrzeuge nichtdeutscher Truppen von Nichtvertragsstaaten der NATO bei dringenden militärischen Fahrten'],
  ['9', 'zivile Fahrzeuge im Auftrag der Bundeswehr bei unaufschiebbaren hoheitlichen Fahrten'],
  ['10', 'Oldtimer mit H- oder 07-Kennzeichen, gleichwertige Oldtimer aus EU, EWR und Türkei'],
  ['11', 'Fahrzeuge mit E-Kennzeichen (seit 1. Oktober 2026)'],
], `${h.src('anhang3', 'Anhang 3 der 35. BImSchV')}`, ['r', 'l'])}
<h2>Die Einzelgenehmigung der Stadt</h2>
<p>Für alles andere gibt es nur die Genehmigung nach ${h.src('bimschv35', '§ 1 Abs. 2 der 35. BImSchV')}. Die Gebühr, die Laufzeit und die Unterlagen legt jede Stadt selbst fest; die ${h.src('berlin', 'Berliner Senatsverwaltung')} und die ${h.src('stuttgartPlakette', 'Stadt Stuttgart')} beschreiben ihre Verfahren auf ihren Seiten. Eine bundesweit einheitliche Gebühr gibt es nicht; wir nennen deshalb keinen Betrag.</p>
<h2>Was die Prüfung oben nicht kann</h2>
<p>Sie zeigt, ob ein Fall unter Anhang 3 fällt. Ob Ihre Stadt Ihnen eine Einzelgenehmigung erteilt, kann kein Rechner sagen; das entscheidet die Behörde nach Ermessen. Für ${h.a('lkw-busse', 'Lkw und Busse')} und ${h.a('wohnmobil', 'Wohnmobile')} ohne Nachrüstmöglichkeit ist sie oft der einzige Weg in die Zone.</p>`,
  },
  en: {
    slug: 'exemption-permit',
    nav: 'Exemptions',
    card: 'Eleven general exemptions in Annex 3 and the city’s individual permit: who may drive in without green.',
    title: 'Low-emission zone exemption 2026: who, where and how',
    description: 'German low-emission zone exemptions 2026: the eleven general exemptions in Annex 3 of the 35th BImSchV and the individual city permit under section 1(2).',
    h1: 'Exemptions and exemption permits',
    intro: 'Pick your case: the check shows whether Annex 3 exempts you everywhere or whether you need a permit from the city.',
    resume: () => `There are two kinds of exemption, and they are often confused. The first applies by law and everywhere: Annex 3 of the 35th BImSchV lists eleven groups of motor vehicles that may enter any low-emission zone without a sticker, including motorcycles, ambulances, vehicles with special rights, classic cars with an H plate, vehicles carrying people with the disability marks aG, H or Bl and, since October 2026, vehicles with an e-plate. Nothing has to be applied for. The second is the individual exemption permit under section 1(2) of the ordinance. It is granted by the competent authority of the city concerned, or by the police in urgent cases, for trips to and from specific facilities when there is a public interest, such as supplying the population, or when overriding and urgent individual interests require it, for example when production processes could not otherwise be maintained. Such a permit is only valid in the zone it was issued for, is usually time-limited, carries a fee and, in many cities, requires proof that the vehicle cannot be retrofitted.`,
    faqs: () => [
      { q: 'Is an exemption permit from one city valid in other zones?', a: 'As a rule, no. Each permit under section 1(2) is issued by the authority responsible for that zone and only applies there. Some cities recognise each other’s permits or have agreements, as in the Ruhr area for its joint zone. If you drive through several zones you may need several permits, or a vehicle with a green sticker.' },
      { q: 'What do I need for the application?', a: 'Each city decides. Common requirements are registration certificate part I, proof that the vehicle cannot be retrofitted (for example a statement from the manufacturer or a garage) and a reason for the need, such as a business registration or the location of your home. Many cities also ask for proof of your financial situation when no replacement vehicle is affordable.' },
      { q: 'Do residents need an exemption permit?', a: 'The sticker rule has no general exemption for residents; living inside the zone still means green or an exemption. Some diesel bans differ: in Munich, residents are exempt from the entry ban for diesels up to Euro 4. For the zone itself, residents without a green sticker can only apply to their city for an individual permit under section 1(2).' },
    ],
    body: (h) => `<h2>The eleven general exemptions</h2>
${h.table(['No.', 'Vehicles'], [
  ['1', 'mobile machinery and equipment'],
  ['2', 'work machines'],
  ['3', 'farm and forestry tractors'],
  ['4', 'two- and three-wheeled motor vehicles'],
  ['5', 'ambulances, doctors’ cars marked “Arzt Notfalleinsatz”'],
  ['6', 'vehicles driving or carrying people with the marks aG, H or Bl'],
  ['7', 'vehicles with special rights under StVO section 35'],
  ['8', 'vehicles of non-German troops from non-NATO states on urgent military trips'],
  ['9', 'civilian vehicles on urgent sovereign Bundeswehr duty'],
  ['10', 'classic cars with H or 07 plates, equivalent classics from the EU, EEA and Turkey'],
  ['11', 'vehicles with an e-plate (since 1 October 2026)'],
], `${h.src('anhang3', 'Annex 3 of the 35th BImSchV')}`, ['r', 'l'])}
<h2>The city’s individual permit</h2>
<p>For everything else there is only the permit under ${h.src('bimschv35', 'section 1(2) of the 35th BImSchV')}. Each city sets its own fee, duration and paperwork; the ${h.src('berlin', 'Berlin Senate Department')} and the ${h.src('stuttgartPlakette', 'city of Stuttgart')} describe their procedures online. There is no nationwide fee, so we do not quote an amount.</p>
<h2>What the check above cannot do</h2>
<p>It shows whether a case falls under Annex 3. Whether your city will grant you an individual permit is something no calculator can say; the authority decides at its discretion. For ${h.a('lkw-busse', 'trucks and buses')} and ${h.a('wohnmobil', 'motorhomes')} that cannot be retrofitted, it is often the only way into the zone.</p>`,
  },
});
