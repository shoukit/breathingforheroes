/**
 * Business facts. Single source of truth — never repeat any of this in a template.
 * Everything here is verified against the predecessor site; nothing is invented.
 */

export const site = {
  name: 'Breathing for Heroes',
  tagline: 'Breathwork in Bonn',
  url: 'https://breathing-for-heroes.de',
  locale: 'de_DE',
  lang: 'de',
} as const;

export const person = {
  name: 'Tom Geier',
  role: 'Zertifizierter Breathwork Instructor',
} as const;

export const contact = {
  /** Non-breaking spaces: a phone number split across two lines is unreadable. */
  phone: '+49 176 34966935',
  /** E.164, for tel: links and structured data */
  phoneHref: '+4917634966935',
  email: 'hello@breathing-for-heroes.de',
  street: 'Brahmsstr. 11',
  postalCode: '53121',
  city: 'Bonn',
  country: 'DE',
  countryName: 'Deutschland',
} as const;

/** The one primary CTA of the entire site. Used everywhere; changed in one place. */
export const primaryCta = {
  label: 'Termin anfragen',
  href: '/kontakt/',
} as const;

/**
 * Where the contact form posts.
 *
 * The predecessor site had no booking system, so nothing is assumed here. Set this
 * to a real endpoint (Formspree, Basin, a Netlify form, an own handler) before
 * launch — until then the form is disabled and the page falls back to phone and
 * e-mail, which are real and work today. See docs/06-uebergabe.md.
 */
export const formEndpoint = '' as string;

export const nav = [
  { label: 'Breathwork', href: '/breathwork/' },
  { label: 'Sessions & Preise', href: '/sessions/' },
  { label: 'Eisbaden', href: '/eisbaden/' },
  { label: 'Über Tom', href: '/ueber-tom/' },
] as const;

export const legalNav = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
] as const;

/**
 * Contraindications. Shown wherever someone might book without reading further.
 * Deliberately phrased as exclusion criteria, not as a disclaimer footnote.
 */
export const contraindications = [
  'Schwangerschaft',
  'Herz-Kreislauf-Erkrankungen',
  'Epilepsie',
  'grüner Star (Glaukom)',
  'akute psychiatrische Erkrankungen',
] as const;

export const iceContraindications = [
  'Herz-Kreislauf-Erkrankungen',
  'Bluthochdruck',
  'Epilepsie',
  'Schwangerschaft',
  'akute Infekte',
] as const;
