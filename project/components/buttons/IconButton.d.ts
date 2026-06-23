import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Surface treatment. "white" = floating circle w/ shadow (chrome). Default "plain". */
  variant?: 'plain' | 'white' | 'soft' | 'outlined';
  /** Diameter preset. Default "md" (44px). */
  size?: 'sm' | 'md' | 'lg';
  /** Icon color: token name or CSS color. Default "ink". */
  color?: 'ink' | 'accent' | 'error' | 'muted' | 'white' | string;
  /** Circular (true) vs rounded-square. Default true. */
  round?: boolean;
  disabled?: boolean;
  /** Usually a single <Icon/>. */
  children?: React.ReactNode;
}

/** Compact square/circular control holding a single icon. */
export declare function IconButton(props: IconButtonProps): JSX.Element;
export default IconButton;
