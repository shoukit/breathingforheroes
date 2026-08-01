# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Relaunch of https://breathing-for-heroes.de — a multipage marketing site for **Tom Geier**, a
certified breathwork instructor in Bonn, Germany. The predecessor was a WordPress/Elementor site;
this repo replaces it with a statically generated Astro site.

Site language is **German**. All user-facing copy, `lang` attributes, dates, and number formats
are German. Do not introduce English UI strings.

## Commands

```bash
npm run dev       # dev server on localhost:4321
npm run build     # static output to dist/
npm run preview   # serve dist/ locally
npm run check     # astro check — type/diagnostics pass over .astro files
```

There is no test suite and no linter. `npm run build` is the gate: it must pass clean before any
commit. `npm run check` catches template and type errors that `build` tolerates.

## Architecture

Astro 7, static output (no adapter, no SSR). Zero client-side framework — ship HTML and CSS, add
JavaScript only where an interaction genuinely requires it, and always as a progressive
enhancement over working markup.

- `src/layouts/` — page shells. Every page goes through one layout, which owns `<head>`, the
  skip-link, header, footer, and JSON-LD injection. Meta tags are layout props, never hand-written
  per page.
- `src/components/` — section-level components (hero, offer cards, testimonials, FAQ …). Sections
  are composed in pages; components do not fetch or own content.
- `src/data/` — the single source of truth for business facts (NAP, prices, offers, testimonials,
  FAQ). Pages and components import from here. **Never hardcode a price, phone number, or
  testimonial into a template** — a change must be possible in one place.
- `src/styles/` — global stylesheet and design tokens as CSS custom properties. Tokens are the only
  place raw color/space/type values are allowed; components reference `var(--…)`.
- `src/assets/` — images processed by Astro's `<Image>` (hashed, resized, converted to modern
  formats). `public/` is only for files that must keep a literal path (favicon, robots.txt, OG
  images referenced by absolute URL).

Icons come from `lucide` as inline SVG. **Never use emoji as an icon** in UI.

## Verified business facts

These are the only facts about the business that may be stated. They come from the predecessor
site and are reproduced in `src/data/`.

- Tom Geier, certified breathwork instructor. Began with relaxation and breathing techniques in
  2019 (incl. the Wim Hof method); trained and certified since.
- Method: *Conscious Connected Breathing* (rebirthing style) — ~45 min of active, connected
  mouth-breathing inside a session of roughly 1.5 hours.
- Single session: **85 €**, 1.5–2 h, online via Zoom or in person.
- **There is no studio and no practice room.** In-person sessions happen in Tom's garden, at the
  client's home, or outdoors by arrangement. The address below is the business address for the
  Impressum — never present it as a venue, and never show interior "practice room" imagery.
- Group session: **20 € per person**, 1.5 h.
- Ice bathing: seasonal, winter only.
- Address: Im Krausfeld 1, 53111 Bonn · Phone: +49 176 34966935 · hello@breathing-for-heroes.de
  (The predecessor site's "Brahmsstr. 11, 53121 Bonn" is outdated — corrected by the client.)
- Named testimonials: Helma Rombach, Ronja Ferri, Kai Schifferdecker.

## Content constraints — non-negotiable

**No invented numbers, no invented proof.** No participant counts, session counts, years-of-
experience figures, star ratings, or "X% of clients" unless sourced from the list above. No stock
testimonials, no logo bars for partners that do not exist, no fake scarcity ("only 2 spots left").

The one exception is **published research, cited with a link** — the study figures in
`src/data/research.ts`. They are not invented; every number is from the paper named beside it, and
each carries its own caveat. Two rules hold them in place: the block must stay *limiting* rather
than promotional (it leads with what the evidence does not support, and includes the placebo trial
that found no advantage for this method), and no card may lose its `limit` field. Reasoning and
sources: `docs/08-breathwork-recherche.md`.

**No medical or healing claims.** The predecessor site carried claims that are both unevidenced and
non-compliant with German advertising law for health services (HWG/UWG) — e.g. "die ultimative
Medizin um deinen Körper zu heilen", "so effizient wie 10 Sitzungen bei einem Psychologen",
"Reduktion von Ängsten", "Verarbeitung von Traumata". These must not be carried over. Write about
subjective experience ("viele Teilnehmende berichten von …", "wie es sich anfühlt"), never about
diagnosis, treatment, or cure. Breathwork is not therapy; where the distinction matters, say so.

Every page carries a safety note where relevant: conscious connected breathing is not suitable in
pregnancy, with cardiovascular conditions, epilepsy, glaucoma, or acute psychiatric conditions.

## Conversion rules

Exactly **one primary CTA per page**. Secondary actions must be visually subordinate (text link or
ghost button), never a second filled button competing with the primary. The primary CTA across the
site is booking a session; the contact page is where it lands.

## Accessibility bar

Enforced, not aspirational:

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text and meaningful UI boundaries). Verify computed
  values against the tokens — do not eyeball.
- Visible focus states on every interactive element. Never `outline: none` without an equal or
  better replacement.
- Touch targets ≥ 44×44 px.
- All motion wrapped in `@media (prefers-reduced-motion: no-preference)`, or neutralized under
  `reduce`. Nothing may animate unconditionally.
- One `<h1>` per page, headings in order, landmarks present, images carry meaningful `alt` (empty
  `alt=""` for decorative).

## Working process for new pages and major sections

The site is built through a fixed skill sequence, in this order — strategy before words, words
before pixels:

1. `marketing-psychology` — structure, offer, CTA logic (before writing anything)
2. `copywriting` — hook first, benefit over feature, one CTA
3. `frontend-design` — typography, color, rhythm
4. `ui-ux-pro-max` — implementation against the accessibility bar above
5. `cro` — review the finished page for conversion killers
6. `seo-audit` — once before launch

## Imagery

Photography is generated with Higgsfield (MCP) and committed to `src/assets/`. Keep people
plausible and un-glossy — this is a small, personal practice, not a wellness franchise. Generated
images of a person must not be presented as Tom himself; portraits of Tom must be real photography
supplied by the client, and placeholders must be flagged as such in the handover notes.

## Git

Development branch: `claude/breathing-heroes-relaunch-6i5ajn`.
