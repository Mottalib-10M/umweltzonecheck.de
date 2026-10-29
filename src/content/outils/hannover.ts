import { defineGuide } from '../../lib/guide-types';
import { stufen } from '../../lib/stadt';

/** Hannover : aufgehoben ; Plan 31.1.2024 nennt 1.1.2024, UBA 22.2.2024 ; ca. 50 km² ; NO2 seit 2020 eingehalten. */
export default defineGuide({
  id: 'hannover',
  group: 'staedte',
  order: 10,
  tool: 'stadt',
  zone: 'hannover',
  preset: { g: '1', k: 'diesel', n: '1' },
  related: ['aufgehobene-umweltzonen', 'bremen', 'route', 'ausblick-2030', 'berlin', 'mainz'],
  sources: ['hannoverLrp', 'ubaListe'],
  de: {
    slug: 'umweltzone-hannover',
    nav: 'Hannover',
    card: 'Aufgehoben Anfang 2024: In Hannover brauchen Sie keine Plakette mehr. Mit den abweichenden Daten.',
    title: 'Umweltzone Hannover 2026: aufgehoben, keine Plakette nötig',
    description: 'Umweltzone Hannover 2026: seit Anfang 2024 aufgehoben, weil der NO2-Grenzwert seit 2020 eingehalten wird. Keine Plakette mehr nötig; zum Datum zwei Angaben.',
    h1: 'Umweltzone Hannover: aufgehoben',
    intro: 'Voreingestellt ist ein alter Diesel ohne Plakette. Die Prüfung zeigt: Seit der Aufhebung darf er wieder nach Hannover.',
    resume: () => `Hannover hat seine Umweltzone Anfang 2024 aufgehoben. Die Zone umfasste rund 50 Quadratkilometer innerhalb der Stadt und galt seit dem 1. Januar 2010 in der grünen Stufe. Grundlage der Aufhebung ist der Luftreinhalteplan Hannover 2023, eine Fortschreibung des Luftqualitätsplans von 2011, datiert auf den 31. Januar 2024. Er stellt fest, dass der Jahresgrenzwert für Stickstoffdioxid seit 2020 an allen Messstellen eingehalten wird, und sieht deshalb vor, die Fahrverbote in der Umweltzone aufzuheben. In seiner Maßnahmenübersicht steht „Aufhebung zum 1.1.2024“; das Umweltbundesamt führt dagegen den 22. Februar 2024 als Datum der Aufhebung. Das spätere Datum ist vermutlich der Tag, an dem die Aufhebung wirksam bekannt gemacht wurde, amtlich belegt haben wir das nicht. Die Prüfung rechnet mit dem Datum des Umweltbundesamts, damit sie für Fahrten im Januar und Februar 2024 eher zu streng als zu großzügig ist. Für heutige Fahrten spielt der Unterschied keine Rolle: In Hannover brauchen Sie keine Plakette mehr, weder mit dem Auto noch mit dem Lkw. In Niedersachsen bleibt nur die Zone in Osnabrück.`,
    faqs: () => [
      { q: 'Muss ich die grüne Plakette nach der Aufhebung entfernen?', a: 'Nein. Die Plakette darf an der Scheibe bleiben, sie stört nicht und wird in allen anderen Zonen weiter gebraucht. Wer regelmäßig nach Bremen, Osnabrück oder in andere Großstädte fährt, sollte sie behalten. Eine Plakette lässt sich ohnehin nicht unbeschädigt ablösen, weil sie sich nach § 3 der 35. BImSchV beim Ablösen selbst zerstören muss.' },
      { q: 'Kann ich mit einer roten Plakette jetzt nach Hannover?', a: 'Ja, denn seit der Aufhebung gibt es in Hannover keine Umweltzone und damit keine Mindestgruppe mehr. Das gilt für Fahrzeuge mit roter, gelber oder ganz ohne Plakette gleichermaßen. Andere Regeln, etwa Durchfahrtsverbote für Lkw auf einzelnen Straßen, bleiben davon unberührt und haben eigene Schilder.' },
      { q: 'Gilt eine Ausnahmegenehmigung aus Osnabrück noch in Hannover?', a: 'Sie wird dort nicht mehr gebraucht. Nach Angaben der Stadt Osnabrück galten Osnabrücker Ausnahmegenehmigungen seit 2012 auch in Hannover; mit der Aufhebung der Hannoverschen Zone hat sich das erledigt. In Osnabrück selbst gilt die Genehmigung weiter, solange sie nicht abgelaufen ist und die Zone besteht.' },
    ],
    body: (h) => `<h2>Die Hannoversche Zone in Zahlen</h2>
${stufen(h, 'hannover')}
<h2>Zwei Daten für eine Aufhebung</h2>
${h.table(['Quelle', 'Datum der Aufhebung'], [
  ['Luftreinhalteplan Hannover 2023 (31.01.2024), Maßnahmenübersicht', h.date('2024-01-01')],
  ['Liste des Umweltbundesamts', h.date('2024-02-22')],
], `${h.src('hannoverLrp', 'Landeshauptstadt Hannover, Luftreinhalteplan 2023')}`)}
<p>Die Prüfung verwendet den 22. Februar 2024. Mehr Städte, die ihre Zone abgeschafft haben, stehen auf der Seite ${h.a('aufgehobene-umweltzonen', 'Aufgehobene Umweltzonen')}.</p>
<h2>Durch Hannover weiter</h2>
<p>Auf der Strecke nach ${h.a('berlin', 'Berlin')} oder ins Ruhrgebiet liegen weiter Zonen; nach ${h.a('bremen', 'Bremen')} ebenfalls. Die ${h.a('route', 'Routenprüfung')} zeigt, wo eine Plakette nötig ist.</p>`,
  },
  en: {
    slug: 'hanover-low-emission-zone',
    nav: 'Hanover',
    card: 'Lifted in early 2024: you no longer need a sticker in Hanover. With the conflicting dates.',
    title: 'Hanover low-emission zone 2026: lifted, no sticker needed',
    description: 'Hanover low-emission zone 2026: lifted in early 2024 because the NO2 limit has been met since 2020. No sticker needed any more; two sources differ on the date.',
    h1: 'Hanover low-emission zone: lifted',
    intro: 'The preset is an old diesel without a sticker. The check shows that since the lifting it may enter Hanover again.',
    resume: () => `Hanover lifted its low-emission zone in early 2024. The zone covered about 50 square kilometres within the city and had been at the green stage since 1 January 2010. The basis for the lifting is the Hanover clean-air plan 2023, an update of the 2011 air quality plan, dated 31 January 2024. It finds that the annual nitrogen dioxide limit has been met at all monitoring stations since 2020 and therefore provides for lifting the driving bans in the zone. Its overview of measures says “lifting as of 1 January 2024”; the German Environment Agency, however, lists 22 February 2024 as the lifting date. The later date is probably the day the lifting was formally published, but we have not found official proof of that. The check uses the Agency’s date, so that for trips in January and February 2024 it errs on the strict side. For trips today the difference does not matter: you no longer need a sticker in Hanover, whether by car or by truck. In Lower Saxony only the Osnabrück zone remains.`,
    faqs: () => [
      { q: 'Should I remove the green sticker after the lifting?', a: 'No. The sticker may stay on the windscreen; it does no harm and is still needed in every other zone. If you regularly drive to Bremen, Osnabrück or other large cities, keep it. A sticker cannot be removed intact anyway, because under section 3 of the 35th BImSchV it must destroy itself when peeled off.' },
      { q: 'Can I drive into Hanover with a red sticker now?', a: 'Yes, since the lifting there is no zone in Hanover and so no minimum group. This applies equally to vehicles with red, yellow or no sticker at all. Other rules, such as through-traffic bans for trucks on individual streets, are unaffected and have their own signs.' },
      { q: 'Is an exemption permit from Osnabrück still valid in Hanover?', a: 'It is no longer needed there. According to the city of Osnabrück, its exemption permits had also been valid in Hanover since 2012; with the lifting of the Hanover zone that has become moot. In Osnabrück itself the permit remains valid as long as it has not expired and the zone exists.' },
    ],
    body: (h) => `<h2>The Hanover zone in figures</h2>
${stufen(h, 'hannover')}
<h2>Two dates for one lifting</h2>
${h.table(['Source', 'Lifting date'], [
  ['Hanover clean-air plan 2023 (31 Jan 2024), overview of measures', h.date('2024-01-01')],
  ['German Environment Agency list', h.date('2024-02-22')],
], `${h.src('hannoverLrp', 'City of Hanover, clean-air plan 2023')}`)}
<p>The check uses 22 February 2024. More cities that have abolished their zones are on the ${h.a('aufgehobene-umweltzonen', 'lifted zones')} page.</p>
<h2>Through Hanover and beyond</h2>
<p>On the way to ${h.a('berlin', 'Berlin')} or the Ruhr there are further zones, and towards ${h.a('bremen', 'Bremen')} as well. The ${h.a('route', 'route check')} shows where a sticker is needed.</p>`,
  },
});
