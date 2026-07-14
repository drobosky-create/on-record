# Decision Log

A permanent record of the decisions behind On Record. Newest first.

## v0.3.6 — Go-to-market and production plan adopted

- **Staged path to market:** proofs → ~50-unit seed run → ~250-unit numbered preorder → ~1,000-unit production, each behind an explicit gate. One-page journey at `OPA/journey.md`; detail in `OPA/marketing-plan.md` and `BUSINESS/production-plan.md`.
- **Retail band set at $95–$125, working anchor $115.** Full price everywhere; no discounts, no marketplaces — scarcity must be real.
- **Launch marketing capped at $5,000 through preorder.** Seed-partner-led, founder-led organic, one photography/film investment. The object is the campaign.
- **Vendor avenues documented by stage** (`PRINT/production-avenues.md`): Bookmobile lead candidate for the seed run; Hemlock vs. overseas offset head-to-head at preorder before committing production.
- **Blocker recorded:** the pen spec (`PACKAGING/Pen/pen-spec.md`) must lock before the Stage 0 write test — the write test uses the shipped pen.

## v0.3.5 — Web/marketing design system

- **Brand-core design system added** at `WEBSITE/design-system/` — the digital counterpart to the object's austerity (flat, hairline rules, sharp corners, oxblood only for action).
- Deliverables: a live self-contained `style-guide.html`, canonical `tokens.css` (CSS variables), and a paste-ready `ghl-brand-kit.md` for GoHighLevel (Brand Board values, IBM Plex fonts, and a Custom CSS block that restyles GHL components + suppresses its default shadows/rounded corners).
- Nice tie-in: web form fields render as the book's ruled write-in line (hairline underline, oxblood on focus). No GHL connector exists, so setup is paste-ready, applied by hand.
- Figma library (Claude Design) to mirror these tokens is the next step. `tokens.css` is source of truth if anything diverges.

## v0.3.4 — Design package received from Claude Design

- **First visual design deliverables added** at `RECORD/Design/` — standalone HTML: Cover Spec, Editions, Interior Specs (layouts at 100%), and an interactive page-through model. Reflect the current spec (three editions, black/oxblood/dark-maroon palette, silver foil).
- Read-only exports; the written spec (`RECORD/design-brief.md`, `CONTENT/`) remains source of truth if they diverge.

## v0.3.3 — Close-Out added to every edition

- **Every book now ends with a Close-Out page** that formally closes the record: a final accounting with days kept, a binary YES/NO verdict on whether the standard held, what changed, and what carries forward. Declares the record closed — it cannot be reopened, erased, or restarted.
- **Individual editions:** shared Close-Out at Day 90 (in `CONTENT/close-out.md`; identical for Man and Woman). In a paired set, the sealed reveal signature is bound after it.
- **The Common Record:** co-signed Close-Out at Day 45 (two signatures).
- Reinforces the finite, permanent, non-refillable premise — and the buy-the-next-edition cadence.

## v0.3.2 — The Common Record structure

- **Length set to 45 days** (shorter, more intense than the 90-day individual runs; a couple can buy another).
- **Co-Initiation added**, replacing the solo Initiation: three acts done together before Day 1 — *The Exchange* (read each other's records), *Acknowledgment*, *The Joint Declaration*.
- **Acknowledgment page added** (the "trace"): two mirrored panels where each partner writes, in their own hand, what they read in the other's record, what they will carry, and what they now ask — co-signed. Makes the witnessed moment part of the permanent object.
- Daily/Weekly unchanged in form (two signatures, never one); Day count now reads "/ 45".

## v0.3.1 — Cover colourway system

- **Editions are distinguished by a deliberate colour palette, not decoration.** Man on Record = **black** (~#111111); Woman on Record = **oxblood** (~#4A0E10); The Common Record = **dark maroon** (~#2E1214).
- **Logic:** black and oxblood are a complementary pair; the shared book's dark maroon is the optical blend of the two — it visibly belongs to both.
- **Why oxblood (not white/pastel) for Woman:** severe, corporeal, a classic ledger buckram — deliberately the opposite of a soft/gendered "women's" palette. Rejected pure white (durability, low silver-foil contrast, bridal read).
- **Finish unchanged:** silver foil wordmark on cloth; no matte lamination. Hex values approximate — confirm against physical cloth swatches; draw-down test silver on each colour.

## v0.3 — On Record house + editions

- **House renamed to "On Record."** Neutral parent so the editions are peers. "Man on Record" is no longer the house — it is one edition. (Repo slug may follow; GitHub redirects old URLs.)
- **Second individual edition: Woman on Record.** Mechanically identical to Man on Record — same paper, type, trim, binding, and page copy. Differentiated only by wordmark (and, optionally, a single restrained cloth colourway). Not softened, not recoloured, not re-voiced.
- **Third artifact: The Common Record.** A couple's shared volume, sold as a paired set, unlocked only after both partners complete their individual 90-day runs. Co-signed pages (two signature lines throughout).
- **Reveal is a sealed physical mechanic.** The final signature of each individual volume is bound-in but sealed ("DO NOT OPEN UNTIL DAY 90"); breaking it instructs the exchange. Irreversible by design.
- **Consent model: surprise the ritual, not the obligation.** Paired-set volumes carry one added Identity Standard line ("this record may one day be witnessed…") so the 90 days stay honest; timing/form of the reveal remain a surprise; exchange is voluntary and mutual at the moment.
- **Failure paths designed:** if only one finishes, The Common Record never unlocks and the other's record stays private; no punishment.
- **Repo architecture:** shared spec stays at top level (must not diverge); edition-specific differences live under `EDITIONS/`.

## v0.2 — Concept, revised for production reality

- **Edition length set to 90 days.** A defined arc the holder completes and keeps, then buys the next edition. Drives trim, bulk, and cost.
- **Run restructured:** 2–3 hand-bound proofs → ~50-unit seed run. A true 12-unit sewn run is uneconomical at edition binderies; the earlier "12 units" target is retired.
- **Opening behavior is the hard requirement: genuine lay-flat.** Preferred binding is section-sewn with a lay-flat-capable spine; layflat PUR is the fallback if sewing can't open flat. Spiral/disc/ring still banned.
- **Cover moved to cloth (buckram) or heavy uncoated/duplexed board; no matte film lamination** (it scuffs — wrong for permanence).
- **Cover title specified as silver foil stamp** (optionally a registered foil-emboss) — replacing the ambiguous "embossed silver."
- **One typeface chosen: IBM Plex Sans** (administrative/document register), Inter as print-licensing fallback — replacing the mixed candidate list.
- **Instrument fixes:** KEPT/BROKEN is the one permitted marked field with a stated rule ("any single break = BROKEN"); the daily record block is four lines; Day count reads "/ 90."
- **Proofing added:** blank bound dummy → pen/paper write test → foil draw-down → full physical proof, before any run.
- **Full designer/bindery brief added** at `RECORD/design-brief.md`.
- Open decisions: exact trim (recommend ~A5 / 5×7.75"), final seed-run quantity (confirm ~50).

## v0.1 — Concept

- **Repository named `man-on-record`.** Named after the platform/company, not the book, so it can hold The Record plus future tools. Single monorepo for now.
- **Design tool: Adobe InDesign only.** Enforces print discipline. Canva, Figma, Google Docs, and Word are rejected. See [`BUSINESS/design-environment.md`](BUSINESS/design-environment.md).
- **Cover: matte black/charcoal with embossed silver title.** _(Superseded in v0.2: silver foil stamp on cloth/board, no matte lamination.)_
- **Binding: Smyth-sewn / thread-sewn, lay-flat, non-refillable.** _(Refined in v0.2: genuine lay-flat is the priority; sewn preferred, PUR fallback.)_
- **Paper: 100–120 GSM uncoated, off-white/bone.** No pre-printed dot grid or ruling.
- **Vendor type: short-run bookbinder that serves publishers.** Not a notebook/planner brand or POD service. Hemlock under evaluation.
- **Initial run: 12 units.** _(Superseded in v0.2.)_
- **Positioning: administrative and serious; delight is poison.**
