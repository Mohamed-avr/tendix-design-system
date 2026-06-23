# Tendix Design System — Developer Guide

Tokens, React components and full-screen UI kits for **Tendix**, the role-based
university attendance platform (University of Bejaïa). This guide is for
developers consuming the system in an app or prototype.

> **Live docs:** the deployed `index.html` is an interactive version of this guide
> with a live component playground and token reference.

---

## 1. Install — two files

The whole system ships as **one stylesheet** and **one pre-built bundle**. No build
step, no package manager required.

```html
<!-- 1. Tokens + fonts + base styles -->
<link rel="stylesheet" href="/styles.css" />

<!-- 2. React 18 (peer), then the component bundle -->
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="/_ds_bundle.js"></script>
```

`styles.css` is an `@import` manifest only — it pulls in every token file and the
`@font-face` declarations. Link this one file and you have the full token layer.

## 2. Use components

Every component is exposed on a single global namespace:

```js
const { Button, Card, StatusBadge, Logo, Icon } = window.DesignSystem_83ace9;
```

```jsx
function ClassPanel() {
  return (
    <Card>
      <Logo role="student" />
      <StatusBadge status="attended" />
      <Button color="accent" endIcon={<Icon name="MapPin" weight="fill" />}>
        Find the class
      </Button>
    </Card>
  );
}
```

> The namespace `DesignSystem_83ace9` is generated. Run `check_design_system` (in the
> design-system project) or open the deployed docs if you need to confirm it.

## 3. Use tokens in your own CSS

All design decisions are CSS custom properties under the `--tx-*` namespace:

```css
.my-panel {
  background: var(--tx-surface);
  color: var(--tx-text-strong);
  border: 1px solid var(--tx-card-stroke);
  border-radius: var(--tx-radius-2xl);   /* 24px — the card radius */
  box-shadow: var(--tx-shadow-card);
}
```

### Role theming
Tendix is role-based. Set `data-role` on any container to retheme `--tx-accent`
(and its hover/soft variants) for everything inside:

```html
<div data-role="student"> … amber accent … </div>
<div data-role="profs">   … blue accent  … </div>
<div data-role="admin">   … green accent … </div>
```

## 4. Token reference (most-used)

| Token | Value | Use |
|---|---|---|
| `--tx-bg` | `rgb(239,239,239)` | App canvas (grey) |
| `--tx-surface` | `#fff` | Cards |
| `--tx-ink` | `rgb(25,23,23)` | Primary buttons, active nav |
| `--tx-student` | `rgb(227,147,27)` | Student accent (amber) |
| `--tx-profs` | `rgb(61,110,253)` | Profs accent (blue) |
| `--tx-admin` | `rgb(36,138,61)` | Admin accent (green) |
| `--tx-success / -error / -warning / -info` | — | Semantic colours |
| `--tx-radius-2xl` | `24px` | Card radius |
| `--tx-radius-pill` | `9999px` | Pillised controls |
| `--tx-font-display / -ui / -body` | Urbanist | Brand face |
| `--tx-font-data` | Inter | Numerals, times, IDs |

Full list lives in `tokens/` (`colors.css`, `typography.css`, `spacing.css`).

## 5. Component catalog

All bundled to `window.DesignSystem_83ace9`:

| Group | Components |
|---|---|
| **buttons** | `Button`, `IconButton` |
| **forms** | `Input`, `Select`, `Checkbox`, `Switch` |
| **feedback** | `Badge`, `Chip`, `Avatar`, `Divider` |
| **surfaces** | `Card`, `Tabs`, `Pagination`, `ProgressCircular` |
| **brand** | `Logo` |
| **domain** | `ProfileHeader`, `ClassCard`, `ClassRow`, `StatusBadge`, `AttendanceGrid`, `BottomNav`, `StudentRow`, `SettingRow` |
| **icons** | `Icon`, `ICONS` |

Each component directory also has a `.card.html` specimen and a `.d.ts` props
contract. See each `*.prompt.md` for usage notes.

## 6. Icons

```jsx
<Icon name="House" weight="fill" size={24} />
```

Phosphor-family glyphs extracted to `assets/icons/icons.js`, rendered via
`assets/icons/Icon.jsx`. No emoji, no unicode-as-icon.

## 7. UI kits

Full-screen, click-through recreations composed from the primitives:

- `ui_kits/student/` — Login → Home → Attendances → Class detail → Profile.

Open `ui_kits/student/index.html` to interact.

---

## Project layout

```
styles.css            # global entry (imports only) — link this
_ds_bundle.js         # generated UMD bundle (window.DesignSystem_83ace9)
index.html            # deployed developer docs + live playground
tokens/               # colors · typography · spacing · fonts · base
components/<group>/    # React primitives (.jsx + .d.ts + .prompt.md + .card.html)
ui_kits/<product>/     # full-screen recreations
assets/               # brand art, cap mark, icon data
guidelines/           # foundation specimen cards
readme.md             # design guide (voice, visual foundations, iconography)
SKILL.md              # portable Agent-Skill wrapper for Claude Code
```

## Notes & caveats

- `_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` are
  **generated** — do not edit by hand.
- The bundle is built for React 18. Load React/ReactDOM before it.
- Fonts: **Urbanist** (brand), **Inter** (data), **Cairo** (Arabic). If a webfont
  file is missing, the nearest Google Fonts match is used — flagged in `readme.md`.
