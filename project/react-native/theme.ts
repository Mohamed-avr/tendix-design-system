/**
 * Tendix — React Native Paper Theme
 *
 * Copy this file into your Expo/RN project alongside tokens.ts.
 * Then add the import at the top of your file:
 *
 *   import { MD3LightTheme, configureFonts } from 'react-native-paper';
 *   import type { MD3Theme } from 'react-native-paper';
 *
 * Usage:
 *   import { PaperProvider } from 'react-native-paper';
 *   import { tendixTheme, studentTheme, profsTheme, adminTheme } from './theme';
 *
 *   export default function App() {
 *     return <PaperProvider theme={studentTheme}><YourApp /></PaperProvider>;
 *   }
 */

import { Colors, FontFamily } from './tokens';
import type { Role, RoleTokens } from './tokens';
import { getRoleTokens } from './tokens';

// ─── Font config (paste into your project after importing configureFonts) ──────
// const fontConfig = configureFonts({ config: { ... } });
// See react-native/README.md for the full fontConfig object.

/** MD3 color scheme derived from Tendix tokens */
export function buildMD3Colors(accent: string, accentSoft: string) {
  return {
    primary:                accent,
    onPrimary:              '#ffffff',
    primaryContainer:       accentSoft,
    onPrimaryContainer:     accent,
    secondary:              Colors.ink,
    onSecondary:            '#ffffff',
    secondaryContainer:     Colors.grey16,
    onSecondaryContainer:   Colors.ink,
    tertiary:               Colors.info,
    onTertiary:             '#ffffff',
    tertiaryContainer:      Colors.infoSoft,
    onTertiaryContainer:    Colors.infoDark,
    error:                  Colors.error,
    onError:                '#ffffff',
    errorContainer:         Colors.errorSoft,
    onErrorContainer:       Colors.errorDark,
    background:             Colors.bg,
    onBackground:           Colors.text,
    surface:                Colors.surface,
    onSurface:              Colors.text,
    surfaceVariant:         Colors.surfaceSunken,
    onSurfaceVariant:       Colors.textSecondary,
    outline:                Colors.border,
    outlineVariant:         Colors.cardStroke,
    shadow:                 Colors.ink,
    scrim:                  'rgba(0,0,0,0.5)',
    inverseSurface:         Colors.ink,
    inverseOnSurface:       Colors.textOnDark,
    inversePrimary:         accentSoft,
    surfaceDisabled:        'rgba(145,158,171,0.12)',
    onSurfaceDisabled:      Colors.textDisabled,
    backdrop:               'rgba(0,0,0,0.4)',
  };
}

/** Role accent → MD3 color scheme */
export function getRoleColors(role: Role = 'profs') {
  const { accent, accentSoft } = getRoleTokens(role);
  return buildMD3Colors(accent, accentSoft);
}

/**
 * Drop-in theme objects. In your project, spread into MD3LightTheme:
 *
 *   import { MD3LightTheme } from 'react-native-paper';
 *   const studentTheme = { ...MD3LightTheme, roundness: 3, colors: tendixStudentColors };
 */
export const tendixDefaultColors = buildMD3Colors(Colors.profs, 'rgba(61,110,253,0.10)');
export const tendixStudentColors  = getRoleColors('student');
export const tendixProfsColors    = getRoleColors('profs');
export const tendixAdminColors    = getRoleColors('admin');

/** Paper roundness multiplier (1 unit = 4px; 3 → 12px base) */
export const tendixRoundness = 3;
