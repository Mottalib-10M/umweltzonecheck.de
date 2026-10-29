import { describe, it, expect } from 'vitest';
import { plakette, pruefe, route, bussgeld, ausnahme, ZONEN, AKTIV, AUFGEHOBEN, zoneById, ortIdOf, mindestGruppe, P } from './index';

const fz = (gruppe: 1 | 2 | 3 | 4, kraftstoff: 'benzin' | 'diesel' | 'gas' | 'elektro' = 'benzin', norm: 0 | 1 | 2 | 3 | 4 | 5 | 6 | null = 4) => ({ gruppe, kraftstoff, norm });

describe('Liste des Umweltbundesamts (Stand 26.08.2026)', () => {
  it('35 aktive und 23 aufgehobene Zonen', () => {
    expect(ZONEN.length).toBe(58); expect(AKTIV.length).toBe(35); expect(AUFGEHOBEN.length).toBe(23);
  });
  it('Aufhebungsdaten', () => {
    expect(zoneById('mainz')!.aufhebung).toBe('2025-10-01');
    expect(zoneById('hannover')!.aufhebung).toBe('2024-02-22');
    expect(zoneById('freiburg')!.aufhebung).toBe('2025-04-22');
    expect(zoneById('erfurt')!.aufhebung).toBe('2021-05-01');
  });
  it('Stufe 3 (grün) Berlin 01.01.2010, Stuttgart 01.01.2012, München 01.10.2012', () => {
    expect(zoneById('berlin')!.stufe3).toBe('2010-01-01');
    expect(zoneById('stuttgart')!.stufe3).toBe('2012-01-01');
    expect(zoneById('muenchen')!.stufe3).toBe('2012-10-01');
  });
  it('Ruhrgebiet : 13 Städte', () => expect(zoneById('ruhrgebiet')!.orte.length).toBe(13));
});

describe('Plakette nach Anhang 2 (vereinfachte Tabelle des BMUV)', () => {
  const d = (norm: 0 | 1 | 2 | 3 | 4 | 5 | 6, pms = false) => plakette({ kraftstoff: 'diesel', modus: 'norm', norm, pms, ez: '2010-01-01', klasse: 'pkw' }).gruppe;
  it('Diesel', () => {
    expect(d(0)).toBe(1); expect(d(1)).toBe(1); expect(d(1, true)).toBe(2); expect(d(2)).toBe(2); expect(d(2, true)).toBe(3);
    expect(d(3)).toBe(3); expect(d(3, true)).toBe(4); expect(d(4)).toBe(4); expect(d(6)).toBe(4);
  });
  it('Benzin und Gas : ab Euro 1 grün, ohne Norm keine', () => {
    expect(plakette({ kraftstoff: 'benzin', modus: 'norm', norm: 1, pms: false, ez: '1993-01-01', klasse: 'pkw' }).farbe).toBe('gruen');
    expect(plakette({ kraftstoff: 'gas', modus: 'norm', norm: 0, pms: false, ez: '1990-01-01', klasse: 'pkw' }).farbe).toBe('keine');
  });
  it('Elektro : Gruppe 4 (Anhang 2 Abs. 3)', () => expect(plakette({ kraftstoff: 'elektro', modus: 'norm', norm: 0, pms: false, ez: '2024-01-01', klasse: 'pkw' }).gruppe).toBe(4));
});

describe('Plakette nach Erstzulassung (§ 6 Abs. 3 und 4)', () => {
  const p = (kraftstoff: 'diesel' | 'benzin', ez: string, klasse: 'pkw' | 'lkw' = 'pkw') => plakette({ kraftstoff, modus: 'datum', norm: 0, pms: false, ez, klasse }).gruppe;
  it('Diesel-Pkw : Grenzen 1997, 2001, 2006', () => {
    expect(p('diesel', '1996-12-31')).toBe(1); expect(p('diesel', '1997-01-01')).toBe(2); expect(p('diesel', '2000-12-31')).toBe(2);
    expect(p('diesel', '2001-01-01')).toBe(3); expect(p('diesel', '2005-12-31')).toBe(3); expect(p('diesel', '2006-01-01')).toBe(4);
  });
  it('Diesel-Lkw : Grenzen 01.10.1996, 01.10.2001, 01.10.2006', () => {
    expect(p('diesel', '1996-09-30', 'lkw')).toBe(1); expect(p('diesel', '1996-10-01', 'lkw')).toBe(2);
    expect(p('diesel', '2001-10-01', 'lkw')).toBe(3); expect(p('diesel', '2006-09-30', 'lkw')).toBe(3); expect(p('diesel', '2006-10-01', 'lkw')).toBe(4);
  });
  it('Benzin-Pkw : ab 1993 grün', () => { expect(p('benzin', '1992-12-31')).toBe(1); expect(p('benzin', '1993-01-01')).toBe(4); });
});

describe('Darf ich hinein ?', () => {
  const heute = '2026-10-29';
  it('Berlin mit grün : frei ; mit gelb : verboten', () => {
    expect(pruefe('berlin', fz(4), heute).antwort).toBe('frei');
    expect(pruefe('berlin', fz(3, 'diesel', 3), heute).antwort).toBe('verboten');
  });
  it('Mainz : seit 01.10.2025 aufgehoben, vorher grün nötig', () => {
    expect(pruefe('mainz', fz(1), heute).antwort).toBe('aufgehoben');
    expect(pruefe('mainz', fz(3), '2025-09-30').antwort).toBe('verboten');
  });
  it('Hamburg : keine Zone', () => expect(pruefe('hamburg', fz(1), heute).antwort).toBe('keineZone'));
  it('Dortmund gehört zur Zone Ruhrgebiet', () => expect(pruefe(ortIdOf('Dortmund'), fz(4), heute).zone!.id).toBe('ruhrgebiet'));
  it('Stuttgart : Diesel Euro 4 mit grüner Plakette trifft das zonale Dieselverbot', () => {
    const r = pruefe('stuttgart', fz(4, 'diesel', 4), heute);
    expect(r.antwort).toBe('frei'); expect(r.diesel.some((d) => d.gebiet === 'ganz')).toBe(true);
    expect(pruefe('stuttgart', fz(4, 'diesel', 6), heute).diesel.length).toBe(0);
  });
  it('München : Diesel Euro 4 seit 01.02.2023', () => {
    expect(pruefe('muenchen', fz(4, 'diesel', 4), heute).diesel.length).toBe(1);
    expect(pruefe('muenchen', fz(4, 'diesel', 4), '2023-01-31').diesel.length).toBe(0);
  });
  it('Stufen : Berlin 2009 verlangte rot', () => expect(mindestGruppe(zoneById('berlin')!, '2009-06-01')).toBe(2));
  it('Befreites Fahrzeug', () => expect(pruefe('berlin', { ...fz(1), befreit: true }, heute).antwort).toBe('befreit'));
});

describe('Route, Bußgeld, Ausnahmen', () => {
  const heute = '2026-10-29';
  it('Route : doppelte Zone zählt einmal', () => {
    const r = route([ortIdOf('Essen'), ortIdOf('Bochum'), 'koeln', 'hamburg'], fz(3, 'diesel', 3), heute);
    expect(r.zonen).toBe(2); expect(r.verboten).toBe(2);
  });
  it('Bußgeld 100 €, kein Punkt', () => {
    expect(bussgeld(fz(3, 'diesel', 3), 'berlin', heute)).toMatchObject({ betrag: 100, punkte: 0 });
    expect(bussgeld(fz(4), 'berlin', heute).betrag).toBe(0);
    expect(P.bussgeld.betrag).toBe(100);
  });
  it('Anhang 3', () => {
    expect(ausnahme('motorrad', heute)).toMatchObject({ befreit: true, nr: 4 });
    expect(ausnahme('oldtimerH', heute).nr).toBe(10);
    expect(ausnahme('wohnmobil', heute).befreit).toBe(false);
    expect(ausnahme('eKennzeichen', '2026-10-01').befreit).toBe(true);
    expect(ausnahme('eKennzeichen', '2026-09-30')).toMatchObject({ befreit: false, vorE: true });
  });
});
