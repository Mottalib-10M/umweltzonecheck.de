import { defineGuide } from '../../lib/guide-types';

/** E-Auto : Gruppe 4 nach Anhang 2 Abs. 3, ab 1.10.2026 befreit mit E-Kennzeichen (Anhang 3 Nr. 11). */
export default defineGuide({
  id: 'e-auto',
  group: 'plakette',
  order: 6,
  tool: 'ausnahme',
  preset: { fall: 'eKennzeichen' },
  related: ['gruene-plakette', 'umweltplakette', 'ausnahmegenehmigung', 'berlin', 'bussgeld', 'ausblick-2030'],
  sources: ['bgbl278', 'anhang3', 'fzv11', 'emog', 'anhang2', 'uba'],
  de: {
    slug: 'e-auto-umweltplakette',
    nav: 'E-Auto',
    card: 'Seit 1. Oktober 2026 braucht ein Fahrzeug mit E-Kennzeichen keine Plakette mehr: die neue Nr. 11.',
    title: 'E-Auto Umweltplakette 2026: mit E-Kennzeichen nicht nötig',
    description: 'E-Auto und Umweltplakette 2026: Seit 1. Oktober 2026 sind Fahrzeuge mit E-Kennzeichen befreit (Anhang 3 Nr. 11); ohne E-Kennzeichen bleibt Grün Pflicht.',
    h1: 'E-Auto und Umweltplakette: seit Oktober 2026 befreit',
    intro: 'Wählen Sie Ihr Fahrzeug und den Tag der Fahrt: Die Prüfung rechnet mit dem Inkrafttreten der neuen Ausnahme am 1. Oktober 2026.',
    resume: (h) => `Bis Ende September 2026 brauchte auch ein Elektroauto in der Umweltzone eine grüne Plakette. Es bekam sie ohne Weiteres, denn Fahrzeuge ohne Verbrennungsmotor gehören nach Anhang 2 Absatz 3 der 35. BImSchV zur Schadstoffgruppe 4, aber die Pflicht zum Aufkleben bestand. Das hat die Zweite Verordnung zur Änderung der 35. BImSchV vom 25. September 2026 geändert, verkündet im Bundesgesetzblatt 2026 Teil I Nummer 278 am 30. September. Sie fügt in Anhang 3 eine neue Nummer 11 ein: Kraftfahrzeuge mit einer Kennzeichnung für elektrisch betriebene Fahrzeuge nach § 11 der Fahrzeug-Zulassungsverordnung sind von den Verkehrsverboten der Umweltzonen ausgenommen, auch ohne Plakette. Die Verordnung tritt am ersten Tag des auf die Verkündung folgenden Quartals in Kraft, also am ${h.date(h.P.e_kennzeichen_ab)}. Entscheidend ist das E am Ende des Kennzeichens, nicht der Antrieb allein: Ein Elektroauto ohne E-Kennzeichen oder ein Hybrid, der die Voraussetzungen für das E-Kennzeichen nicht erfüllt, braucht weiter die grüne Plakette.`,
    faqs: (h) => [
      { q: 'Muss ich die grüne Plakette am E-Auto jetzt entfernen?', a: `Nein. Die Plakette darf bleiben; sie ist nur nicht mehr nötig, wenn das Fahrzeug ein E-Kennzeichen trägt. Seit dem ${h.date(h.P.e_kennzeichen_ab)} genügt das E am Ende des Kennzeichens. Wer die Plakette ablöst, zerstört sie; das ist kein Problem, solange das E-Kennzeichen bleibt. Bei einem Wechsel auf ein normales Kennzeichen wäre wieder eine grüne Plakette nötig.` },
      { q: 'Gilt die Befreiung auch für Plug-in-Hybride?', a: 'Nur für Plug-in-Hybride mit E-Kennzeichen. Das Kennzeichen bekommt ein extern aufladbares Hybridfahrzeug nach § 11 der Fahrzeug-Zulassungsverordnung nur, wenn es die Anforderungen des Elektromobilitätsgesetzes erfüllt. Ein Hybrid ohne E-Kennzeichen, auch ein reiner Vollhybrid ohne Stecker, bleibt bei der grünen Plakette, die er mit Ottomotor und Euro-Norm ohnehin bekommt.' },
      { q: 'Gilt die Ausnahme auch für E-Autos mit ausländischem Kennzeichen?', a: 'Ja, mit der richtigen Kennzeichnung. Nach § 11 Abs. 4 der Fahrzeug-Zulassungsverordnung bekommt ein im Ausland zugelassenes Elektrofahrzeug auf Antrag eine E-Plakette nach Anlage 3, die gut sichtbar am Heck klebt; sie gibt es bei Zulassungsstellen und anerkannten Prüfstellen. Nach Absatz 5 stehen im Ausland erteilte E-Kennzeichen den deutschen gleich. Beides ist eine Kennzeichnung nach § 11 und genügt damit für Nummer 11.' },
    ],
    body: (h) => `<h2>Was sich am 1. Oktober 2026 geändert hat</h2>
${h.table(['', 'bis 30. September 2026', 'ab 1. Oktober 2026'], [
  ['Elektroauto mit E-Kennzeichen', 'grüne Plakette nötig', 'keine Plakette nötig (Anhang 3 Nr. 11)'],
  ['Elektroauto ohne E-Kennzeichen', 'grüne Plakette nötig', 'grüne Plakette nötig'],
  ['Plug-in-Hybrid mit E-Kennzeichen', 'grüne Plakette nötig', 'keine Plakette nötig'],
  ['Hybrid ohne E-Kennzeichen', 'grüne Plakette nötig', 'grüne Plakette nötig'],
], `Nach ${h.src('bgbl278', 'BGBl. 2026 I Nr. 278')} und ${h.src('anhang3', 'Anhang 3 der 35. BImSchV')}`)}
<p>Das Umweltbundesamt hatte auf seiner Seite zu den Umweltzonen im Dezember 2025 noch geschrieben, die Bundesregierung erarbeite eine Ausnahmeregelung für E-Fahrzeuge. Mit der Verordnung vom 25. September 2026 ist sie da. Wer im Internet noch liest, dass E-Autos eine Plakette brauchen, liest einen älteren Stand.</p>
<h2>Wer das E-Kennzeichen bekommt</h2>
<p>Nach ${h.src('fzv11', '§ 11 der Fahrzeug-Zulassungsverordnung')} wird das E-Kennzeichen auf Antrag für Fahrzeuge im Sinne des ${h.src('emog', 'Elektromobilitätsgesetzes')} zugeteilt: reine Batterieelektrofahrzeuge, Brennstoffzellenfahrzeuge und extern aufladbare Hybride, Letztere nur, wenn sie die Anforderungen des Gesetzes erfüllen. Das E steht hinter der Erkennungsnummer. Die Zulassungsstelle teilt es zu. Fahrzeuge mit ausländischer Zulassung tragen stattdessen die E-Plakette am Heck (§ 11 Abs. 4); ausländische E-Kennzeichen gelten nach Absatz 5 gleich.</p>
<h2>Dieselverbote und andere Regeln</h2>
<p>Für ein Elektroauto spielen die ${h.a('diesel-fahrverbot', 'Dieselverbote')} keine Rolle. Andere Regeln vor Ort, etwa Parkvorrechte, sind nicht Gegenstand dieser Seite. Was ohne E-Kennzeichen gilt, steht auf der Seite ${h.a('gruene-plakette', 'Grüne Plakette')}; was ein Verstoß kostet, auf der Seite ${h.a('bussgeld', 'Bußgeld')}.</p>`,
  },
  en: {
    slug: 'electric-car-sticker',
    nav: 'Electric cars',
    card: 'Since 1 October 2026 a vehicle with an e-plate needs no sticker: the new number 11.',
    title: 'Electric car sticker Germany 2026: e-plate now exempt',
    description: 'Electric cars and the German sticker 2026: since 1 October 2026 vehicles with an e-plate are exempt (Annex 3 no. 11); without one, green is still required.',
    h1: 'Electric cars and the German sticker: exempt since October 2026',
    intro: 'Pick your vehicle and the date of the trip: the check uses the new exemption’s start date, 1 October 2026.',
    resume: (h) => `Until the end of September 2026 even an electric car needed a green sticker in a German low-emission zone. It qualified automatically, because vehicles without a combustion engine belong to emission group 4 under Annex 2(3) of the 35th BImSchV, but the duty to display the sticker remained. That changed with the second ordinance amending the 35th BImSchV, dated 25 September 2026 and published in Federal Law Gazette 2026 Part I No. 278 on 30 September. It adds a new number 11 to Annex 3: motor vehicles with the marking for electrically powered vehicles under section 11 of the Vehicle Registration Ordinance are exempt from the zone bans, even without a sticker. The ordinance enters into force on the first day of the quarter following its publication, which is ${h.date(h.P.e_kennzeichen_ab)}. What matters is the E at the end of the plate, not the drive alone: an electric car without an e-plate, or a hybrid that does not qualify for one, still needs the green sticker.`,
    faqs: (h) => [
      { q: 'Should I remove the green sticker from my electric car now?', a: `No. The sticker may stay; it is simply no longer needed if the car carries an e-plate. Since ${h.date(h.P.e_kennzeichen_ab)} the E at the end of the plate is enough. Peeling the sticker off destroys it, which does not matter as long as the e-plate stays. If you switch back to an ordinary plate, you would need a green sticker again.` },
      { q: 'Does the exemption cover plug-in hybrids?', a: 'Only plug-in hybrids with an e-plate. Under section 11 of the Vehicle Registration Ordinance an externally chargeable hybrid only gets that plate if it meets the requirements of the Electromobility Act. A hybrid without an e-plate, including a full hybrid with no plug, stays with the green sticker it gets anyway as a petrol vehicle with a Euro norm.' },
      { q: 'Does the exemption apply to electric cars with foreign plates?', a: 'Yes, with the right marking. Under section 11(4) of the Vehicle Registration Ordinance a foreign-registered electric vehicle can get an e-badge under annex 3 on application, stuck clearly visible on the rear; registration offices and approved testing stations issue it. Under subsection 5, e-plates issued abroad count the same as German ones. Both are a marking under section 11 and therefore satisfy number 11.' },
    ],
    body: (h) => `<h2>What changed on 1 October 2026</h2>
${h.table(['', 'until 30 September 2026', 'from 1 October 2026'], [
  ['Electric car with e-plate', 'green sticker required', 'no sticker required (Annex 3 no. 11)'],
  ['Electric car without e-plate', 'green sticker required', 'green sticker required'],
  ['Plug-in hybrid with e-plate', 'green sticker required', 'no sticker required'],
  ['Hybrid without e-plate', 'green sticker required', 'green sticker required'],
], `Based on ${h.src('bgbl278', 'BGBl. 2026 I No. 278')} and ${h.src('anhang3', 'Annex 3 of the 35th BImSchV')}`)}
<p>In December 2025 the Federal Environment Agency still wrote on its low-emission zone page that the federal government was preparing an exemption for electric vehicles. With the ordinance of 25 September 2026 it has arrived. Anything online still saying that electric cars need a sticker reflects an older state of the law.</p>
<h2>Who gets an e-plate</h2>
<p>Under ${h.src('fzv11', 'section 11 of the Vehicle Registration Ordinance')} the e-plate is issued on request for vehicles as defined in the ${h.src('emog', 'Electromobility Act')}: battery electric vehicles, fuel cell vehicles and externally chargeable hybrids, the latter only if they meet the Act’s requirements. The E follows the registration number. The registration office assigns it. Foreign-registered vehicles carry the e-badge on the rear instead (section 11(4)); e-plates issued abroad count the same under subsection 5.</p>
<h2>Diesel bans and other rules</h2>
<p>The ${h.a('diesel-fahrverbot', 'diesel bans')} do not affect an electric car. Other local rules, such as parking privileges, are outside the scope of this page. What applies without an e-plate is on the ${h.a('gruene-plakette', 'green sticker')} page; what a breach costs is on the ${h.a('bussgeld', 'fine')} page.</p>`,
  },
});
