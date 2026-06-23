import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color role. Default "neutral". */
  color?: 'neutral' | 'accent' | 'success' | 'error' | 'warning' | 'info';
  /** "soft" = tinted, "solid" = filled. Default "soft". */
  variant?: 'soft' | 'solid';
  /** Show a leading status dot. */
  dot?: boolean;
  /** Default "md". */
  size?: 'sm' | 'md' | 'lg';
}

/** Small pill label for tags, statuses and counts. */
export declare function Badge(props: BadgeProps): JSX.Element;
export default Badge;
