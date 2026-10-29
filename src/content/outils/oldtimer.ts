import { defineGuide } from '../../lib/guide-types';

/** Oldtimer : Anhang 3 Nr. 10, FZV § 2 Nr. 22, § 10 (H) und 07-Kennzeichen ; gleichwertige aus EU, EWR, Türkei. */
export default defineGuide({
  id: 'oldtimer',
  group: 'regeln',
  order: 3,
  tool: 'ausnahme',
  preset: { fall: 'oldtimerH' },
  related: ['ausnahmegenehmigung', 'auslaendische-fahrzeuge', 'wohnmobil', 'bussgeld', 'umweltplakette', 'motorrad'],
  sources: ['anhang3', 'fzv2', 'fzv10', 'fzv43', 'bimschv35'],
  de: {
    slug: 'oldtimer-umweltzone',
    nav: 'Oldtimer',
    card: 'H-Kennzeichen oder rotes 07: Oldtimer brauchen keine Plakette, auch aus dem EU-Ausland.',
    title: 'Oldtimer Umweltzone 2026: H-Kennzeichen ohne Plakette',
    description: 'Oldtimer in der Umweltzone 2026: Mit H-Kennzeichen oder rotem 07-Kennzeichen ist keine Plakette nötig (Anhang 3 Nr. 10). Was gilt, auch für EU-Klassiker.',
    h1: 'Oldtimer in der Umweltzone',
    intro: 'Wählen Sie das Kennzeichen Ihres Klassikers: Die Prüfung zeigt, ob Nummer 10 von Anhang 3 greift und was sonst gilt.',
    resume: () => `Ein Oldtimer darf ohne Plakette in jede Umweltzone, wenn er als solcher zugelassen ist. Anhang 3 Nummer 10 der 35. BImSchV nimmt Oldtimer im Sinne von § 2 Nummer 22 der Fahrzeug-Zulassungsverordnung aus, die ein Oldtimerkennzeichen führen: das H-Kennzeichen oder das rote Oldtimerkennzeichen mit den Ziffern 07. Der Anhang verweist noch auf die alte Zählung der Verordnung (§ 9 Abs. 1 und § 17); in der geltenden Fassung stehen das H-Kennzeichen in § 10 Abs. 1 und das rote 07-Kennzeichen in § 43. Oldtimer im Sinne der Verordnung ist ein Fahrzeug, das vor mindestens 30 Jahren erstmals in Verkehr gekommen ist, weitgehend dem Originalzustand entspricht, in gutem Erhaltungszustand ist und der Pflege des kraftfahrzeugtechnischen Kulturguts dient; ein Gutachten nach § 23 StVZO bestätigt das. Ein 30 Jahre altes Auto mit normalem Kennzeichen ist dagegen kein Oldtimer im Sinne dieser Ausnahme und braucht die Plakette seiner Schadstoffgruppe, meist vergeblich, weil ein Diesel dieser Zeit selten über Gelb hinauskommt. Für Fahrzeuge aus einem anderen Mitgliedstaat der EU, einem Vertragsstaat des EWR oder der Türkei gilt die Ausnahme ebenfalls, wenn sie gleichwertige Anforderungen erfüllen. Wie dieser Nachweis aussehen muss, sagt der Text nicht; wir nennen das: nicht bestätigt.`,
    faqs: () => [
      { q: 'Darf ich mit dem roten 07-Kennzeichen jederzeit in die Umweltzone?', a: 'In die Umweltzone ja, denn Anhang 3 Nr. 10 nennt dieses Kennzeichen ausdrücklich. Das rote 07-Kennzeichen selbst erlaubt nach § 43 der Fahrzeug-Zulassungsverordnung aber nur bestimmte Fahrten: zu Veranstaltungen für Oldtimer und zurück, Probefahrten, Überführungsfahrten, Fahrten zur Reparatur oder Wartung. Eine Alltagsfahrt in die Stadt ist damit nicht gedeckt, unabhängig von der Umweltzone.' },
      { q: 'Mein Auto wird nächstes Jahr 30. Kann ich schon jetzt einfahren?', a: 'Nein. Das H-Kennzeichen gibt es erst, wenn das Fahrzeug vor mindestens 30 Jahren erstmals in Verkehr gekommen ist und ein Gutachten den Oldtimerstatus bestätigt. Bis dahin gilt die normale Plakettenpflicht. Wer die Zeit überbrücken muss, kann bei der Stadt eine Einzelgenehmigung nach § 1 Abs. 2 beantragen; einen Anspruch darauf gibt es nicht.' },
      { q: 'Zählen Jahre, in denen das Fahrzeug nur auf einem Werksgelände fuhr?', a: 'Möglicherweise. § 10 Abs. 1 der Fahrzeug-Zulassungsverordnung erlaubt der Zulassungsbehörde, bei der Berechnung der 30 Jahre im Einzelfall Zeiten vor dem ersten Inverkehrbringen anzurechnen, in denen das Fahrzeug außerhalb des öffentlichen Straßenverkehrs in Betrieb war, etwa als Werks- oder Museumsfahrzeug. Ein Anspruch besteht nicht; legen Sie Belege über diese Zeiten mit dem Gutachten vor.' },
    ],
    body: (h) => `<h2>Welche Klassiker befreit sind</h2>
${h.table(['Fahrzeug', 'In die Zone ohne Plakette?'], [
  ['H-Kennzeichen (§ 10 Abs. 1 FZV)', 'ja'],
  ['Rotes 07-Kennzeichen (§ 43 FZV), für zugelassene Fahrten', 'ja'],
  ['Oldtimer aus EU, EWR oder Türkei mit gleichwertigen Anforderungen', 'ja, Nachweis nicht bestätigt'],
  ['30 Jahre altes Fahrzeug mit normalem Kennzeichen', 'nein, Plakette nach Schadstoffgruppe'],
  ['Youngtimer (20 bis 29 Jahre)', 'nein'],
], `${h.src('anhang3', 'Anhang 3 Nr. 10')}, ${h.src('fzv2', 'FZV § 2 Nr. 22')}, ${h.src('fzv10', 'FZV § 10')}`)}
<h2>Der Weg zum H-Kennzeichen</h2>
<p>Ein amtlich anerkannter Sachverständiger begutachtet das Fahrzeug nach § 23 StVZO. Mit dem Gutachten teilt die Zulassungsstelle das H-Kennzeichen zu; ab dann gilt die Ausnahme in jeder Zone, ohne weiteren Antrag. Eine grüne Plakette ist nicht nötig, kann aber kleben bleiben.</p>
<h2>Mit dem Oldtimer unterwegs</h2>
<p>Oldtimertreffen finden oft in Innenstädten statt, die eine Zone haben. Für Begleitfahrzeuge, etwa ein älteres Zugfahrzeug mit Anhänger, gilt die Ausnahme nicht; sie brauchen ihre eigene Plakette. Wohnmobile mit H-Kennzeichen sind befreit wie jeder andere Oldtimer, siehe ${h.a('wohnmobil', 'Wohnmobil')}.</p>`,
  },
  en: {
    slug: 'classic-cars',
    nav: 'Classic cars',
    card: 'H plate or red 07 plate: classic cars need no sticker, including from elsewhere in the EU.',
    title: 'Classic cars and the Umweltzone 2026: H plate, no sticker',
    description: 'Classic cars in German low-emission zones 2026: with an H plate or red 07 plate no sticker is needed (Annex 3 no. 10). What counts, also for EU classics.',
    h1: 'Classic cars in low-emission zones',
    intro: 'Pick your classic’s plate: the check shows whether number 10 of Annex 3 applies and what holds otherwise.',
    resume: () => `A classic car may enter any low-emission zone without a sticker if it is registered as one. Annex 3 number 10 of the 35th BImSchV exempts classic vehicles as defined in section 2 number 22 of the Vehicle Registration Ordinance that carry a classic-car plate: the H plate, or the red classic plate beginning with 07. The annex still cites the ordinance’s old numbering (section 9(1) and section 17); in the current version the H plate is in section 10(1) and the red 07 plate in section 43. A classic in this sense is a vehicle that first entered service at least 30 years ago, is largely original, well preserved and serves to maintain automotive heritage; an expert report under section 23 StVZO confirms this. A 30-year-old car on an ordinary plate is not a classic for this exemption and needs the sticker for its emission group, usually in vain, since a diesel of that age rarely gets beyond yellow. The exemption also covers vehicles registered in another EU member state, an EEA state or Turkey if they meet equivalent requirements. The text does not say what proof is needed for that; we mark it as not confirmed.`,
    faqs: () => [
      { q: 'Can I always enter the zone with the red 07 plate?', a: 'Into the zone, yes, because Annex 3 no. 10 expressly names that plate. Under section 43 of the Vehicle Registration Ordinance, however, the red 07 plate itself only covers certain trips: to and from classic-car events, test drives, transfers and trips for repair or maintenance. An everyday drive into town is not covered by it, regardless of the zone.' },
      { q: 'My car turns 30 next year. Can I drive in already?', a: 'No. The H plate is only available once the vehicle first entered service at least 30 years ago and an expert report confirms its classic status. Until then the normal sticker rule applies. To bridge the gap you can apply to the city for an individual permit under section 1(2); there is no entitlement to one.' },
      { q: 'Do years spent only on private premises count towards the 30?', a: 'Possibly. Section 10(1) of the Vehicle Registration Ordinance lets the registration office, in individual cases, count periods before first entry into service during which the vehicle was used off public roads, for example as a factory or museum vehicle. There is no entitlement; submit evidence of those periods together with the expert report.' },
    ],
    body: (h) => `<h2>Which classics are exempt</h2>
${h.table(['Vehicle', 'Into the zone without a sticker?'], [
  ['H plate (FZV section 10(1))', 'yes'],
  ['Red 07 plate (FZV section 43), for permitted trips', 'yes'],
  ['Classic from the EU, EEA or Turkey meeting equivalent requirements', 'yes, proof not confirmed'],
  ['30-year-old vehicle on an ordinary plate', 'no, sticker by emission group'],
  ['Youngtimer (20 to 29 years old)', 'no'],
], `${h.src('anhang3', 'Annex 3 no. 10')}, ${h.src('fzv2', 'FZV section 2 no. 22')}, ${h.src('fzv10', 'FZV section 10')}`)}
<h2>Getting an H plate</h2>
<p>An officially recognised expert inspects the vehicle under section 23 StVZO. With the report, the registration office issues the H plate; from then on the exemption applies in every zone with no further application. A green sticker is not needed but may stay on.</p>
<h2>Out and about with a classic</h2>
<p>Classic-car meetings often take place in city centres that have a zone. Support vehicles, such as an older tow car with a trailer, are not covered and need their own sticker. Motorhomes with an H plate are exempt like any other classic; see ${h.a('wohnmobil', 'motorhomes')}.</p>`,
  },
});
