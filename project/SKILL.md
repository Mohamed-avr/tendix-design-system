---
name: tendix-design
description: Use this skill to generate well-branded interfaces and assets for Tendix, the role-based university attendance-management system (Student / Profs / Admin), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, icons, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Tendix is a soft, light, role-themed attendance app: grey canvas, white very-rounded
cards, fully-pillised controls, near-black ink for primary actions, and a per-role
accent (Student = amber, Profs = blue, Admin = green). The brand face is **Urbanist**;
**Inter** carries numerals/dates/IDs. The mark is a graduation-cap "T".

Key locations:
- `styles.css` — link this one file to get every token + webfont.
- `tokens/` — colors, typography, spacing, fonts (`--tx-*` custom properties).
- `components/` — React primitives + domain pieces, bundled to `window.DesignSystem_83ace9`.
- `assets/icons/Icon.jsx` + `icons.js` — the Phosphor-style icon set.
- `assets/brand/` — logo art + the recolourable cap mark.
- `ui_kits/student/` — a full interactive screen recreation to copy from.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out
and create static HTML files for the user to view; recolour via `data-role` on a
container. If working on production code, copy assets and read the rules here to
become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to
build or design, ask a few questions, and act as an expert designer who outputs HTML
artifacts *or* production code, depending on the need.
