import * as React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  /** Box size. Default "md" (24px). */
  size?: 'sm' | 'md' | number;
  /** Checked fill color. Default "accent". */
  color?: 'accent' | 'ink' | 'success' | string;
  /** Optional trailing label. */
  label?: React.ReactNode;
  disabled?: boolean;
  onChange?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Rounded-square checkbox with optional label. */
export declare function Checkbox(props: CheckboxProps): JSX.Element;
export default Checkbox;
