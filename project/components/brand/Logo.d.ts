import * as React from 'react';

/**
 * Tendix brand lockup — graduation-cap mark + wordmark, role-themed.
 * @startingPoint section="Brand" subtitle="Tendix logo — mark + wordmark, role-themed" viewport="700x160"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "mark" = cap only, "lockup" = cap + wordmark. Default "lockup". */
  variant?: 'mark' | 'lockup';
  /** Role preset — recolors the mark and sets the sub-label. */
  role?: 'student' | 'profs' | 'admin';
  /** Explicit mark color (overrides role). */
  color?: string;
  /** Wordmark text. Default "Tendix". */
  wordmark?: string;
  /** Sub-label under the wordmark. Defaults to the role name. Pass null to hide. */
  sublabel?: string | null;
  /** Mark height in px. Default 32. */
  size?: number;
  /** Use light colors for dark backgrounds. */
  onDark?: boolean;
}

/**
 * Tendix brand lockup — graduation-cap mark + wordmark, role-themed.
 * @startingPoint section="Brand" subtitle="Tendix logo — mark + wordmark, role-themed" viewport="700x160"
 */
export declare function Logo(props: LogoProps): JSX.Element;
export default Logo;
