/**
 * The only three testimonials that exist. Verbatim from the predecessor site,
 * corrected for typos only. Do not add to this list without a real, attributable source.
 */

export type Testimonial = {
  quote: string;
  name: string;
  /** Short pull-quote for tight layouts. Must be a literal substring of the full quote. */
  lead: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    lead: 'Ich fühlte mich zu jeder Zeit des Breathings gut angeleitet und sicher aufgehoben.',
    quote:
      'Noch heute nach 6 Wochen meines ersten Breathings bin ich in der Lage, mir den losgelösten Zustand vom Ende der Session wieder abzurufen und als wohltuende Entspannung empfinden zu können. Ich fühlte mich zu jeder Zeit des Breathings gut angeleitet und sicher aufgehoben. Jederzeit wieder.',
    name: 'Helma Rombach',
  },
  {
    lead: 'Es ist sehr befreiend und gleichzeitig ist man tiefenentspannt.',
    quote:
      'Man kann den Zustand, in den man kommt, schwer beschreiben, aber es ist sehr befreiend und gleichzeitig ist man tiefenentspannt. Danach fühlt man sich wie neugeboren. Jeder sollte diese Erfahrung mal gemacht haben.',
    name: 'Ronja Ferri',
  },
  {
    lead: 'Die Spannung in mir war wie aufgelöst.',
    quote:
      'Die Breathwork Session mit Tom ist ein Pfad, der direkt zu dir selber führt. Das Gefühl von Frieden und Glück, das in meinem gesamten Körper spürbar war, ist wirklich besonders. Dort, wo ich war, war alles gut, und die Spannung in mir war wie aufgelöst.',
    name: 'Kai Schifferdecker',
  },
];
