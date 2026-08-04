/**
 * The site's one motion system. Everything animated goes through here so the
 * language stays consistent: the same easing, the same rise distance, the same
 * respect for `prefers-reduced-motion`.
 *
 * Progressive enhancement holds in two layers. `<html>` carries a `js` class
 * (set inline in <head> before first paint), and the CSS only hides a
 * `[data-reveal]` element when that class is present. So with JavaScript off,
 * nothing is ever stuck invisible. And under reduced motion this module reveals
 * everything at once and wires no scroll work at all.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** The house easing. Expo-out: quick to arrive, slow to settle — reads as calm. */
const EASE = 'power3.out';

/** Sections and cards rise into place as they enter, in gentle staggered groups. */
function reveals() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (!items.length) return;

  if (reduce) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.set(items, { opacity: 0, y: 22 });

  ScrollTrigger.batch(items, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: EASE,
        stagger: 0.09,
        overwrite: true,
        onComplete: () => batch.forEach((el) => el.classList.add('is-visible')),
      }),
  });

  // A late web-font swap or an image settling can move a trigger point; one
  // recalculation after load keeps the start positions honest.
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

/**
 * The hero introduces itself once. The headline only translates — its opacity
 * stays at 1 so it paints on the first frame and never delays the LCP. The
 * quieter lines around it may fade.
 */
function heroIntro() {
  const panel = document.querySelector<HTMLElement>('[data-hero-intro]');
  if (!panel || reduce) return;

  const headline = panel.querySelector('.display');
  const rest = panel.querySelectorAll(':scope > :not(.display)');

  const tl = gsap.timeline({ defaults: { ease: EASE } });
  if (headline) tl.from(headline, { y: 18, duration: 0.9 }, 0);
  tl.from(rest, { y: 18, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.12);
}

/**
 * A quiet magnetic pull on the primary call to action. Fine-pointer only — it
 * would fight a touch scroll — and off entirely under reduced motion. The button
 * still works untouched; this only nudges it toward the cursor.
 */
function magnetic() {
  if (reduce || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 0.28;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - (r.left + r.width / 2)) * strength,
        y: (e.clientY - (r.top + r.height / 2)) * strength,
        duration: 0.4,
        ease: EASE,
      });
    });
    el.addEventListener('pointerleave', () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    );
  });
}

/**
 * The header settles once the hero is behind you: a touch more opaque, a soft
 * lift off the page. A state change, not an animation, so it runs even under
 * reduced motion. No raw scroll listener — ScrollTrigger batches the reads.
 */
function header() {
  const el = document.querySelector<HTMLElement>('.site-header');
  if (!el) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => el.classList.toggle('is-scrolled', self.scroll() > 80),
  });
}

reveals();
heroIntro();
magnetic();
header();
