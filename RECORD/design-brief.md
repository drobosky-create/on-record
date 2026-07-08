# The Record — Design Brief

**For:** book/production designer + bindery (fine-press / short-run)
**Project:** The Record — Seed Edition (Man on Record)
**Version:** v0.2 (Concept, revised for production reality)
**Repository:** github.com/Robo-Meritage/man-on-record

> Changes in v0.2: set to a **90-day edition**; run structured as **hand-bound proofs → ~50-unit seed run**; binding language reconciled around **genuine lay-flat**; cover material and **silver foil** specified precisely; **single typeface** chosen; KEPT/BROKEN logic and record space fixed; blank-dummy proof step added. Open decisions are flagged in §9.

---

## 1. What this is

The Record is a permanent, finite, non-refillable accountability book. It is **not** a planner, journal, or notebook. It records what the holder did. It does not remind, encourage, or forgive.

Governing principle: **permanence changes behavior.** Every decision serves seriousness, restraint, and permanence.

> The object carries the entire brand's credibility. If it does not communicate seriousness the moment it is opened and laid flat, the design has failed.

**Register:** administrative, severe, quiet. **Delight is poison here.** No decorative interest, no variation, no "moments." Repetition and systematization are the point.

---

## 2. Edition & extent (decided)

| Attribute | Spec |
|---|---|
| Edition length | **90 days** — a defined arc the holder completes and keeps, then buys the next edition. |
| Interior sequence | Front matter (Identity Standard + Non-Negotiable Standards) → Initiation Days 1–7 → 90 Daily Pages → a Weekly Escalation Page after every 7th Daily Page (~13). |
| Approx. leaf count | Designer to calculate from trim + layout; expect a slim, serious volume, not a brick. |

---

## 3. The object (physical specification)

| Attribute | Spec |
|---|---|
| **Opening behavior** | **Genuine lay-flat is the hard requirement** — pages stay open, flat to the gutter, hands-free, so the holder can write without fighting the book. |
| **Binding route** | Preferred: **section-sewn with a lay-flat-capable spine** (hollow-back / drawn-on or exposed-spine construction that opens flat). Acceptable if sewing cannot deliver true flat opening at this trim: a **layflat (PUR) binding**. Sewing is preferred for permanence; lay-flat wins if the two conflict. Bindery to advise. |
| **Not permitted** | Spiral, disc, ring, or any refillable/removable-page binding. The book must be permanent and closed-extent. |
| Interior paper | 100–120 GSM uncoated, off-white / bone, with good ink holdout (must be write-tested — see §7). No pre-printed dot grid or ruling. |
| Cover construction | **Cloth (buckram) case** preferred, or a heavy uncoated / duplexed board. **No matte film lamination** (it scuffs and fingerprints — wrong for an object about permanence). |
| Cover colour | Black or charcoal. No gloss, no imagery. |
| Cover wordmark | Reads **"Man on Record"** — the brand/house name, not the product name ("The Record"). This is the only text on the cover. |
| Cover title finish | **Silver foil stamp** on the wordmark only, optionally combined with a blind emboss (registered foil-emboss). No subtitle, no other foil, no decorative deboss. |
| Trim size | *Open decision — see §9. Recommendation: ~140 × 210 mm (A5-ish) or 5 × 7.75 in; hand-held, upright book proportion, never a wide planner.* |
| Proof batch | 2–3 hand-bound proofs |
| Seed run | ~50 units (see §9) |

---

## 4. Typography (decided)

**One typeface: IBM Plex Sans** (a neutral grotesque with an administrative, document pedigree — it reads as *form*, not literature). If licensing/embedding for print is a problem, fall back to **Inter**. No second face, no display face, no pairing.

- Paragraph styles only — **no local overrides**.
- Establish baselines, leading, margins, and gutter before laying in content.
- **Generous inner margin** — even with lay-flat binding, leave room to write near the gutter.
- Confirm the font licence permits **print embedding**.

---

## 5. File construction (InDesign)

Build **one** `.indd` file. Sections in order:

1. Identity Standard (fixed page)
2. Non-Negotiable Standards (fixed page)
3. Initiation Sequence — Days 1–7 (fixed pages)
4. Daily Page (master, ×90)
5. Weekly Escalation Page (master, after every 7th daily)
6. Carryover / Index (only if added later)

Rules:

- Master pages drive Daily and Weekly — every instance identical.
- Paragraph styles only; no freeform page-by-page layout; no local overrides.
- **The only numbering in the book is the Day count** (and the Week count on weekly pages). No folios/page numbers.
- Fields are ruled lines, **with one deliberate exception**: the two KEPT / BROKEN marks on the Daily Page (see §5.4).
- No decorative elements of any kind. Do not add anything not specified here.

---

## 6. Page content (set exactly as written)

### 6.1 Identity Standard  *(front matter, no page number)*

> **IDENTITY STANDARD**
>
> This book is a record. It is not a planner, a journal, or a companion. It does not remind you. It does not encourage you. It does not forgive you. It records what you did.
>
> You are the only author. What is written here is permanent. It cannot be erased, refilled, or restarted. Each day is counted. Each day is signed.
>
> I, ______________________________, open this record on ____ / ____ / ______.
>
> I hold myself to the standard recorded on the following pages. I understand that this record keeps no account but the true one.
>
> Signed ______________________________   Edition No. ________

---

### 6.2 Non-Negotiable Standards  *(no page number)*

> **NON-NEGOTIABLE STANDARDS**
>
> These are the standards you will not negotiate. Write them once, in permanent ink. They do not change without consequence, and any change is recorded — never erased.
>
> You will answer to these every day. The Daily Page asks only whether they held. **If any one broke, the day is recorded as broken.**
>
> 1. ______________________________________________
> 2. ______________________________________________
> 3. ______________________________________________
> 4. ______________________________________________
> 5. ______________________________________________
>
> Fewer is stronger. Do not fill every line to fill it.

Layout: five ruled lines, generously spaced. No marks here — these are declarations.

---

### 6.3 Initiation Sequence — Days 1–7  *(fixed pages, one act per page/half-spread)*

Header format: `INITIATION — DAY N · WORD`. One ruled response line (or short block) per act. Never crowd two acts together.

> **INITIATION — DAY 1 · DECLARE**
> Write, in one sentence, the person you are choosing to become. Not a goal. A person.
>
> **INITIATION — DAY 2 · STANDARD**
> Restate your first Non-Negotiable Standard in your own words. Why this one, first.
>
> **INITIATION — DAY 3 · COST**
> Name the cost of failing this standard — to you, and to someone else. Be specific.
>
> **INITIATION — DAY 4 · WITNESS**
> Name who is watching. If no one, write that. A record witnessed only by its author still counts.
>
> **INITIATION — DAY 5 · BASELINE**
> Record where you actually stand today. No improvement. No excuse. The true starting line.
>
> **INITIATION — DAY 6 · OBLIGATION**
> Name the single obligation you will carry into Day 1 of the record. One.
>
> **INITIATION — DAY 7 · SIGN**
> Read Days 1–6. If they are true, sign. The daily record begins tomorrow.
> Signed ______________________________   ____ / ____ / ______

---

### 6.4 Daily Page — master  *(×90; Day count is the only numbering)*

Fields, in order:

> **DAY ________ / 90**            ____ / ____ / ______
>
> **Yesterday, the standards held:**   KEPT ▢    BROKEN ▢
> *(any one broken = BROKEN. If broken, one line — which, and why. No more.)*
> ______________________________________________
>
> **Today's single obligation:**
> ______________________________________________
>
> **The record** *(what was actually done):*
> ______________________________________________
> ______________________________________________
> ______________________________________________
> ______________________________________________
>
> **Signed** ______________   *(close the day — no day is left unsigned)*

Rules: KEPT/BROKEN is the one permitted marked field — two small boxes, binary, no scale, no partial credit; any single break makes the day BROKEN. One obligation — the form must physically refuse a list. The record block is four lines. Every day is signed; the signature line is the point of the page.

---

### 6.5 Weekly Escalation Page — master  *(after every 7th daily; Week count only)*

Fields, in order:

> **WEEK ________**            Days ______ to ______
>
> **Days kept:** ______ / 7
>
> **The pattern** *(one line — where you held, where you broke):*
> ______________________________________________
>
> **The escalation** *(what you raise next week — a standard made harder, or a new one added):*
> ______________________________________________
>
> **Signed** ______________

Rules: the holder transfers "days kept" by hand — the book does not compute it. Escalation is required, not optional: a standard met becomes the floor, not the ceiling.

---

## 7. Proofing & material tests (before any run)

1. **Blank bound dummy first** — exact stock, exact binding, no printing. Confirms true lay-flat behaviour, paper feel, bulk, spine, and cover finish for almost nothing.
2. **Write test** — the shipped pen on the chosen stock: check feathering, show-through, and dry time. Adjust paper if it fails.
3. **Foil/emboss draw-down** — silver foil (and any emboss) on the actual cover material, viewed in normal light.
4. **Full physical proof** of the printed, bound book before the seed run.

---

## 8. File-prep checklist (before sending to printer)

- [ ] Daily page locked (fields exactly as specified)
- [ ] Initiation pages (Days 1–7) included
- [ ] Identity Standard + Non-Negotiable Standards included
- [ ] 90 Daily Pages + weekly pages placed in correct order
- [ ] No numbering except Day and Week counts
- [ ] No decorative elements anywhere
- [ ] Single typeface, paragraph styles only, no local overrides
- [ ] Generous inner margin verified against the bound dummy
- [ ] Fonts packaged & licensed for print embedding; press-ready PDF with bleed/marks per bindery spec

---

## 9. Open decisions (confirm before build)

1. **Exact trim size.** Recommendation: ~140 × 210 mm (A5-ish) or 5 × 7.75 in. Designer to confirm against paper bulk and lay-flat behaviour.
2. **Final seed-run quantity.** Plan is 2–3 hand-bound proofs + ~50-unit sewn/lay-flat seed run. A true 12-unit sewn run is uneconomical at edition binderies (minimums are far higher; hand-binding 12 runs ~$120–300/unit). Confirm the ~50 number, or accept hand-binding cost for a smaller batch.

---

## 10. What NOT to do

- Do not add prompts, fields, icons, ornament, ruling, or "helpful" extras.
- Do not introduce a second typeface or any display face.
- Do not add page numbers/folios beyond the Day and Week counts.
- Do not soften the copy or make it motivational.
- Do not use