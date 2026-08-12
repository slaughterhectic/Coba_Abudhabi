# COBA — website handover

Next.js 16 (App Router, React 19), single page, statically prerendered.

```bash
npm install
npm run dev      # development
npm run build && npm run start -- -p 3477
```

## What is real

- **All copy** is lifted from the two supplied decks (*COBA Brand Identity Vol. One*
  and *COBA Residency Programme Vol. One*). Nothing is invented marketing text.
- **All photography** is extracted from those PDFs — no stock, no substitutes.
- **Brand tokens** come from deck p.09/p.10 verbatim: Plaster `#F1EBDF`, Linen
  `#E4DCCB`, Sand `#D3C4A6`, Oak `#C9A97A`, Sage `#8E9E76`, Olive `#4A5836`,
  Brass `#A8874E`, Ink `#1C1B17`; IBM Plex Sans + IBM Plex Sans Arabic + Reem
  Kufi, 0.30em Latin caps tracking, 400 body weight floor, 65ch measure,
  Arabic never letterspaced.
- **The owl mark** is vector-traced from the supplied raster, symmetrised about
  the vertical axis, and inlined as SVG (`components/owlPath.ts`). It drives the
  header, section rules, footer lockup, watermark and favicons.
- **Instagram** `@cobaabudhabi` is from deck p.12. Address, opening days and
  capacity (10–35 guests) are from Residency p.07.
- **The two pinned residencies** in the week grid — Art Club (Mondays, deck p.12)
  and Children's Art Club (Saturdays, deck p.06) — are the only named sessions.

## What is placeholder — replace before launch

| Item | Where | Note |
|---|---|---|
| `hello@coba.ae` | `components/Enquiry.tsx` (`INBOX`) | **Invented.** The decks give no email. |
| `https://coba.ae` | `app/layout.tsx` (`metadataBase`, OG url) | Set to the real domain. |
| Children's Art Club tier | `components/TheWeek.tsx` | The deck says "every Saturday" but gives no time; it is placed in Tier B. |

No phone number is shown anywhere, because the decks do not contain one.

## The enquiry form collects nothing

`Enquiry.tsx` has **no backend**. On submit it composes a `mailto:` link and
hands off to the visitor's own mail client. Nothing is stored, transmitted or
logged by the site. If COBA want a real inbox flow, wire it to a form service
and remove the "This site stores nothing" note.

## Russian translation

The site is bilingual: `/` is English, `/ru` is Russian, added because ~40% of
the target audience is Russian-speaking. Each has its own root layout
(`app/(en)/layout.tsx`, `app/ru/layout.tsx`, sharing font loaders from
`app/fonts.ts`) so `<html lang>` is correct server-side with no client-side
flash. All copy lives in `lib/i18n.ts` as a single `en` object plus a `ru`
object typed as `typeof en` — TypeScript won't compile if a Russian key is
missing. `components/Site.tsx` holds the page structure and reads `copy(lang)`;
every leaf component takes a `lang` prop and does the same. The header's
EN/RU switcher is a plain link between the two routes (no client state). The
Arabic accent lines (`ar-display` spans) are left untranslated on both
routes — they're a fixed bilingual UAE brand device, not visitor-facing
translation. To add a third language, extend the `Lang` type and `DICT` in
`lib/i18n.ts`, add an `app/<locale>/layout.tsx` + `page.tsx` pair, and add a
link in `Header.tsx`'s switcher.

## Generated media

Four background clips were generated with Higgsfield (`kling3_0_turbo`), since
the decks contain stills only. `hero`, `loop-majlis` and `loop-calm` were
regenerated in August 2026 after client feedback that the original casting
(Emirati dress throughout, gender-segregated) didn't reflect a client base
that is ~40% Russian — the casting rule below no longer applies to these
three; the cast is now majority European/international. `loop-calm`'s first
version showed a period-style window with an exterior building visible
through it, wrong for a first-floor mall unit — it was regenerated a second
time with no windows at all. `loop-craft` is hands-only and untouched. The
deck-sourced photography elsewhere on the page (room strip, "Clubs &
community" card, etc.) is real and unchanged.

| File | Used for |
|---|---|
| `hero` | hero background |
| `loop-craft` | Classes & workshops card |
| `loop-majlis` | Professional meet-ups card |
| `loop-calm` | The Model band |

**Casting rule applied:** every generated frame keeps gender-segregated
groupings wherever Emirati national dress appears — the women's circles are
women only, the majlis is men only. An earlier hero that seated an Emirati man
with expatriate women was discarded and regenerated. The deck's own photography
already follows this rule, so no supplied image needed changing.

Each clip is cut to a seamless loop (the tail cross-fades into the head), has no
audio track, and ships with a WebP poster.

## Media budget — 2.3 MB total

| Asset | Count | Total |
|---|---|---|
| Video (VP9 `.webm` + H.264 `.mp4`) | 4 × 2 | ~1.4 MB |
| Photography (WebP, served responsively by `next/image`) | 19 | ~950 KB |
| Posters + icons | 7 | ~200 KB |

**Videos ship in two codecs on purpose.** Some Chromium builds report
`canPlayType(...avc1...) === "probably"` and then never decode — `readyState`
stays 0 with no error. VP9/WebM leads, H.264/MP4 is the fallback for older
Safari. See `components/BgVideo.tsx`.

> Video playback could **not** be confirmed in the automation browser used to
> build this — that Chrome decodes neither VP9 nor H.264 (verified by opening
> the raw file directly: valid stream, correct `Content-Type`, range requests
> honoured, no media error, never decodes). Please confirm the hero plays in a
> normal browser. If it does not, the poster frame still renders correctly, so
> the page never looks broken.

## Accessibility notes

- Brass and Sage **fail** contrast on plaster (2.9:1 and 2.4:1, stated on deck
  p.09). They are used only as material — hairlines, rules, large display
  accents. Small text uses `--brass-text` (`#856234`), a darkened equivalent.
- Above-the-fold entrance animation is pure CSS, so the hero is never shipped as
  `opacity: 0` waiting on hydration. Below the fold, one `IntersectionObserver`
  reveals `[data-reveal]` elements.
- `prefers-reduced-motion` disables the reveals, the hero drift and the
  filmstrip marquee.

## Known constraint

The grain overlay deliberately avoids `mix-blend-mode`. A blended full-viewport
fixed layer forces the whole page to recomposite every animation frame (it
visibly stalled the renderer against the marquee) and it crushed the contrast of
light type on the ink bands.
