import { defineGuide, type Helpers } from '../../lib/guide-types';

/** Alle aktiven Umweltzonen nach Land, aus zonen.json (Liste des Umweltbundesamts, Stand 26.08.2026). */
function proLand(h: Helpers) {
  const m = new Map<string, string[]>();
  for (const z of h.M.AKTIV) m.set(z.land, [...(m.get(z.land) ?? []), z.name[h.lang]]);
  return [...m.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([land, n]) => [h.M.LAENDER[land as keyof typeof h.M.LAENDER][h.lang], n.length, n.sort((x, y) => x.localeCompare(y, 'de')).join(', ')]);
}

export default defineGuide({
  id: 'umweltzonen-deutschland',
  group: 'zonen',
  order: 1,
  tool: 'liste',
  preset: { status: 'aktiv' },
  related: ['aufgehobene-umweltzonen', 'route', 'nordrhein-westfalen', 'hessen', 'baden-wuerttemberg', 'bayern'],
  sources: ['ubaListe', 'uba', 'nrw', 'hessen', 'bwVm', 'byStmuv'],
  de: {
    slug: 'umweltzonen-deutschland',
    nav: 'Alle Umweltzonen',
    card: 'Alle aktiven Umweltzonen nach Bundesland, mit Datum der grünen Stufe und Quelle.',
    title: 'Umweltzonen Deutschland 2026: Liste aller aktiven Zonen',
    description: 'Umweltzonen in Deutschland 2026: alle aktiven Zonen nach Bundesland, mit Datum der grünen Stufe und Quelle, nach der Liste des Umweltbundesamts vom 26.08.2026.',
    h1: 'Alle Umweltzonen in Deutschland',
    intro: 'Filtern Sie nach Land oder suchen Sie einen Ort: Die Liste zeigt jede Zone mit Status, Datum der grünen Stufe und Quelle.',
    resume: (h) => `Das Umweltbundesamt führt eine Liste aller Umweltzonen in Deutschland, zuletzt geändert am ${h.date(h.P.uba_stand)}. Danach gibt es ${h.M.AKTIV.length} aktive Zonen und ${h.M.AUFGEHOBEN.length} aufgehobene. In allen aktiven Zonen gilt heute die dritte Stufe: Einfahren dürfen nur Fahrzeuge mit grüner Plakette oder einer Befreiung. Die meisten Zonen liegen in Nordrhein-Westfalen, darunter die zusammenhängende Umweltzone Ruhrgebiet, die 13 Städte von Duisburg bis Dortmund umfasst. Es folgen Hessen mit Frankfurt am Main, Darmstadt, Offenbach, Wiesbaden, Marburg und Limburg, Bayern mit München, Augsburg und Regensburg sowie Baden-Württemberg, wo nach vielen Aufhebungen nur Stuttgart, Ludwigsburg mit seinen Nachbargemeinden und Pforzheim übrig sind. Einzelne Zonen gibt es in Berlin, Bremen, Leipzig, Halle, Magdeburg und Osnabrück. Keine Zone haben unter anderem Hamburg, Dresden, Nürnberg, Kiel und das Saarland. Jede Zone in der Liste trägt mindestens eine Quelle einer Behörde, die wir am ${h.date(h.P.retrieved_at)} geprüft haben; wo Städte und Umweltbundesamt verschiedene Daten nennen, steht das auf der Seite der Stadt.`,
    faqs: (h) => [
      { q: 'Wie viele Umweltzonen gibt es in Deutschland?', a: `Nach der Liste des Umweltbundesamts vom ${h.date(h.P.uba_stand)} sind es ${h.M.AKTIV.length} aktive Zonen. Die Umweltzone Ruhrgebiet zählt dabei als eine Zone, obwohl sie 13 Städte umfasst, ebenso die Zone Ludwigsburg mit elf Gemeinden. Wer Orte zählt statt Zonen, kommt deshalb auf eine deutlich höhere Zahl. ${h.M.AUFGEHOBEN.length} weitere Zonen stehen als aufgehoben in der Liste.` },
      { q: 'Woran erkenne ich, wo eine Umweltzone beginnt?', a: 'Am Verkehrszeichen 270.1 „Umweltzone“ mit Zusatzzeichen, das die erlaubten Plaketten zeigt; das Ende markiert Zeichen 270.2. Die Schilder stehen an allen Einfahrten. Navigationsgeräte und Karten zeigen die Grenzen oft an, sind aber nicht verbindlich. Verbindlich ist die Beschilderung, und die Lage im Plan der Stadt oder des Landes.' },
      { q: 'Gibt es Bundesländer ganz ohne Umweltzone?', a: 'Ja. Nach der Liste haben Schleswig-Holstein, Mecklenburg-Vorpommern, Brandenburg, das Saarland, Hamburg und Thüringen keine aktive Zone; Thüringens einzige Zone in Erfurt ist aufgehoben. Rheinland-Pfalz hat seit der Aufhebung in Mainz am 1. Oktober 2025 ebenfalls keine mehr. In Niedersachsen bleibt nur Osnabrück, nachdem Hannover seine Zone aufgehoben hat.' },
    ],
    body: (h) => `<h2>Aktive Zonen nach Bundesland</h2>
${h.table(['Land', 'Zonen', 'Namen'], proLand(h), `Nach der ${h.src('ubaListe', 'Liste des Umweltbundesamts')} und den Seiten der Länder`, ['l', 'r', 'l'])}
<h2>Wo die Länder ihre Zonen beschreiben</h2>
<p>Für Nordrhein-Westfalen führt das ${h.src('nrw', 'Umweltministerium')} die Liste, für Hessen das ${h.src('hessen', 'Umweltministerium in Wiesbaden')}, für Baden-Württemberg das ${h.src('bwVm', 'Verkehrsministerium')} und für Bayern das ${h.src('byStmuv', 'Umweltministerium')}. Die Seiten der Länder sind nicht immer auf dem gleichen Stand wie die der Städte; wir haben jede Zone mit mindestens einer dieser Quellen abgeglichen.</p>
<h2>Durch mehrere Zonen fahren</h2>
<p>Auf langen Strecken liegen oft mehrere Zonen. Die ${h.a('route', 'Prüfung der Route')} prüft bis zu fünf Orte auf einmal. Was ein Verstoß kostet, steht auf der Seite ${h.a('bussgeld', 'Bußgeld')}; welche Zonen es nicht mehr gibt, auf der Seite ${h.a('aufgehobene-umweltzonen', 'Aufgehobene Umweltzonen')}.</p>`,
  },
  en: {
    slug: 'all-low-emission-zones',
    nav: 'All zones',
    card: 'Every active low-emission zone by state, with the date of the green stage and its source.',
    title: 'Low-emission zones in Germany 2026: all active zones listed',
    description: 'Germany’s low-emission zones 2026: every active zone by state, with the date of the green stage and its source, from the Environment Agency list of 26 Aug 2026.',
    h1: 'All low-emission zones in Germany',
    intro: 'Filter by state or search for a place: the list shows each zone with its status, the date of the green stage and the source.',
    resume: (h) => `The German Environment Agency keeps a list of all low-emission zones in Germany, last changed on ${h.date(h.P.uba_stand)}. It shows ${h.M.AKTIV.length} active zones and ${h.M.AUFGEHOBEN.length} lifted ones. Every active zone is now at stage three: only vehicles with a green sticker or an exemption may enter. Most zones are in North Rhine-Westphalia, including the joint Ruhr zone, which spans 13 cities from Duisburg to Dortmund. Next come Hesse with Frankfurt am Main, Darmstadt, Offenbach, Wiesbaden, Marburg and Limburg, Bavaria with Munich, Augsburg and Regensburg, and Baden-Württemberg, where after many liftings only Stuttgart, Ludwigsburg with its neighbouring towns, and Pforzheim remain. Single zones exist in Berlin, Bremen, Leipzig, Halle, Magdeburg and Osnabrück. Hamburg, Dresden, Nuremberg, Kiel and the Saarland, among others, have no zone. Every zone in the list carries at least one source from an authority that we checked on ${h.date(h.P.retrieved_at)}; where cities and the Agency give different dates, the city page says so.`,
    faqs: (h) => [
      { q: 'How many low-emission zones are there in Germany?', a: `According to the German Environment Agency list of ${h.date(h.P.uba_stand)}, there are ${h.M.AKTIV.length} active zones. The Ruhr zone counts as one even though it covers 13 cities, as does the Ludwigsburg zone with eleven municipalities. Counting places instead of zones therefore gives a much higher figure. A further ${h.M.AUFGEHOBEN.length} zones appear in the list as lifted.` },
      { q: 'How do I recognise where a zone starts?', a: 'By traffic sign 270.1 “Umweltzone” with an additional plate showing the permitted stickers; sign 270.2 marks the end. The signs stand at every entry point. Satnavs and maps often show the boundaries but are not binding. What is binding is the signage, together with the area defined in the city’s or state’s plan.' },
      { q: 'Are there states with no zone at all?', a: 'Yes. According to the list, Schleswig-Holstein, Mecklenburg-Western Pomerania, Brandenburg, Saarland, Hamburg and Thuringia have no active zone; Thuringia’s only zone, in Erfurt, has been lifted. Rhineland-Palatinate has had none since Mainz lifted its zone on 1 October 2025. In Lower Saxony only Osnabrück remains, after Hanover lifted its zone.' },
    ],
    body: (h) => `<h2>Active zones by state</h2>
${h.table(['State', 'Zones', 'Names'], proLand(h), `Based on the ${h.src('ubaListe', 'German Environment Agency list')} and the state websites`, ['l', 'r', 'l'])}
<h2>Where the states describe their zones</h2>
<p>For North Rhine-Westphalia the ${h.src('nrw', 'Environment Ministry')} keeps the list, for Hesse the ${h.src('hessen', 'Environment Ministry in Wiesbaden')}, for Baden-Württemberg the ${h.src('bwVm', 'Transport Ministry')} and for Bavaria the ${h.src('byStmuv', 'Environment Ministry')}. State pages are not always as up to date as city pages; we matched every zone against at least one of these sources.</p>
<h2>Driving through several zones</h2>
<p>Long journeys often cross several zones. The ${h.a('route', 'route check')} tests up to five places at once. What an offence costs is on the ${h.a('bussgeld', 'fines')} page; which zones no longer exist is on the ${h.a('aufgehobene-umweltzonen', 'lifted zones')} page.</p>`,
  },
});
