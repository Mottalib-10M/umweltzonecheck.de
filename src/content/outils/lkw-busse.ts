import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Lkw und Busse : Schwellen nach 88/77/EWG, Maut-Nachweise nach § 5 und § 6. */
function D(h: Helpers) {
  const d = (ez: string) => h.M.plakette({ kraftstoff: 'diesel', modus: 'datum', norm: 0, pms: false, ez, klasse: 'lkw' }).gruppe;
  const n = (norm: 0 | 1 | 2 | 3 | 4, pms = false) => h.M.plakette({ kraftstoff: 'diesel', modus: 'norm', norm, pms, ez: '2000-01-01', klasse: 'lkw' }).gruppe;
  return { d, n };
}

export default defineGuide({
  id: 'lkw-busse',
  group: 'plakette',
  order: 8,
  tool: 'plakette',
  preset: { k: 'diesel', kl: 'lkw', n: '3' },
  related: ['umweltplakette', 'partikelfilter', 'diesel-fahrverbot', 'ausnahmegenehmigung', 'auslaendische-fahrzeuge', 'augsburg'],
  sources: ['anhang2', 'p5', 'p6', 'bmuv', 'uba', 'augsburg'],
  de: {
    slug: 'umweltplakette-lkw-bus',
    nav: 'Lkw und Busse',
    card: 'Euro I bis VI, Schwellen zum 1. Oktober, Nachweis über die Lkw-Maut: die Plakette für schwere Fahrzeuge.',
    title: 'Umweltplakette Lkw und Bus 2026: Gruppe nach Euro-Norm',
    description: 'Umweltplakette für Lkw und Busse 2026: welche Euro-Norm welche Gruppe ergibt, warum die Stichtage am 1. Oktober liegen und wie Mautnachweise die Gruppe belegen.',
    h1: 'Umweltplakette für Lkw und Busse',
    intro: 'Stellen Sie „Lkw, Bus“ und die Euro-Stufe ein; ohne Nachweis der Norm rechnet die Prüfung mit den Stichtagen für schwere Fahrzeuge.',
    resume: (h) => {
      const { n } = D(h);
      return `Umweltzonen betreffen nach dem Umweltbundesamt nur Pkw, Lkw und Busse, und für Lkw und Busse gelten dieselben vier Schadstoffgruppen wie für Autos. Bei schweren Dieselfahrzeugen, die unter die Richtlinie 88/77/EWG fallen, spricht man von Euro I bis Euro VI. Nach der vereinfachten Tabelle des Bundesumweltministeriums bekommt ein Lkw mit Euro II Gruppe ${n(2)} und die rote Plakette, mit Euro III Gruppe ${n(3)} und Gelb, ab Euro IV Gruppe ${n(4)} und Grün; ein nachgerüstetes Partikelminderungssystem hebt um eine Gruppe. Die Stichtage der Vermutung nach dem Datum liegen bei schweren Fahrzeugen jeweils am 1. Oktober (1996, 2001, 2006), nicht am 1. Januar wie bei Pkw. Für Fahrzeuge im Mautsystem kann die Gruppe nach § 5 der 35. BImSchV auch mit den Nachweisen der Lkw-Maut-Verordnung belegt werden, bei ausländischen Lkw nach § 6 ebenso. Wie für Autos gilt: In allen aktiven Zonen zählt heute nur Grün, und die Dieselverbote in Stuttgart und München treffen auch Lkw bis Euro IV, mit den Ausnahmen der jeweiligen Stadt.`;
    },
    faqs: () => [
      { q: 'Gilt die Umweltzone auch für Reisebusse?', a: 'Ja. Busse sind Kraftfahrzeuge der Klasse M und fallen wie Pkw und Lkw unter die 35. BImSchV. Ein Reisebus braucht in der Zone die grüne Plakette, also ab Euro IV oder Euro III mit nachgerüstetem System. Eine allgemeine Ausnahme für Reisebusse enthält Anhang 3 nicht; für Linienverkehre oder besondere Fahrten kann die Stadt eine Ausnahmegenehmigung nach § 1 Abs. 2 erteilen.' },
      { q: 'Reicht der Mautnachweis als Beleg für die Schadstoffgruppe?', a: 'Für Fahrzeuge, die unter die Lkw-Maut fallen, ja. § 5 der Verordnung lässt für im Inland zugelassene schwere Nutzfahrzeuge neben der Schlüsselnummer auch die Nachweise nach den §§ 8 und 9 der Lkw-Maut-Verordnung zu, § 6 Abs. 1 dasselbe für im Ausland zugelassene. Die Ausgabestelle kann die Gruppe also aus den Mautunterlagen ableiten, wenn die Papiere keine Schlüsselnummer tragen.' },
      { q: 'Ist ein Lkw-Durchfahrtsverbot dasselbe wie die Umweltzone?', a: 'Nein. Manche Städte haben neben oder vor der Umweltzone Durchfahrtsverbote für Lkw erlassen, etwa Augsburg zusammen mit der ersten Stufe ab 1. Juli 2009. Ein solches Verbot richtet sich nach Gewicht und Durchgangsverkehr und hat eigene Schilder; die Plakette befreit davon nicht. Die Prüfung auf dieser Seite betrifft nur die Plakette der Umweltzone.' },
    ],
    body: (h) => {
      const { d } = D(h);
      return `<h2>Stichtage für schwere Diesel ohne Nachweis der Norm</h2>
${h.table(['Erstzulassung', 'Gruppe'], [['vor 1. Oktober 1996', d('1996-09-30')], ['1. Oktober 1996 bis 30. September 2001', d('1999-01-01')], ['1. Oktober 2001 bis 30. September 2006', d('2004-01-01')], ['ab 1. Oktober 2006', d('2006-10-01')]], `${h.src('p6', '§ 6 Abs. 3 Nr. 2 bis 4, Buchstabe b')}`, ['l', 'r'])}
<p>Diese Stichtage gelten für Fahrzeuge im Anwendungsbereich der Richtlinie 88/77/EWG, also schwere Nutzfahrzeuge und Busse. Leichte Nutzfahrzeuge wie Transporter fallen meist unter die Richtlinie 70/220/EWG und folgen den Pkw-Daten. Wählen Sie im Zweifel „Pkw“, wenn in den Papieren eine Euro-Norm mit arabischer Ziffer steht (Euro 4), und „Lkw, Bus“ bei römischer Ziffer (Euro IV).</p>
<h2>Benzin- und Gas-Lkw</h2>
<p>Schwere Fahrzeuge mit Fremdzündungsmotor, etwa Erdgasbusse, gehören nach Anhang 2 zur Gruppe 4, wenn sie die dort genannten Grenzwerte der Richtlinie 88/77/EWG einhalten. Eine Vermutung nach dem Datum gibt es für sie nicht; die Prüfung zeigt dann keine Plakette, bis der Nachweis vorliegt.</p>
<h2>Was Fuhrparks beachten</h2>
<p>Jedes Fahrzeug braucht seine eigene Plakette mit eingetragenem Kennzeichen. Wechselbrücken und Anhänger brauchen keine, nur das Kraftfahrzeug. Für die ${h.a('diesel-fahrverbot', 'Dieselverbote')} hat Stuttgart den geschäftsmäßigen Lieferverkehr ausgenommen, München Lieferverkehr und Anwohner. Für einzelne Fahrzeuge, die nicht nachgerüstet werden können, bleibt die ${h.a('ausnahmegenehmigung', 'Ausnahmegenehmigung')}.</p>`;
    },
  },
  en: {
    slug: 'trucks-and-buses-sticker',
    nav: 'Trucks and buses',
    card: 'Euro I to VI, 1 October cut-off dates, proof via the truck toll: the sticker for heavy vehicles.',
    title: 'Umweltplakette for trucks and buses 2026: group by Euro norm',
    description: 'German emissions sticker for trucks and buses 2026: which Euro norm gives which group, why cut-off dates fall on 1 October and how toll records prove it.',
    h1: 'The German emissions sticker for trucks and buses',
    intro: 'Set “Truck, bus” and the Euro stage; without proof of the norm the check uses the cut-off dates for heavy vehicles.',
    resume: (h) => {
      const { n } = D(h);
      return `According to the Federal Environment Agency, low-emission zones only concern cars, trucks and buses, and trucks and buses use the same four emission groups as cars. Heavy diesel vehicles covered by Directive 88/77/EEC are rated Euro I to Euro VI. Under the Federal Environment Ministry’s simplified table a Euro II truck gets group ${n(2)} and the red sticker, Euro III group ${n(3)} and yellow, Euro IV and later group ${n(4)} and green; a retrofitted particle reduction system lifts it by one group. The date-based presumption uses 1 October as the cut-off for heavy vehicles (1996, 2001, 2006), not 1 January as for cars. For vehicles in the toll system, section 5 of the 35th BImSchV also accepts the proofs under the truck toll ordinance, and section 6 does the same for foreign trucks. As with cars, only green counts in every active zone today, and the diesel bans in Stuttgart and Munich also hit trucks up to Euro IV, subject to each city’s exemptions.`;
    },
    faqs: () => [
      { q: 'Do low-emission zones apply to coaches?', a: 'Yes. Buses are class M motor vehicles and fall under the 35th BImSchV like cars and trucks. A coach needs the green sticker in a zone, so Euro IV or later, or Euro III with a retrofitted system. Annex 3 contains no general exemption for coaches; for scheduled services or special trips the city may grant an exemption permit under section 1(2).' },
      { q: 'Is the truck toll record enough to prove the emission group?', a: 'For vehicles subject to the truck toll, yes. Section 5 of the ordinance accepts, besides the key number, the proofs under sections 8 and 9 of the truck toll ordinance for heavy vehicles registered in Germany, and section 6(1) does the same for foreign ones. The issuing office can therefore derive the group from the toll documents when the papers carry no key number.' },
      { q: 'Is a truck through-traffic ban the same as a low-emission zone?', a: 'No. Some cities imposed through-traffic bans for trucks alongside or before their zone, Augsburg for instance together with its first stage from 1 July 2009. Such a ban depends on weight and through traffic and has its own signs; the sticker does not exempt you from it. The check on this page only concerns the zone sticker.' },
    ],
    body: (h) => {
      const { d } = D(h);
      return `<h2>Cut-off dates for heavy diesels without proof of the norm</h2>
${h.table(['First registration', 'Group'], [['before 1 October 1996', d('1996-09-30')], ['1 October 1996 to 30 September 2001', d('1999-01-01')], ['1 October 2001 to 30 September 2006', d('2004-01-01')], ['from 1 October 2006', d('2006-10-01')]], `${h.src('p6', 'Section 6(3) nos. 2 to 4, letter b')}`, ['l', 'r'])}
<p>These dates apply to vehicles within Directive 88/77/EEC, that is heavy commercial vehicles and buses. Light commercial vehicles such as vans usually fall under Directive 70/220/EEC and follow the car dates. If in doubt, choose “Car” when the papers show a Euro norm with an Arabic numeral (Euro 4) and “Truck, bus” for a Roman numeral (Euro IV).</p>
<h2>Petrol and gas trucks</h2>
<p>Heavy vehicles with spark-ignition engines, such as natural gas buses, belong to group 4 under Annex 2 if they meet the limits of Directive 88/77/EEC listed there. There is no date-based presumption for them; the check shows no sticker until proof is available.</p>
<h2>Points for fleet operators</h2>
<p>Each vehicle needs its own sticker with its plate number. Swap bodies and trailers need none, only the motor vehicle. For the ${h.a('diesel-fahrverbot', 'diesel bans')}, Stuttgart exempts commercial deliveries, Munich deliveries and residents. For individual vehicles that cannot be retrofitted, there is the ${h.a('ausnahmegenehmigung', 'exemption permit')}.</p>`;
    },
  },
});
