# How this repository works

This repo is the single source of truth for The Record and the Man on Record platform. It follows the same discipline as the product: every meaningful change is intentional, documented, and permanent.

## Where things live
See the folder map in [README.md](README.md). In short: `BRAND/` (why), `CONTENT/` (the words of the book), `RECORD/` (production files), `PRINT/` (specs + vendors), `PACKAGING/`, `OPA/` (go-to-market), `BUSINESS/`, and `FUTURE-TOOLS/`.

## Making changes
- **Small edits** (typos, notes, spec updates): commit directly to `main` with a clear message.
- **Meaningful changes** (content rewrites, spec decisions, new sections): open a pull request so the reasoning is recorded in one place.
- **Decisions** that should be permanent: add a line to [decision-log.md](decision-log.md) and, if useful, open a Decision issue.

## Commit messages
Short, imperative, specific. "Lock daily page fields" — not "update files." The history should read like a record of what was decided.

## Releases
Milestones map to tags (see [ROADMAP.md](ROADMAP.md)): `v0.1` Concept, `v0.5` Prototype, `v1.0` Seed Edition, `v1.x` Preorder, `v2.0` Production. Tag a release when a phase's exit criteria are met.

## Large binary assets (important)
Before committing any `.indd`, PDF, or font file, enable Git LFS so the repo stays fast:

```
git lfs install
```

The tracking rules are already active in [.gitattributes](.gitattributes). Commit `.gitattributes` first, then add the binaries. Doing this *after* large files are committed is a headache to undo.

## Print files
Never let a printer or designer "helpfully" alter the locked pages. The file-prep checklist in [RECORD/README.md](RECORD/README.md) is the gate before anything goes to print.
