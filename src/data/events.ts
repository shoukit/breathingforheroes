/**
 * Dated events — group sessions, courses, ice bathing.
 *
 * Empty on purpose: no real dates exist yet, and inventing them is out of the
 * question. Everything downstream is built to handle that. While this array is
 * empty, no event pages are generated and the dates section does not render, so
 * the site never shows a "no dates" page — those rank badly and convert worse.
 *
 * The moment a real date lands here it produces: an entry on /sessions/, its own
 * page at /termine/<slug>/, and schema.org Event markup that makes it eligible
 * for the dated result Google shows for local searches.
 *
 * This is the single highest-value change available to the site — see
 * docs/07-wettbewerb.md. Every competitor that outranks us has dates; we do not.
 *
 * Example of a filled entry:
 *
 *   {
 *     slug: 'gruppensession-selbstannahme-maerz',
 *     title: 'Gruppensession: Selbstannahme',
 *     start: '2026-03-18T18:30',
 *     end: '2026-03-18T20:00',
 *     place: 'Im Krausfeld 1, 53111 Bonn',
 *     price: '20 €',
 *     priceNumeric: 20,
 *     capacity: 8,
 *     status: 'open',
 *     summary: 'Gemeinsames Thema Selbstannahme. Eigene Intention, 45 Minuten Atemrunde, Nachruhe.',
 *   }
 */

export type EventStatus = 'open' | 'few' | 'full';

export type BreathEvent = {
  slug: string;
  title: string;
  /** Local time, ISO without zone — Europe/Berlin is implied. */
  start: string;
  end: string;
  place: string;
  price: string;
  priceNumeric: number;
  capacity?: number;
  status: EventStatus;
  summary: string;
};

export const events: readonly BreathEvent[] = [];

/** Only events that have not started yet, soonest first. */
export function upcoming(now = new Date()): BreathEvent[] {
  return events
    .filter((e) => new Date(e.start) >= now)
    .sort((a, b) => a.start.localeCompare(b.start));
}

const dateFmt = new Intl.DateTimeFormat('de-DE', {
  weekday: 'short',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const timeFmt = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit' });

export function formatDate(iso: string): string {
  return dateFmt.format(new Date(iso));
}

export function formatTimeRange(startIso: string, endIso: string): string {
  return `${timeFmt.format(new Date(startIso))} – ${timeFmt.format(new Date(endIso))} Uhr`;
}

export const statusLabel: Record<EventStatus, string> = {
  open: 'Plätze frei',
  few: 'Nur noch wenige Plätze',
  full: 'Ausgebucht',
};
