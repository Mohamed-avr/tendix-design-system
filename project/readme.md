# Tendix — Design System

**Tendix** (working codename *Hudoor*) is a university **attendance-management
system** built for the University of Bejaïa. Students check in to classes with a
single tap; professors run live rosters; admins oversee it all. The product is
**role-based**, and each role gets its own colour-themed app:

| Role | App | Accent |
|------|-----|--------|
| Student | check in, view history, justify absences | **Amber** `rgb(227,147,27)` |
| Profs | run live classes, mark rosters | **Blue** `rgb(61,110,253)` |
| Admin | manage parks, sections, oversight | **Green** `rgb(36,138,61)` |

The mark is a **graduation cap** built as a "T" — it doubles as the letterform
of *Tendix*. The system is light, soft and airy: a grey canvas, white very-rounded
cards, fully-pillised controls, and gentle diffuse shadows.

This design system was generated from the attached **`Tendix.fig`** Figma file
(pages: Cover, Moodboard, Logo, UI-Design, FBI-UI, Presentations, Components) and
four uploaded logo sheets (`uploads/Logo*.jpg`). The Figma's component library is
an MUI / *Minimal* derivative — its token names (primary/secondary/grey ramp,
contained/outlined/soft buttons) are preserved here under the `--tx-*` namespace.

> The reader is not assumed to have access to the Figma file; everything needed is
> reproduced here. Sources are recorded for traceability only.

---

## CONTENT FUNDAMENTALS — how Tendix writes

- **Voice:** plain, warm, second-person. The home header literally asks *"how are
  you today?"*. Onboarding speaks directly: *"With just a tap, you can check in to
  your classes."*
- **Tone:** encouraging, low-pressure. Status language is factual, never punitive
  — *Attended / Absent / Justified / Justification Rejected / Canceled / Running*.
- **Casing:** screen titles and section heads are **Title Case** ("Your Started
  Classes", "Privacy And Security"). Marketing headlines go **UPPERCASE**
  ("WITH JUST A TAP…"). Micro-labels (Resources, Module, Teacher, Type) are short
  Title-Case field labels.
- **Person:** "you / your" for the student; third-person for data ("Mr Hanad
  Farid", student names).
- **Numbers & codes:** times `08:00 AM`, dates `2025/05/03`, matricules `21773302`,
  cohort codes `L3 · A6`, year `2025/2026 · BEJAIA`. These render in **Inter**.
- **Emoji:** none. Status is communicated with coloured icon chips (✓ / ✕ / ⊘),
  never emoji.
- **Vibe:** a friendly, modern student utility — closer to a fitness/streak app
  ("SUPER" this month) than to an institutional portal.

## VISUAL FOUNDATIONS

- **Colour:** a near-neutral base — grey canvas `rgb(239,239,239)`, white cards,
  near-black **ink** `rgb(25,23,23)` for primary actions and the active nav pill.
  Colour is reserved for *meaning*: the role accent, and the semantic set
  (success green, error coral-red, warning amber, info cyan). Attendance uses soft
  green/red tints for the month grid.
- **Type:** **Urbanist** is the brand face for everything — rounded-geometric,
  friendly — from the 44px wordmark down to body. **Inter** carries numerals and
  dense data (times, dates, IDs). **Cairo** covers Arabic. Display headlines can
  go uppercase; body is sentence/Title case.
- **Spacing:** 4px base grid. Cards breathe (20px padding, generous gaps).
- **Backgrounds:** flat grey canvas — **no gradients, no patterns, no textures,
  no full-bleed photography** in chrome. The only imagery is the student's own
  portrait inside the profile/ID card. Onboarding screens place a single product
  screenshot on white.
- **Corner radii:** soft and large. Controls are **fully pillised** (buttons,
  chips, selects, nav, status). Cards are 24px; tiles 12–16px. Almost nothing has
  a sharp corner.
- **Cards:** white fill, 24px radius, a faint `rgb(244,244,244)` hairline, and a
  **soft diffuse shadow** (`0 4px 24px rgba(0,0,0,.05)`) — never hard or dark.
  Inset rows drop to sunken grey with no shadow.
- **Shadows:** low-contrast and diffuse only. Floating chrome buttons (bell,
  globe) are white circles with a small `sm` shadow. The bottom nav casts a soft
  upward shadow.
- **Borders:** hairline `rgb(227,227,227)`; inputs use an even lighter
  `rgb(236,236,236)`. The "Justify" CTA uses a **dashed accent** border.
- **Transparency / blur:** sparing. Soft tints (8–16% alpha) back semantic chips;
  no heavy glass/blur.
- **Animation:** quick and gentle — 0.15–0.2s ease on background/colour/position
  (nav pill expand, switch knob, tab underline). No bounces, no infinite loops on
  content. A single circular spinner marks "running / loading".
- **Hover / press:** hover deepens the fill (ink → slightly lighter; accent →
  darker). Press is a subtle opacity/scale settle. Disabled drops to ~45% opacity.
- **Imagery vibe:** the one photo treatment is a **high-contrast black-and-white
  portrait** on the ID card — cool, graphic, cropped tight.

## ICONOGRAPHY

- The Figma uses a **Phosphor** icon family (regular / bold / fill weights) plus
  some MUI glyphs. The Phosphor glyphs were extracted to
  `assets/icons/icons.js` and are rendered through `assets/icons/Icon.jsx`:
  `<Icon name="House" weight="fill" size={24} />`.
- Coverage: nav & domain (`House`, `GraduationCap`, `Users`, `Bell`, `Gear`,
  `Globe`, `Clipboard`, `User`, `MapPin`, `FileText`, …) plus a small set of clean
  stroke UI glyphs added in the same family for symbols the export lacked
  (`Check`, `X`, `CaretRight/Left`, `ArrowRight`, `CalendarBlank`, `SignOut`,
  `Eye/EyeSlash`, `Prohibit`, `Clock`, status circles). These supplementary
  glyphs are flagged in `icons.js`.
- **No emoji, no unicode-as-icon.** Status is shown with circular icon chips.
- The brand cap mark is extracted from the logo art as an alpha silhouette
  (`assets/brand/cap-mark.png`, inlined in `components/brand/cap-mark.js`) and used
  as a recolourable CSS mask by the `Logo` component.

---

## INDEX / manifest

**Root**
- `styles.css` — global entry point (imports only). Link this one file.
- `readme.md` — this guide. `SKILL.md` — portable Agent-Skill wrapper.

**Tokens** (`tokens/`, all imported by `styles.css`)
- `colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`
- `components/fig-tokens.css` — raw Figma MUI/Minimal variables (all theme modes).

**Components** (`components/`) — bundled to `window.DesignSystem_83ace9`
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Input`, `Select`, `Checkbox`, `Switch`
- `feedback/` — `Badge`, `Chip`, `Avatar`, `Divider`
- `surfaces/` — `Card`, `Tabs`, `Pagination`, `ProgressCircular`
- `brand/` — `Logo`
- `domain/` — `ProfileHeader`, `ClassCard`, `ClassRow`, `StatusBadge`,
  `AttendanceGrid`, `BottomNav`, `StudentRow`, `SettingRow`
- `assets/icons/` — `Icon` + `ICONS` glyph map

**UI kits** (`ui_kits/`)
- `student/` — interactive Student app (Login → Home → Attendances → Detail → Profile)

**Guidelines** (`guidelines/`) — foundation specimen cards (Colors, Type, Spacing).

**Assets** (`assets/`)
- `brand/` — logo sheets + extracted cap mark
- `icons/` — icon data + `Icon` component

## Sources
- Figma: `Tendix.fig` (mounted virtual file) — pages UI-Design, FBI-UI, Logo, Components, Presentations.
- Uploads: `uploads/Logo.jpg`, `Logo-1.jpg`, `Logo-2.jpg`, `Logo-3.jpg`.
