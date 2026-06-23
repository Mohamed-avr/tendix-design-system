import * as React from 'react';

export interface BottomNavItem {
  value: string;
  label: string;
  icon: string; // Icon name
}

/**
 * App bottom tab bar with an ink-pill active item.
 * @startingPoint section="Navigation" subtitle="Bottom tab bar with ink-pill active item" viewport="430x90"
 */
export interface BottomNavProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Defaults to Home / Attendances / Profile. */
  items?: BottomNavItem[];
  /** Active item value. */
  value?: string;
  onChange?: (value: string) => void;
}

/**
 * App bottom tab bar with an ink-pill active item.
 * @startingPoint section="Navigation" subtitle="Bottom tab bar with ink-pill active item" viewport="420x90"
 */
export declare function BottomNav(props: BottomNavProps): JSX.Element;
export default BottomNav;
