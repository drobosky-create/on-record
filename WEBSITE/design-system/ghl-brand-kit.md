# On Record — GoHighLevel Brand Kit

Paste-ready values and CSS to make GHL funnels, websites, and forms match the On Record design system. GHL has no import; you set a few values in the UI and paste one CSS block per funnel/site.

## 1. Brand Board (Settings → Brand Boards)
Create a board named **On Record** and set:

| Slot | Value | Hex |
|---|---|---|
| Primary | Oxblood | `#5C1014` |
| Secondary | Ink | `#141414` |
| Accent / hover | Maroon | `#2E1214` |
| Background | Bone | `#F1ECE1` |
| Text | Ink | `#141414` |
| Muted text | Muted | `#6E685F` |
| Neutral / lines | Hairline | `#D7CFBE` |

Full palette (for pickers): Ink `#141414` · Bone `#F1ECE1` · Oxblood `#5C1014` · Maroon `#2E1214` · Silver `#A7AAB0` · Paper-2 `#E7E0D2` · Hairline `#D7CFBE` · Muted `#6E685F`.

## 2. Fonts
- **Headings & body:** IBM Plex Sans (weights 400, 500, 600)
- **Labels & counters:** IBM Plex Mono (400, 500)

Both are Google Fonts and selectable directly in GHL's font pickers (Brand Board → Typography → choose "IBM Plex Sans"). To guarantee loading everywhere, also add this to **Funnel/Website → Settings → Head Tracking Code**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

## 3. Custom CSS (Funnel/Website → Settings → Custom CSS)
Paste this once per funnel/site. It sets the tokens and the core component styles (buttons, ruled fields, wordmark). Apply the classes in the builder where noted.

```css
:root{
  --or-ink:#141414;--or-bone:#F1ECE1;--or-paper-2:#E7E0D2;--or-oxblood:#5C1014;
  --or-maroon:#2E1214;--or-silver:#A7AAB0;--or-hairline:#D7CFBE;--or-muted:#6E685F;
  --or-sans:"IBM Plex Sans",system-ui,sans-serif;--or-mono:"IBM Plex Mono",monospace;
}
body,.hl_page-preview{background:var(--or-bone);color:var(--or-ink);font-family:var(--or-sans)}
h1,h2,h3,h4{font-family:var(--or-sans);font-weight:600;letter-spacing:-.01em}
a{color:var(--or-oxblood)}

/* Buttons — add class "or-btn" (primary) or "or-btn or-ghost" in the builder */
.or-btn{background:var(--or-oxblood)!important;color:var(--or-bone)!important;border:1px solid var(--or-oxblood)!important;border-radius:0!important;
  text-transform:uppercase;letter-spacing:.1em;font-weight:600;font-size:13px;padding:14px 24px!important;box-shadow:none!important}
.or-btn:hover{background:var(--or-maroon)!important;border-color:var(--or-maroon)!important}
.or-ghost{background:transparent!important;color:var(--or-ink)!important;border-color:var(--or-ink)!important}

/* Form fields — ruled underline, like the book */
.or-form input,.or-form textarea{border:0!important;border-bottom:1px solid var(--or-ink)!important;border-radius:0!important;
  background:transparent!important;box-shadow:none!important;padding:8px 0!important}
.or-form input:focus,.or-form textarea:focus{border-bottom-color:var(--or-oxblood)!important}
.or-form label{font-family:var(--or-mono);text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:var(--or-muted)}

/* Labels / counters */
.or-label{font-family:var(--or-mono);text-transform:uppercase;letter-spacing:.12em;font-size:12px;color:var(--or-muted)}

/* Kill the "delight": no shadows, sharp corners globally */
.hl_page-preview *{box-shadow:none!important;border-radius:0!important}

/* Wordmark foil on dark blocks — add class "or-foil" to a heading on an ink section */
.or-foil{background:linear-gradient(100deg,#8d9096,#e9ebee 22%,#a7aab0 48%,#f4f5f7 70%,#9a9da3);
  -webkit-background-clip:text;background-clip:text;color:transparent}
```

## 4. How to apply in the builder
- **Buttons:** select the button element → Advanced → add CSS class `or-btn` (or `or-btn or-ghost`).
- **Forms:** wrap the form section, add class `or-form` to it.
- **Section backgrounds:** dark sections = Ink `#141414`; page = Bone `#F1ECE1`.
- **Wordmark:** on an Ink section, add a heading with the text "On Record" and class `or-foil`.
- **Labels/eyebrows:** class `or-label`.

## 5. Notes
- The global `border-radius:0` / `box-shadow:none` rule enforces the austere look across GHL's default components. If a specific element needs an exception, scope a more specific selector.
- Keep imagery out; use whitespace and hairline rules. Oxblood only where action matters.
- Source of truth for values: [`tokens.css`](tokens.css) and [`style-guide.html`](style-guide.html).
