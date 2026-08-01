/**
 * URL map from the WordPress predecessor to this site.
 *
 * This is a relaunch on the same domain, so every old URL that has accumulated
 * links or rankings has to land somewhere sensible. Left unhandled, these become
 * 404s and the migration throws away whatever authority the old site had.
 *
 * The right-hand side is always a page that answers the same intent — never the
 * home page as a catch-all, which Google treats as a soft 404.
 *
 * One source of truth: `astro.config.mjs` builds both the static redirect pages
 * and the host-level rules (`_redirects`, `.htaccess`) from this map.
 */
export const redirects: Record<string, string> = {
  // Renamed pages
  '/home': '/',
  '/uebermich': '/ueber-tom/',
  '/about': '/breathwork/',
  '/contact': '/kontakt/',

  // Elementor template leftovers — duplicates of pages that did exist
  '/home-2': '/',
  '/about-2': '/breathwork/',
  '/contact-2': '/kontakt/',

  // Template pages for coaches and clients that never existed at this practice
  '/coaches': '/ueber-tom/',
  '/single-coach': '/ueber-tom/',
  '/clients': '/',

  // Blog was created but never filled
  '/blog': '/breathwork/',
  '/blog-2': '/breathwork/',

  // Unchanged, listed so the map documents the full old surface:
  // /sessions/, /eisbaden/, /impressum/, /datenschutz/
};
