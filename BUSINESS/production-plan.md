# Production Run Plan & Costing

_Covers the full journey: proofs → seed run → preorder batch → first production run. Specs of record remain `../PRINT/print-spec.md`, `../PRINT/paper.md`, `../RECORD/Covers/cover-spec.md`. All figures are planning estimates in USD, to be replaced by bound quotes at each gate._

## Unit of record

One kit = book + pen + box.

- **Book:** ~224 pp (front matter + Initiation 1–7 + 90 daily + ~13 weekly + Close-Out), ~140 × 210 mm, 100–120 GSM uncoated off-white, cloth case, silver foil, genuine lay-flat (Smyth-sewn preferred, layflat PUR fallback).
- **Pen:** permanent-ink instrument per `../PACKAGING/Pen/pen-spec.md` (spec TBD — must be locked before the seed run write test, since the write test uses the shipped pen).
- **Box:** rigid setup box per `../PACKAGING/Box/box-spec.md` (matte, dark, restrained).

## Stage plan

| Stage | Tag | Qty | Purpose | Vendor type |
|---|---|---|---|---|
| 0 — Proofs | `v0.5` | 2–3 hand-bound + 1 full proof | Validate object: lay-flat, feel, write test, foil draw-down | Hand binder + candidate bindery |
| 1 — Seed run | `v1.0` | ~50 | Credibility. 12–20 placed with seed partners; remainder sold at full price | Domestic short-run edition bindery (e.g. Hemlock — confirm Smyth-sewn lay-flat) |
| 2 — Preorder batch | `v1.x` | ~250 | Numbered, limited. Proves demand at price before committing production capital | Premium offset (domestic or overseas) with sewn lay-flat |
| 3 — First production | `v2.0` | ~1,000 | Real margin. Split across Man/Woman editions per preorder mix | Same vendor as Stage 2 if quality held |

## Costing (planning estimates)

### Stage 0 — Proofs

| Item | Est. cost |
|---|---|
| 2–3 hand-bound proofs @ $150–300 | $450–900 |
| Blank bound dummy (exact stock + binding) | $100–250 |
| Foil/emboss draw-down on cover cloth | $75–150 |
| Full physical proof from bindery | $150–300 |
| **Stage total** | **$775–1,600** |

### Stage 1 — Seed run (~50 kits)

| Component | Per unit | 50 units |
|---|---|---|
| Book (domestic short-run, cloth + foil + sewn lay-flat) | $45–70 | $2,250–3,500 |
| Box (low-MOQ rigid, foil label) | $6–9 | $300–450 |
| Pen | $4–8 | $200–400 |
| **Kit COGS** | **$55–87** | **$2,750–4,350** |

Industry short-run benchmarks price standard cloth-and-foil casebound near $15/copy at 100 units — that is the commodity tier the spec rejects. Budget at the top of the range; this stage is a credibility investment, not a margin exercise (`pricing.md`).

Seed economics at $115 retail: ~30 units sold = ~$3,450, roughly covering seed COGS. The 20 placed units are the marketing budget's highest-leverage spend.

### Stage 2 — Preorder batch (~250 kits)

| Component | Per unit | 250 units |
|---|---|---|
| Book (premium offset, sewn lay-flat, freight in) | $16–26 | $4,000–6,500 |
| Box (custom rigid, 250 MOQ) | $4–6 | $1,000–1,500 |
| Pen (volume) | $3–5 | $750–1,250 |
| **Kit COGS (landed)** | **$23–37** | **$5,750–9,250** |

| Retail | Revenue (250) | Gross margin/unit (at $30 avg COGS) | Gross margin % |
|---|---|---|---|
| $95 | $23,750 | $65 | 68% |
| $115 | $28,750 | $85 | 74% |
| $125 | $31,250 | $95 | 76% |

Preorder cash is collected before the run is placed — the batch self-funds if ≥ ~85 units preorder at $115 against the worst-case $9,250 COGS.

### Stage 3 — First production run (~1,000 kits)

| Component | Per unit | 1,000 units |
|---|---|---|
| Book (offset at volume, freight in) | $9–15 | $9,000–15,000 |
| Box | $2.50–4 | $2,500–4,000 |
| Pen | $2–3.50 | $2,000–3,500 |
| **Kit COGS (landed)** | **$13.50–22.50** | **$13,500–22,500** |

At $115 retail and $18 avg COGS: **$97/unit gross, ~84% gross margin**; full sell-through = $115,000 revenue, ~$97,000 gross. Deduct per order: payment processing (~3%), DTC pick-pack-ship ($8–12 domestic — charge shipping at checkout to protect margin and positioning).

### Capital required (cumulative, worst case)

| Through stage | Production capital |
|---|---|
| Proofs | ~$1,600 |
| Seed run | ~$6,000 |
| Preorder batch | ~$15,200 (offset by preorder receipts) |
| First production | ~$37,700 (offset by preorder + seed revenue) |

## Process gates (unchanged from `manufacturing.md`)

1. Qualify 1–2 binderies against the print spec — genuine lay-flat is the hard requirement.
2. Blank bound dummy in exact stock + binding.
3. Write test — shipped pen on chosen stock. **Lock the pen spec first.**
4. Foil/emboss draw-down on actual cover cloth.
5. Lock InDesign file; export per file-prep checklist.
6. Approve full physical proof.
7. Hand-bound proofs → seed run → (new gates) preorder batch → production.

**Added gates for Stages 2–3:** re-proof on any vendor or material change; retain one signed-off reference copy from each run; production run does not start until preorder sell-through ≥ 80% or capital is otherwise committed knowingly.

## Timeline (working)

| Window | Milestone |
|---|---|
| Weeks 1–4 | Bindery qualification, dummy, write test, draw-down |
| Weeks 5–8 | File lock, full proof, hand-bound proofs |
| Weeks 9–12 | Seed run produced; seed partners placed |
| Weeks 13–20 | Seed impressions collected; preorder window (4–6 weeks) |
| Weeks 21–30 | Preorder batch produced and shipped |
| Weeks 30+ | First production run per demand |

## Risks

| Risk | Mitigation |
|---|---|
| No bindery delivers true lay-flat at trim | PUR layflat fallback is in spec; test at dummy stage, not proof stage |
| Seed-run cost creep | Cap at $90/kit; above that, cut kit contents (box first), never book quality |
| Overseas offset lead times (Stage 2–3) | 10–14 week allowance; order boxes/pens in parallel, not sequence |
| Demand gate fails at preorder | Production run does not proceed; capital exposure stops at ~$15K |
