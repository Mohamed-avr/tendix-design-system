import * as React from 'react';

/**
 * Primary action control. Pillised, ink-filled by default.
 * @startingPoint section="Buttons" subtitle="Pillised action button — contained / outlined / soft / text" viewport="700x240"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. Default "contained". */
  variant?: 'contained' | 'outlined' | 'soft' | 'text';
  /** Color role. "primary" = ink (near-black), "accent" = role theme. Default "primary". */
  color?: 'primary' | 'accent' | 'error' | 'success';
  /** Height preset. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Fully-rounded (pill). Default true — the Tendix house style. */
  pill?: boolean;
  /** Stretch to container width. */
  fullWidth?: boolean;
  /** Element rendered before the label. */
  startIcon?: React.ReactNode;
  /** Element rendered after the label. */
  endIcon?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Primary action control. Pillised, ink-filled by default.
 */
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
