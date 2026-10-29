import { defineGuide } from '../../lib/guide-types';

/** Bußgeld : BKatV Nr. 153, 100 €, kein Punkt ; ältere Behördenseiten nennen noch 80 €. */
export default defineGuide({
  id: 'bussgeld',
  group: 'regeln',
  order: 1,
  tool: 'bussgeld',
  zone: 'koeln',
  related: ['gruene-plakette', 'ausnahmegenehmigung', 'auslaendische-fahrzeuge', 'diesel-fahrverbot', 'koeln', 'umweltzonen-deutschland'],
  sources: ['bkatv', 'fev13', 'stvoAnl2', 'bimschg40', 'nrw', 'bremen'],
  de: {
    slug: 'umweltzone-bussgeld',
    nav: 'Bußgeld',
    card: '100 Euro, kein Punkt in Flensburg: was die Fahrt ohne passende Plakette kostet und wer zahlt.',
    title: 'Umweltzone Bußgeld 2026: 100 Euro, kein Punkt in Flensburg',
    description: 'Bußgeld in der Umweltzone 2026: 100 Euro nach Nr. 153 des Bußgeldkatalogs, kein Punkt. Warum manche Behörden noch 80 Euro nennen und wann Parken zählt.',
    h1: 'Bußgeld ohne Umweltplakette',
    intro: 'Wählen Sie Stadt, Fahrzeug und Tag: Der Rechner zeigt, ob an diesem Tag ein Verstoß vorläge und welcher Betrag im Katalog steht.',
    resume: (h) => `Wer in eine Umweltzone fährt, ohne dass sein Fahrzeug die nötige Plakette trägt oder befreit ist, begeht eine Ordnungswidrigkeit. Der bundeseinheitliche Bußgeldkatalog sieht dafür unter der laufenden Nummer ${h.P.bussgeld.nr} einen Regelsatz von ${h.eur(h.P.bussgeld.betrag)} vor; der Tatbestand lautet sinngemäß: an einem Verkehrsverbot zur Verminderung schädlicher Luftverunreinigungen teilgenommen, Zeichen 270.1 und 270.2 der Straßenverkehrs-Ordnung. Einen Punkt im Fahreignungsregister gibt es nicht, denn Anlage 13 der Fahrerlaubnis-Verordnung führt die Nummer ${h.P.bussgeld.nr} nicht auf. Der Verstoß liegt schon vor, wenn das Fahrzeug in der Zone geführt wird; auch wer in der Zone parkt, kann belangt werden, weil er zuvor hineingefahren ist. Einige Behördenseiten, darunter die des Landes Nordrhein-Westfalen und die der Stadt Bremen, nennen noch 80 Euro; das war der frühere Regelsatz. Maßgeblich ist die geltende Anlage zur Bußgeldkatalog-Verordnung, die wir am ${h.date(h.P.retrieved_at)} gelesen haben. Wer ein Verkehrsverbot nach einem Dieselverbot missachtet, zahlt nach demselben Katalog.`,
    faqs: (h) => [
      { q: 'Wer zahlt das Bußgeld, der Halter oder der Fahrer?', a: 'Die Ordnungswidrigkeit begeht, wer das Fahrzeug in der Zone führt, also der Fahrer. Die Behörde schreibt zunächst den Halter an und fragt nach, wer gefahren ist. Kann der Fahrer nicht ermittelt werden, wird das Verfahren in der Regel eingestellt. Eine Haftung des Halters für das Bußgeld selbst kennt das Ordnungswidrigkeitenrecht nicht; wer sein Auto verleiht, sollte den Fahrer deshalb auf die Zone hinweisen.' },
      { q: 'Gibt es ein Bußgeld, wenn die grüne Plakette nur nicht richtig klebt?', a: 'Die Plakette muss nach § 3 Abs. 2 der 35. BImSchV deutlich sichtbar innen an der Windschutzscheibe angebracht sein, mit eingetragenem Kennzeichen. Liegt sie lose im Handschuhfach oder steht ein falsches Kennzeichen darauf, ist das Fahrzeug nicht gekennzeichnet. Ob die Behörde dann den vollen Regelsatz verlangt oder das Verfahren einstellt, entscheidet sie im Einzelfall; verlassen sollte man sich darauf nicht.' },
      { q: `Kommen zu den ${h.eur(h.P.bussgeld.betrag)} noch Kosten hinzu?`, a: 'Ja, bei einem Bußgeldbescheid kommen Gebühren und Auslagen nach dem Ordnungswidrigkeitengesetz dazu, in der Regel ein fester Mindestbetrag plus Zustellkosten. Ihre Höhe hängt vom Verfahren ab und steht im Bescheid. Wer den Bescheid für falsch hält, etwa weil das Fahrzeug befreit war, kann binnen zwei Wochen nach Zustellung Einspruch bei der Behörde einlegen, die ihn erlassen hat.' },
    ],
    body: (h) => `<h2>Was im Bußgeldkatalog steht</h2>
${h.table(['Tatbestand', 'Regelsatz', 'Punkte'], [
  ['Teilnahme an einem Verkehrsverbot zur Verminderung schädlicher Luftverunreinigungen (Zeichen 270.1, 270.2)', h.eur(h.P.bussgeld.betrag), String(h.P.bussgeld.punkte)],
], `${h.src('bkatv', 'BKatV, Anlage, Nr. 153')} und ${h.src('fev13', 'FeV, Anlage 13')}`, ['l', 'r', 'r'])}
<p>Die Zeichen 270.1 (Beginn einer Verkehrsverbotszone) und 270.2 (Ende) stehen in ${h.src('stvoAnl2', 'Anlage 2 der StVO')}. Das Zusatzzeichen darunter zeigt die Plaketten, mit denen man frei ist; seit Jahren ist das in allen aktiven Zonen nur noch die grüne. Rechtsgrundlage der Verbote ist ${h.src('bimschg40', '§ 40 Abs. 1 des Bundes-Immissionsschutzgesetzes')}.</p>
<h2>80 oder 100 Euro?</h2>
<p>Auf Seiten von Ministerien und Städten steht oft noch 80 Euro, etwa beim ${h.src('nrw', 'NRW-Umweltministerium')} und bei der ${h.src('bremen', 'Stadt Bremen')}. Diese Seiten wurden nach der Anhebung nicht nachgezogen. Der Rechner rechnet mit dem Betrag aus der Verordnung, nicht mit dem auf den Infoseiten.</p>
<h2>Wann kein Bußgeld fällig ist</h2>
<p>Nicht verboten ist die Fahrt, wenn das Fahrzeug unter ${h.a('ausnahmegenehmigung', 'eine Ausnahme')} fällt, etwa ein ${h.a('oldtimer', 'Oldtimer mit H-Kennzeichen')}, ein ${h.a('motorrad', 'Motorrad')} oder seit Oktober 2026 ein ${h.a('e-auto', 'E-Auto mit E-Kennzeichen')}, oder wenn die Zone an diesem Tag schon ${h.a('aufgehobene-umweltzonen', 'aufgehoben')} war. Für Fahrzeuge aus dem Ausland gilt der gleiche Satz; ob er im Heimatland vollstreckt wird, regeln Abkommen zwischen den Staaten.</p>`,
  },
  en: {
    slug: 'low-emission-zone-fine',
    nav: 'Fines',
    card: '100 euros, no penalty point: what driving without the right sticker costs and who pays.',
    title: 'Umweltzone fine 2026: 100 euros and no penalty point',
    description: 'German low-emission zone fine 2026: 100 euros under no. 153 of the fine catalogue, no point. Why some authorities still say 80 euros and when parking counts.',
    h1: 'The fine for entering a zone without a sticker',
    intro: 'Pick the city, vehicle and day: the calculator shows whether that trip would be an offence and which amount the catalogue sets.',
    resume: (h) => `Driving into a low-emission zone when your vehicle carries neither the required sticker nor an exemption is a regulatory offence. The federal fine catalogue sets a standard fine of ${h.eur(h.P.bussgeld.betrag)} for it under entry no. ${h.P.bussgeld.nr}; the offence reads, roughly: taking part in traffic subject to a ban to reduce harmful air pollution, signs 270.1 and 270.2 of the Road Traffic Regulations. There is no penalty point in the Flensburg register, because annex 13 of the Driving Licence Ordinance does not list entry ${h.P.bussgeld.nr}. The offence is committed as soon as the vehicle is driven in the zone; someone found parked inside can also be fined, because they drove in first. Some official websites, including those of North Rhine-Westphalia and the city of Bremen, still quote 80 euros; that was the earlier standard amount. What counts is the current annex to the Fine Catalogue Ordinance, which we read on ${h.date(h.P.retrieved_at)}. Ignoring a diesel ban is fined under the same catalogue.`,
    faqs: (h) => [
      { q: 'Who pays the fine, the keeper or the driver?', a: 'The offence is committed by whoever drives the vehicle in the zone, so the driver. The authority first writes to the registered keeper and asks who was driving. If the driver cannot be identified, the case is usually dropped. German administrative-offence law has no keeper liability for the fine itself, so if you lend your car, tell the driver about the zone.' },
      { q: 'Is there a fine if the green sticker is simply not stuck on properly?', a: 'Under section 3(2) of the 35th BImSchV the sticker must be clearly visible on the inside of the windscreen, with the plate number written in. If it lies loose in the glovebox or shows the wrong plate, the vehicle is not marked. Whether the authority then asks for the full amount or drops the case is decided case by case; it is not something to rely on.' },
      { q: `Are there costs on top of the ${h.eur(h.P.bussgeld.betrag)}?`, a: 'Yes. A formal penalty notice adds fees and expenses under the Administrative Offences Act, usually a fixed minimum plus postage. The exact amount depends on the proceedings and is stated in the notice. If you think the notice is wrong, for example because the vehicle was exempt, you can object within two weeks of delivery to the authority that issued it.' },
    ],
    body: (h) => `<h2>What the fine catalogue says</h2>
${h.table(['Offence', 'Standard fine', 'Points'], [
  ['Taking part in traffic subject to a ban to reduce harmful air pollution (signs 270.1, 270.2)', h.eur(h.P.bussgeld.betrag), String(h.P.bussgeld.punkte)],
], `${h.src('bkatv', 'BKatV, annex, no. 153')} and ${h.src('fev13', 'FeV, annex 13')}`, ['l', 'r', 'r'])}
<p>Signs 270.1 (start of a restricted zone) and 270.2 (end) are set out in ${h.src('stvoAnl2', 'annex 2 of the StVO')}. The plate below shows which stickers are allowed in; for years that has been green only in every active zone. The legal basis of the bans is ${h.src('bimschg40', 'section 40(1) of the Federal Immission Control Act')}.</p>
<h2>80 or 100 euros?</h2>
<p>Ministry and city websites often still say 80 euros, for instance the ${h.src('nrw', 'North Rhine-Westphalia Environment Ministry')} and the ${h.src('bremen', 'city of Bremen')}. Those pages were not updated after the increase. The calculator uses the amount in the ordinance, not the one on information pages.</p>
<h2>When no fine is due</h2>
<p>The trip is not banned if the vehicle is covered by ${h.a('ausnahmegenehmigung', 'an exemption')}, such as a ${h.a('oldtimer', 'classic car with an H plate')}, a ${h.a('motorrad', 'motorcycle')} or, since October 2026, an ${h.a('e-auto', 'electric car with an e-plate')}, or if the zone had already been ${h.a('aufgehobene-umweltzonen', 'lifted')} on that day. Foreign vehicles face the same amount; whether it is enforced in the home country depends on agreements between the states.</p>`,
  },
});
