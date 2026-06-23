import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Active tab value. */
  value?: string;
  onChange?: (value: string) => void;
  /** "underline" (default) or "pill" (segmented). */
  variant?: 'underline' | 'pill';
}

/** Horizontal tab strip — underline or segmented-pill. */
export declare function Tabs(props: TabsProps): JSX.Element;
export default Tabs;
