# Tendix — Student app UI kit

A high-fidelity, click-through recreation of the **Student** mobile app from the
Tendix Figma file. It composes the design-system components (no bespoke
re-implementations) inside a phone frame.

## Flow
`Login → Home → Attendances → Class detail (Justify) → Profile/Settings`

- **Home** — greeting header, profile/attendance summary card with the month
  heatmap, the live "Started class" card, and the scrollable Classes-History list.
- **Attendances** — full month list with filter pills and pagination.
- **Class detail** — module / teacher / resources / description, with the dashed
  "Justify your absence" CTA.
- **Profile** — student ID card + Settings rows (Notifications, Privacy, Log Out).

## Files
- `index.html` — phone shell + status bar + bottom nav; loads the bundle and `screens.jsx`.
- `screens.jsx` — all screens + the `App` navigation shell.

## Notes
The student portrait in the Figma is a real photo; here it is shown as a neutral
ink placeholder (no fake imagery shipped). Drop a real image into the placeholder
blocks in `screens.jsx` for production. The kit is themed `data-role="student"`
(amber accent) — switch to `profs` / `admin` to retheme.
