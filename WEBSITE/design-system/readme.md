# On Record — Design System

> Permanence changes behavior.

**On Record** is an operating system for accountability, beginning as a printed object: a permanent, finite, non-refillable accountability book. It is not a planner, journal, or notebook — it records what the holder did. It does not remind, encourage, or forgive.

The product ships in three editions, one shared instrument:

- **Man on Record** — 90-day individual edition. Black cloth (#161615 as bound; bindery reference ~#111111).
- **Woman on Record** — 90-day individual edition, mechanically identical. Oxblood cloth (~#4A0E10).
- **The Common Record** — 45-day co-authored couple's volume, unlocked only after both partners complete their individual 90-day runs. Dark maroon cloth (~#2E1214 — black and oxblood bled together). Structural signature: **two signatures, never one.**

Every edition follows one arc: **open** (Identity Standard / Co-Initiation) → **keep** (signed daily + weekly pages) → **close** (a final Close-Out). Covers carry a silver-foil wordmark only.

## Sources

Built from **github.com/drobosky-create/on-record** (explore it for deeper context):

- `WEBSITE/design-system/tokens.css` + `style-guide.html` — the web/marketing token and component system (copied here verbatim).
- `WEBSITE/design-system/ghl-brand-kit.md` — paste-ready GoHighLevel kit; confirms fonts load from Google Fonts.
- `BRAND/` — vision, positioning, voice, identity.
- `RECORD/design-brief.md` + `RECORD/Covers/cover-spec.md` — full production brief; cover palette + silver foil.
- `EDITIONS/*/design-brief.md` — self-contained per-edition briefs.
- `CONTENT/` + `EDITIONS/the-common-record/content.md` — exact in-book page copy.

## CONTENT FUNDAMENTALS

**Voice: direct, declarative, administrative.** The tool states standards; it does not cheer. No hedging, no softening qualifiers, no exclamation-driven encouragement. "Delight is poison here."

- Second person, imperative: *"Write them once, in permanent ink."* / *"Answer plainly."*
- First person only in sworn declarations: *"I hold myself to the standard recorded on the following pages."*
- Short declarative sentences, often fragments used as verdicts: *"Not a goal. A person."* / *"Fewer is stronger."*
- Negative definition is a signature move: *"It does not remind you. It does not encourage you. It does not forgive you. It records what you did."*
- Casing: in-book page titles and field headers are ALL CAPS (`IDENTITY STANDARD`, `DAY ________ / 90`, `KEPT ▢ BROKEN ▢`). Web labels/eyebrows are uppercase mono, tracked. Body copy is sentence case.
- Counters read as ledger entries: `Day 001 / 090`, `WEEK ____`, `Days kept: ____ / 7`.
- **No emoji, ever.** The only permitted marks are the binary checkboxes (▢) — KEPT/BROKEN, YES/NO. No scale, no partial credit.
- Commitments are *recorded*, not suggested. Permanent-tense language: "This record is now closed. It cannot be reopened, erased, or restarted."

## VISUAL FOUNDATIONS

**Register: austere, administrative, severe. Restraint over embellishment.**

- **Color** — Bone `#F1ECE1` is the paper/page. Ink `#141414` is text and dark surfaces. Oxblood `#5C1014` is the *only* action color (CTAs, links, focus); hover deepens to Maroon `#2E1214`. Silver `#A7AAB0` for metallic hairlines and muted labels on dark. The three cover cloths (black / oxblood / dark maroon) double as the brand palette — Man / Woman / Common.
- **Type** — one superfamily: IBM Plex Sans (400/500/600) for everything; IBM Plex Mono (400/500) reserved for labels, counters, "ledger" numerals. No pairing, no display faces. Scale: Display 44/1.05, H1 32/1.1, H2 22/1.2, H3 17/1.3, Body 16/1.6, Small 13, Label 12 mono uppercase tracked .12em. Headings weight 600, letter-spacing −.01em.
- **Spacing** — 4px base scale (4→96). Generous whitespace; let it breathe. Text measure 720px.
- **Corners & borders** — `border-radius: 0`, always. 1px hairline rules everywhere: `#D7CFBE` on bone, `#2A2A2A` on ink.
- **Shadows** — none, ever. Surfaces are flat fills separated by hairlines.
- **Gradients** — forbidden, with ONE exception: the silver-foil wordmark treatment on dark surfaces (`--or-foil`).
- **Backgrounds** — flat bone or flat ink sections. No imagery, no textures, no patterns, no stock photos, no icons-as-decoration.
- **Buttons** — sharp, uppercase, tracked .1em, 600, 13px, 14px/24px padding. Primary = oxblood fill (hover → maroon); Ghost = ink outline (hover inverts to ink fill / bone text). `transition: none` — state changes are instant, not eased.
- **Inputs** — no boxes, no fills: a single hairline underline (the book's ruled write-in line). Mono uppercase label above. Focus turns the rule oxblood.
- **Cards** — flat `#E7E0D2` (paper) or `#141414` (ink) with 1px hairline border, 24px padding. No rounding, no shadow.
- **Animation** — effectively none. `transition: none` on buttons. Nothing bounces, fades, or delights.
- **Iconography** — none. See ICONOGRAPHY below.
- **Layout** — centered measure (max 960px shells, 720px text), hairline `<hr>` section rules, mono section eyebrows (`01 · Colour`). Dark ink sections for the wordmark plate.

## ICONOGRAPHY

**The brand has no icon system — deliberately.** No icon font, no SVG set, no emoji. The style guide's "Don't" list includes "no stock imagery or icons-as-decoration." The only glyph-like marks are:

- The ballot box **▢** (U+25A2) for the binary KEPT/BROKEN and YES/NO fields.
- The middle dot **·** as a mono-label separator (`Day 001 / 090`, `01 · Colour`).
- Ruled underscores as write-in lines.

Do not introduce icons when designing for this brand. Use uppercase mono labels, hairlines, and whitespace instead.

**Logo:** there is no drawn logomark. The wordmark is the brand name set in IBM Plex Sans 600, letter-spacing .02em — solid ink on light, silver-foil gradient on dark. Render it in type (see the `Wordmark` component); never draw a mark.

## Templates

Imported from the shared "Man on Record — Design Package" project (https://claude.ai/design/p/eb509e65-8df0-4b28-b00b-f46d149d8d3a):

- `templates/record-interactive-model/` — interactive page-through model of the book (cover + all interior page types; `BookPage.dc.html` renders each page)
- `templates/record-cover-spec/` — cover production spec
- `templates/record-editions/` — edition lineup
- `templates/record-interior-specs/` — interior production spec

## Index

- `styles.css` — global entry (imports everything below).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css`.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `components/` — the reusable primitives, exactly the set the source style guide defines:
  - `actions/Button` — primary (oxblood) + ghost (ink outline).
  - `forms/Field` — ruled-underline input with mono label.
  - `surfaces/Card` — flat paper/ink card, hairline border.
  - `brand/Label` — uppercase mono label/counter. `brand/Wordmark` — foil/plain wordmark.
- `ui_kits/website/` — marketing/landing page recreation (GHL-register web surface).
- `ui_kits/book-interior/` — the book's interior pages at true copy: Identity Standard, Non-Negotiable Standards, Initiation, Daily, Weekly, Close-Out (+ Common Record variants).
- `SKILL.md` — agent skill entry point.

**Intentional additions:** none. The component inventory is exactly the style guide's.

**Assets note:** the repo contains no image/logo binaries; everything here is set in type per the brand's own rules.
