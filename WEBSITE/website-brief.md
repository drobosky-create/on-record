# On Record — Website Design Brief

**For:** Claude Design
**Deliverable:** the marketing / pre-order landing page for the On Record house
**Direction (chosen):** "The Object + The Ledger" — lead with the physical book, animate the counting mechanic
**Source of truth:** `github.com/drobosky-create/on-record` — design system at `WEBSITE/design-system/`, brand kit at `WEBSITE/design-system/ghl-brand-kit.md`, pricing at `BUSINESS/pricing.md`
**Working prototype:** `on-record-landing.html` (self-contained; this brief describes the intended finished version, not a pixel spec)

---

## 1. What On Record is

A permanent, finite, non-refillable **accountability book**. Not a planner, journal, or companion. It records what the holder did — ninety days, counted and signed in their own hand, then kept. Governing principle: **permanence changes behavior.**

Register: administrative, severe, quiet. **Delight is poison.** No stock photography of smiling people, no soft gradients, no rounded "friendly" UI. The page should feel like a serious instrument, not a wellness app.

## 2. The problem this direction solves

The first draft was austere but **flat and static** — all type on flat color, no product, no focal point, every section the same rhythm. This direction fixes that with two anchors:

1. **The Object** — a real, beautiful rendering/photograph of the cloth-and-silver-foil book gives the page a face and communicates premium craft instantly.
2. **The Ledger** — the daily-page mechanic (the reckoning) is the emotional core; surfacing it, with a subtle live day-counter, gives the page a pulse without betraying the severe tone.

## 3. Design system (non-negotiable)

**Palette**
| Role | Name | Hex |
|---|---|---|
| Primary / action | Oxblood | `#5C1014` |
| Hover | Maroon | `#2E1214` |
| Ink / dark surface + text | Ink | `#141414` |
| Page background | Bone | `#F1ECE1` |
| Secondary paper | Paper-2 | `#E7E0D2` |
| Muted text | Muted | `#6E685F` |
| Hairline rules | Hairline | `#D7CFBE` |
| Foil / on-dark accent | Silver | `#A7AAB0` |

**Type**
- Headings + body: **IBM Plex Sans** (400 / 500 / 600)
- Labels, counters, annotations: **IBM Plex Mono** (400 / 500), uppercase, wide tracking (~.14–.2em)

**Rules**
- `border-radius: 0` everywhere. **No shadows** except the single dramatic drop-shadow under the hero book render.
- Hairline rules (1px) separate sections — not cards with borders.
- The **only** gradient permitted is the silver-foil treatment on the wordmark (a metallic sheen). Nothing else.
- Oxblood appears **only** where action matters (buttons, the filled KEPT box, one accent mark). It is a scalpel, not a paintbrush.

## 4. Page structure (top to bottom)

1. **Top bar** — mono wordmark "ON RECORD" left; "SEED EDITION · NUMBERED" right. Hairline underneath.

2. **Hero (Ink, near-full-height, two columns)**
   - Left: the **book** on a dark stage — cloth cover, silver-foil "ON RECORD" wordmark, sewn page edge visible, angled with one deep shadow. *This is the single most important asset — see §6.*
   - Right: a large **mono day-counter** `01 / 90` (animated — see §5), headline "Ninety days. Each one counted. Each one signed.", the line "Permanence changes behavior.", a one-sentence sub, then primary **Reserve your edition** (oxblood) + ghost **The editions**.

3. **Spec strip (Ink)** — mono row: Cloth · Silver foil · Sewn to lie flat · Fixed / non-refillable.

4. **The daily page (Bone, two columns)** — copy left explaining the daily reckoning; right, a faithful render of the **daily page** itself: `DAY 01 / 90`, `KEPT ▣ / BROKEN ▢` (Kept filled oxblood), the single-obligation line, four record lines, and a **signature line** with "No day is left unsigned."

5. **The principle (Bone, hairline top+bottom)** — one oversized statement: "You are the only author. What is written here cannot be erased, refilled, or restarted. The book keeps no account but the true one."

6. **The editions (Bone)** — three volumes as a hairline grid, each topped by its cloth swatch: **Man on Record** (black), **Woman on Record** (oxblood), **The Common Record** (dark maroon, 45-day couple's volume).

7. **The object (Bone, hairline)** — spec as a two-column mono definition list: Binding, Cover, Paper, Type, Extent, Finish.

8. **Reserve (Ink)** — two tiers: **Single $95 / numbered volume**, **Paired set $245 / two volumes + Common Record**. Note that checkout wires to Stripe once configured.

9. **Footer (Bone, hairline)** — wordmark + "Permanence changes behavior."

## 5. Motion (restrained)

- **Day counter** in the hero ticks `01 → 90 → 01` (~0.9s cadence in the prototype; Claude Design should tune — consider a slower, weightier tick, or a one-time count-up on load then hold). Motion should feel like a mechanism advancing, not an animation showing off.
- Optional: hairline rules draw in on scroll; the KEPT box "stamps" oxblood once when the daily-page section enters view. Nothing bouncy, nothing eased-in-out-cute. Linear or sharp.
- Respect `prefers-reduced-motion` — freeze the counter at `01 / 90`.

## 6. The hero book — the asset to elevate

The prototype fakes the book in CSS. **This is where real craft pays off.** Ideal finished version:
- A true **product photograph or high-fidelity 3D render** of the closed book: black buckram cloth, silver-foil "ON RECORD" wordmark, visible sewn signatures at the page edge, one honest hard light and a deep shadow on near-black.
- Alternately a short, silent loop: the book opening to a blank daily page and lying flat (proves the lay-flat binding — a genuine product differentiator).
- Keep it on Ink; let the silver foil be the only bright thing in frame.

## 7. Responsive

- Hero collapses to single column (book stacked above copy) under ~820px.
- Editions grid and reserve tiers stack to one column on mobile.
- Counter scales down but stays the dominant element on the right/first fold.

## 8. Voice / copy notes

- Short, declarative, administrative. Never motivational. "It records what you did." not "Achieve your goals!"
- Mono for anything that behaves like a label, stamp, or count. Sans for statements.
- Sentence case in prose; the wordmark and mono labels are uppercase.

## 9. Out of scope / hand-off notes

- Checkout: the Reserve buttons need a **Stripe product + checkout** configured in GoHighLevel (owner's task). Design the buttons; wiring happens later.
- Build target: the page currently lives as a **GHL Custom Code element** on the On Record website (sub-account). Claude Design can design freely; final delivery is HTML/CSS (+ minimal JS for the counter) that drops into that element. Fonts + tokens are in `ghl-brand-kit.md`.
- Keep everything reconcilable with the repo. If a visual choice conflicts with the written spec, the written spec / `tokens.css` wins.
