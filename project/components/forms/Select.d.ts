import * as React from 'react';

export interface SelectProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** Currently-selected label. */
  value?: string;
  /** Shown (muted) when no value. Default "Select". */
  placeholder?: string;
  /** Optional list of option labels (for your own menu). */
  options?: string[];
  /** Height preset. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Fully-rounded. Default true. */
  pill?: boolean;
  /** Rotates the caret to indicate an open menu. */
  open?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

/** Dropdown trigger button (label + caret). Pair with your own menu/sheet. */
export declare function Select(props: SelectProps): JSX.Element;
export default Select;
