# On Record

> Permanence changes behavior.

**On Record** is an operating system for accountability. This repository is the single source of truth for its philosophy, product design, manufacturing, and business.

The shared instrument ships in editions:

- **[Man on Record](EDITIONS/man-on-record/)** — the 90-day individual edition.
- **[Woman on Record](EDITIONS/woman-on-record/)** — the 90-day individual edition, mechanically identical.
- **[The Common Record](EDITIONS/the-common-record/)** — a couple's shared volume, unlocked only after both partners complete their individual 90-day runs.

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

`v0.3 — Concept`. On Record house established; three editions defined; production spec at v0.2 (90-day, genuine lay-flat, cloth + silver foil). See [`ROADMAP.md`](ROADMAP.md).
