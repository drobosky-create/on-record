# On Record

> Permanence changes behavior.

**On Record** is an operating system for accountability. This repository is the single source of truth for its philosophy, product design, manufacturing, and business.

The shared instrument ships in editions:

- **[Man on Record](EDITIONS/man-on-record/)** — the 90-day individual edition. Black cloth.
- **[Woman on Record](EDITIONS/woman-on-record/)** — the 90-day individual edition, mechanically identical. Oxblood cloth.
- **[The Common Record](EDITIONS/the-common-record/)** — a 45-day co-authored couple's volume, unlocked only after both partners complete their individual 90-day runs. Dark maroon cloth (black + oxblood, bled together).

Every edition follows one arc: **open** (Identity Standard, or the couple's Co-Initiation) → **keep** (co-/signed daily and weekly pages) → **close** (a final Close-Out that formally shuts the record). Covers carry a silver-foil wordmark only; the colour palette is a deliberate system, not decoration.

The Record was Version 1. The house is the platform.

## How this repo is organized

Everything **shared across editions** lives at the top level and must never diverge:

| Folder | Contents |
|---|---|
| [`BRAND/`](BRAND/) | Vision, positioning, voice, identity standards (house-level, edition-neutral) |
| [`CONTENT/`](CONTENT/) | The shared page copy — identical in every individual edition |
| [`RECORD/`](RECORD/) | Shared production assets + the [design brief](RECORD/design-brief.md) |
| [`PRINT/`](PRINT/) | Shared print specification, paper, vendors |
| [`BUSINESS/`](BUSINESS/), [`OPA/`](OPA/), [`PACKAGING/`](PACKAGING/) | Business, go-to-market, packaging |
| [`FUTURE-TOOLS/`](FUTURE-TOOLS/), [`WEBSITE/`](WEBSITE/), [`APP/`](APP/) | Future surfaces |

**Edition-specific differences** live under [`EDITIONS/`](EDITIONS/) — only the wordmark, cover, and (for The Common Record) the co-signed pages and reveal mechanic. Nothing that should stay common belongs there.

## Working principle

Every meaningful change is intentional, documented, and permanent — the same discipline the product demands. See [`decision-log.md`](decision-log.md) and [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Status

`v0.3.3 — Concept`. On Record house established; three editions defined with cover palette (black / oxblood / dark maroon); Common Record set to 45 days with co-initiation; Close-Out added to every edition. Production spec at v0.2 (90-day individual runs, genuine lay-flat, cloth + silver foil). See [`decision-log.md`](decision-log.md) and [`ROADMAP.md`](ROADMAP.md).
