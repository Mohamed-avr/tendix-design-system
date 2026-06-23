import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper / validation text below the field. */
  helperText?: string;
  /** Error state (red border + helper). */
  error?: boolean;
  /** Success state (green border + helper). */
  success?: boolean;
  /** Leading element (usually an <Icon/>). */
  startAdornment?: React.ReactNode;
  /** Trailing element (icon / eye toggle). */
  endAdornment?: React.ReactNode;
  /** Height preset. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Fully-rounded ends. Default false (8px radius). */
  pill?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

/** Single-line text field with label, helper text and adornments. */
export declare function Input(props: InputProps): JSX.Element;
export default Input;
