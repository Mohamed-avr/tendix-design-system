/**
 * Tendix React Native — barrel export
 *
 * Import tokens and theme helpers from here.
 * Component source files (txButton.tsx, txInput.tsx, etc.) are
 * copy-paste templates — copy them into your project alongside this
 * folder, then add the react-native / react-native-paper imports
 * shown at the top of each file.
 */

// Design tokens (pure JS constants — no native dependencies)
export * from './tokens';

// Theme helpers (pure JS — spread into MD3LightTheme in your app)
export {
  buildMD3Colors,
  getRoleColors,
  tendixDefaultColors,
  tendixStudentColors,
  tendixProfsColors,
  tendixAdminColors,
  tendixRoundness,
} from './theme';
