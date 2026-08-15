# COBA — website handover

Next.js 16 (App Router, React 19), four statically prerendered routes.

```bash
npm install
npm run dev      # development
npm run build && npm run start -- -p 3477
```

## Two audiences, one route each

| Route | Audience | Component |
|---|---|---|
| `/`, `/ru` | **The visitor.** What COBA is, who you'll meet, why you'd come. | `components/Site.tsx` |
| `/partners`, `/ru/partners` | **The collaborator.** Residency, collaboration, sponsorship, freelance practice. | `components/Partners.tsx` |

This split was made in August 2026 on client feedback. The site had leaned
"too heavily around residency and renting space" — five of nine numbered
sections, plus the header CTA, the footer CTA and the enquiry form, all
addressed club owners, which left an actual visitor with no path through the
page. Residency material moved wholesale to `/partners`, which doubles as the
"come work with us" page the client asked for.

The through-line the client named is now the spine of the home page:
**COBA = People + Community + Connections + Opportunities.**

Home sections: 01 The Idea · 02 Who You'll Meet · 03 In the Room ·
04 What's On · 05 Fifteen Years.
Partners sections: 01 Who We Work With · 02 Why COBA · 03 The Model ·
04 Residency Formats · 05 What You Receive · 06 Who We Welcome.

`Header`, `Footer`, `Hero` and `Enquiry` each take a `page` (or `variant`)
prop and read the matching copy block, so one component serves both routes.
Two things depend on getting that prop right: the language switcher keeps you
on the page you're reading rather than bouncing you home, and the enquiry form
swaps between the visitor's "Plan your visit" and the partner's "Apply".
`Partners.tsx` imports `Shot`, `SectionHead` and `d` from `Site.tsx` rather
than redefining them.

### Copy the client asked us to remove

> "A hotel charges for the room. COBA invests in the return."

Cut entirely — it made COBA sound as if it were competing with a hotel. Its
replacement is `idea.h2`: **"More than a venue. A place to belong, connect and
grow."** The `why.difference*` keys and the `.difference` CSS that carried the
old line are deleted, not commented out. Don't reinstate it.

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
- **Instagram** `@cobaabudhabi` is from deck p.12. Address and opening days
  are from Residency p.07. Capacity is shown as **70+ guests** per the
  founders' correction in August 2026 — the Residency deck itself states
  10–35; the deck should be corrected to match if it's reused elsewhere.
- **The two pinned residencies** in the week grid — Art Club (Mondays, deck p.12)
  and Children's Art Club (Saturdays, deck p.06) — are the only named sessions.

## What is placeholder — replace before launch

| Item | Where | Note |
|---|---|---|
| `hello@coba.ae` | `components/Enquiry.tsx` (`INBOX`) | **Invented.** The decks give no email. Both variants send here; split it if visits and applications want separate inboxes. |
| `https://coba.ae` | `app/(en)/layout.tsx`, `app/ru/layout.tsx` (`metadataBase`, OG url) | Set to the real domain. |
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
missing. `components/Site.tsx` and `components/Partners.tsx` hold the two page
structures and read `copy(lang)`; every leaf component takes a `lang` prop and
does the same. Route helpers `homeHref(lang)` and `partnersHref(lang)` in
`lib/i18n.ts` are the only place locale-prefixed URLs are built — use them
rather than writing `/ru/...` by hand. The header's
EN/RU switcher is a plain link between the two routes (no client state). The
Arabic accent lines (`ar-display` spans) are left untranslated on both
routes — they're a fixed bilingual UAE brand device, not visitor-facing
translation. To add a third language, extend the `Lang` type and `DICT` in
`lib/i18n.ts`, add an `app/<locale>/layout.tsx` + `page.tsx` pair **and an
`app/<locale>/partners/page.tsx`**, extend the two route helpers, and add a
link in `Header.tsx`'s switcher.

## Photography was re-extracted from the decks (August 2026)

Client feedback asked for sharper images. An audit found 19 of the 26 photos
had been downsampled well below what the source PDFs actually embed — the
`room-*` filmstrip shipped at 860px from a 1700–1750px original, and the
`who-*` set at 760px from 1200px. They were re-extracted with `pdfimages -all`
and re-encoded at full embedded resolution (WebP q82).

This is **recovered detail, not upscaling.** Each site image was matched back
to its deck original by structural comparison — every one scored an exact
match at identical aspect ratio, confirming they were straight resizes rather
than crops, so re-exporting is lossless in framing.

| Set | Was | Now |
|---|---|---|
| `room-*` (6) | 860px | 1700–1750px |
| `who-*` (6) | 760px | 1200px |
| `idea`, `house-explore`, `kit`, `founders`, `invitation` | 900–1500px | 1140–1750px |
| `artclub`, `shopfront` | 1800px | 1900px |
| `act-*` (6, from social exports) | 860px | 1080px |

**1900px is the ceiling for deck imagery.** That is the largest image either
deck contains.

The `act-*` set has no deck original — it is Higgsfield-generated — but the
same six generations were exported for social at `social/activities/*.jpg`,
**1080×1080 and visibly sharper** than the 860px web copies (compared at
native pixel level: hair strands resolve in the square that are mush in the
web version). The web set is now re-cut from those squares as a 1080×726
landscape band at `crop=1080:726:0:120`, preserving the original 1.488 aspect
so no layout shifts. That vertical offset was chosen by eye across all six —
a centred crop pulls in foreground clutter, most obviously the chessboard in
`act-chess`.

The trade is real and worth knowing: the square is **tighter horizontally**
than the old web crop, so the new files show slightly less to the left and
right in exchange for ~1.26× the detail.

`club-community` (1050px) has no better source anywhere in the repo, and
`artclub` is better from the deck (1900px) than from social (1376px). Both
were left alone. All of this was confirmed by structural comparison against
every image in the project wider than 900px, not by filename.

If you re-extract, the declared dimensions must move with the files:
`DIMS` in `Site.tsx`, `DIMS` in `RoomStrip.tsx`, and the inline `width`/
`height` props in `WelcomeList.tsx`, `HouseReveal.tsx` and `Founders.tsx`.
`next/image` uses them for aspect ratio, so a stale number distorts the photo.

## Navigation: two anchors, never a table of contents

The header carried five links per page, of which "The Idea", "Who You'll Meet"
and "15 Years" all pointed at the same idea, while "Work With Us" changed
route but looked identical to the four in-page anchors. It has been cut to
**two anchors plus one visually distinct route link**:

| Page | Anchors | Route link | CTA |
|---|---|---|---|
| Home | Who You'll Meet · What's On | Work with us → | Plan your visit |
| Partners | Who We Work With · The Model | Visit the hub → | Start a conversation |

The route link is lower-case and carries an arrow specifically so it does not
read as an anchor. Sections dropped from the bar are still reachable by
scrolling and from the footer. A scroll-spy (`IntersectionObserver` in
`Header.tsx`) marks whichever anchor you are inside using the same hairline
that hover draws — with only two links there is finally room to show it.

Resist adding links back. The bar is the one place the client explicitly
called "too complicated".

## Who You'll Meet has no photography, on purpose

`components/MeetGrid.tsx` renders its eight groups — Families, Children &
Teens, Creators, Professionals, Entrepreneurs, Community Leaders, Clubs &
Associations, Women's Groups — as a typographic lattice rather than a photo
grid. There is no honest photograph of "entrepreneurs" or "community leaders"
in the brand library, and generating eight of them would break the house rule
that every image on this site is real. If real photography of these groups
ever exists, the grid can take it; until then, don't fill the gap with stock.

It is built as a **roster**: a four-column index (number · name · note ·
Arabic) sharing vertical lines and baselines down all eight rows. Pointing at
a row fills it in while the others fall back to outline via
`-webkit-text-stroke` — the room quietening around whoever is speaking. The
whole interaction is CSS (`:has()` + `:hover`), so it costs no JavaScript, and
it is guarded three ways: `@supports selector(:has(*))` for browsers without
`:has()`, `@media (hover: none)` so touch devices never get stuck in a ghosted
state they cannot exit, and `prefers-reduced-motion`. Every note stays in the
DOM and visible at rest — nothing is hidden behind a pointer.

## Motion & signature components

The premium pass (August 2026) is built on the `motion` library plus a few
bespoke components; everything honours `prefers-reduced-motion`:

- `components/motion/Primitives.tsx` — WordsReveal (masked word-by-word
  headlines), Rise, CurtainReveal, ParallaxDrift, CountUp, StaggerIn/Item.
- `components/WhyCarousel.tsx` — Embla carousel for the seven reasons.
- `components/OrbitBadge.tsx` — rotating Create·Explore·Connect seal.
- `components/KitSpots.tsx` — hover/tap hotspots naming the kit objects.
- `components/HouseReveal.tsx` — the signature piece: the shopfront photo
  is split into its two door halves which slide apart with scroll
  (scrubbing both directions), revealing the specs "inside" the house.
  Note the inside layer is deliberately static — the doors physically
  cover it, and scroll-linking its opacity proved flaky under dev HMR.
- The room filmstrip is two counter-scrolling marquees; the six `act-*`
  activity shots (science, chess, LEGO, etiquette, mum & toddler, board
  games) and `club-community.webp` are Higgsfield-generated to the brand
  interior, added alongside the deck photography.

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

| File | Used for | Master |
|---|---|---|
| `hero` | home hero background | 2560×1440 |
| `loop-majlis-hero` | `/partners` hero background | 2560×1442 |
| `loop-majlis` | Professional meet-ups card (home) | 1080×608 |
| `loop-craft` | Classes & workshops card | 1080×608 |
| `loop-calm` | The Model band | 1080×608 |

`loop-majlis` exists at **two sizes on purpose.** The same clip is both the
`/partners` hero and a small card on the home page. Shipping one 2560px master
would have made the home page pull a 1.3 MB file to fill a card a few hundred
pixels wide. If you re-master one, re-master both.

### The two heroes were re-mastered (August 2026)

Client feedback said the hero looked "stretched". It was not distorted —
`object-fit: cover` was always correct — it was **upscaling softness**. The
clips shipped at 1280×720 (hero) and 1080×608 (`loop-majlis`), blown across a
full viewport and then magnified a further 12% by the `drift` keyframe. On a
2× display that is roughly a 2.5× upscale done by the browser's bilinear
filter.

There is no higher-resolution original. Every Higgsfield source in
`media/raw/` is 720p, and the hero's own raw file is not in the repo at all —
the 868 kbps `hero.mp4` was the best master available. So the fix was to move
the scaling off the browser and into ffmpeg:

```
hqdn3d=1.5:1.2:5:5,                     # clean compression noise first,
scale=W:H:flags=lanczos+accurate_rnd+full_chroma_int,   # so sharpening
unsharp=5:5:0.75:5:5:0.0                # doesn't amplify blocking
```

encoded VP9 CRF 31 (hero) / 34 (`loop-majlis`) and H.264 CRF 21 / 23. This
adds no detail that was never shot, but it removes the browser's soft
interpolation and the visible banding in flat areas — the wall behind the
hero and the panelling behind the majlis both improve markedly.

The `drift` keyframe was also pulled back from `1.04 → 1.12` to `1.02 → 1.08`,
since every extra percent of zoom magnifies pixels that don't exist.

`loop-craft` and `loop-calm` were left alone: both sit behind heavy scrims in
small figures, where the upscale never shows.

**If better footage ever arrives, re-shoot rather than re-encode.** These
masters are upscales and will not survive being pushed further.

**Casting rule applied:** every generated frame keeps gender-segregated
groupings wherever Emirati national dress appears — the women's circles are
women only, the majlis is men only. An earlier hero that seated an Emirati man
with expatriate women was discarded and regenerated. The deck's own photography
already follows this rule, so no supplied image needed changing.

Each clip is cut to a seamless loop (the tail cross-fades into the head), has no
audio track, and ships with a WebP poster.

## Media budget

Browsers fetch the `.webm` and ignore the `.mp4` unless they're an old Safari,
so judge the budget per page, per codec — not by the folder size:

| Page | Above the fold | Lazy (card videos, `preload="none"`) |
|---|---|---|
| `/`, `/ru` | `hero` 1.33 MB | `loop-craft` 175 KB + `loop-majlis` 170 KB |
| `/partners`, `/ru/partners` | `loop-majlis-hero` 1.34 MB | `loop-calm` 126 KB |

Photography is ~1.5 MB across 19 WebPs, served responsively by `next/image`,
and posters + icons ~200 KB. The hero clip is the only asset with
`preload="auto"`; everything else waits for the viewport. The hero's own LCP
is carried by its WebP poster (~80 KB), which paints before a frame decodes,
so the 1.33 MB never sits on the critical path.

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
- `CountUp` is seeded with its **final** value, not zero, then rewound to zero
  in a layout effect before the first client paint. The hero's "15 years of
  community" is the claim the page rests on; it has to survive a crawler, a
  failed hydration or a reader with JS off, none of which should ever be told
  COBA is 0 years old. Verify with
  `grep -o 'Experience[^<]*' .next/server/app/index.html` after a build.
- `prefers-reduced-motion` disables the reveals, the hero drift and the
  filmstrip marquee.

## Known constraint

The grain overlay deliberately avoids `mix-blend-mode`. A blended full-viewport
fixed layer forces the whole page to recomposite every animation frame (it
visibly stalled the renderer against the marquee) and it crushed the contrast of
light type on the ink bands.
