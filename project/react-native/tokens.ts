/**
 * Tendix Design Tokens — React Native
 * Mirrors tokens/colors.css, tokens/typography.css, tokens/spacing.css
 * Use these constants directly in StyleSheet.create() or inline styles.
 *
 * Role theming: pass `role: 'student' | 'profs' | 'admin'` to getRoleTokens()
 * to get the accent set for that role.
 */

// ─── Colors ──────────────────────────────────────────────────────────────────

export const Colors = {
  // Role accents
  student: 'rgb(227,147,27)',
  studentDeep: 'rgb(220,78,36)',
  profs: 'rgb(61,110,253)',
  admin: 'rgb(36,138,61)',

  // Ink
  ink: 'rgb(25,23,23)',
  inkHover: 'rgb(48,44,44)',

  // Text
  text: 'rgb(36,36,36)',
  textStrong: 'rgb(17,20,27)',
  textSecondary: 'rgb(73,68,68)',
  textTertiary: 'rgb(153,153,153)',
  textDisabled: 'rgb(196,205,213)',
  textOnDark: 'rgb(255,255,255)',

  // Surfaces / backgrounds
  bg: 'rgb(239,239,239)',
  bgLight: 'rgb(251,251,251)',
  surface: 'rgb(255,255,255)',
  surfaceSunken: 'rgb(247,247,247)',

  // Borders
  border: 'rgb(227,227,227)',
  borderStrong: 'rgb(165,163,163)',
  borderInput: 'rgb(236,236,236)',
  cardStroke: 'rgb(244,244,244)',

  // Semantic
  success: 'rgb(34,197,94)',
  successDark: 'rgb(17,141,87)',
  successSoft: 'rgba(34,197,94,0.16)',

  error: 'rgb(255,86,48)',
  errorStrong: 'rgb(230,53,53)',
  errorDark: 'rgb(183,29,24)',
  errorSoft: 'rgba(255,86,48,0.16)',

  warning: 'rgb(255,171,0)',
  warningDark: 'rgb(183,110,0)',
  warningSoft: 'rgba(255,171,0,0.16)',

  info: 'rgb(0,184,217)',
  infoDark: 'rgb(22,130,212)',
  infoSoft: 'rgba(0,184,217,0.16)',

  // Attendance domain
  attendPresent: 'rgb(34,197,94)',
  attendPresentSoft: 'rgb(222,244,228)',
  attendAbsent: 'rgb(255,86,48)',
  attendAbsentSoft: 'rgb(250,222,217)',
  attendJustified: 'rgb(61,110,253)',
  attendRejected: 'rgb(230,53,53)',
  attendCanceled: 'rgb(153,153,153)',

  // Grey ramp
  grey400: 'rgb(196,205,213)',
  grey500: 'rgb(145,158,171)',
  grey600: 'rgb(99,115,129)',
  grey8: 'rgba(145,158,171,0.08)',
  grey16: 'rgba(145,158,171,0.16)',
} as const;

// ─── Role accent sets ─────────────────────────────────────────────────────────

export type Role = 'student' | 'profs' | 'admin';

export interface RoleTokens {
  accent: string;
  accentHover: string;
  accentSoft: string;
}

export const RoleAccents: Record<Role, RoleTokens> = {
  student: { accent: Colors.student,  accentHover: 'rgb(200,128,18)',  accentSoft: 'rgba(227,147,27,0.12)' },
  profs:   { accent: Colors.profs,    accentHover: 'rgb(45,92,224)',   accentSoft: 'rgba(61,110,253,0.10)' },
  admin:   { accent: Colors.admin,    accentHover: 'rgb(28,112,49)',   accentSoft: 'rgba(36,138,61,0.12)' },
};

export function getRoleTokens(role: Role = 'student'): RoleTokens {
  return RoleAccents[role];
}

// ─── Typography ───────────────────────────────────────────────────────────────

export const FontFamily = {
  display:  'Urbanist',   // headings / wordmark — load via expo-font
  ui:       'Urbanist',   // buttons, labels, nav
  body:     'Urbanist',   // body text
  data:     'Inter',      // numbers, timestamps, IDs
  arabic:   'Cairo',      // Arabic script
} as const;

export const FontSize = {
  display: 44,
  h1: 32,
  h2: 24,
  h3: 20,
  lg: 18,
  base: 16,
  sm: 14,
  xs: 12,
  xxs: 10,
} as const;

export const FontWeight = {
  light:    '300',
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
  black:    '900',
} as const;

export const LineHeight = {
  tight:  1.05,
  snug:   1.2,
  normal: 1.45,
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

/** 4px base grid */
export const Space = {
  0:  0,
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  7:  28,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
} as const;

// ─── Radii ────────────────────────────────────────────────────────────────────

export const Radius = {
  xs:   4,
  sm:   6,
  md:   8,    // buttons, inputs
  lg:   12,   // chips, small cards
  xl:   16,   // icon tiles
  xxl:  24,   // cards
  xxxl: 32,   // large surface cards
  pill: 9999, // nav pills, status pills
} as const;

// ─── Shadows ─────────────────────────────────────────────────────────────────
// React Native shadows differ per platform. Use these with Platform.select.

export const Shadow = {
  xs: {
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  sm: {
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
  },
  md: {
    shadowColor: '#000', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06, shadowRadius: 20, elevation: 4,
  },
  card: {
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05, shadowRadius: 24, elevation: 3,
  },
  nav: {
    shadowColor: '#000', shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05, shadowRadius: 16, elevation: 8,
  },
} as const;
