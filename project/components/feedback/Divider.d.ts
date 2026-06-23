import * as React from 'react';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  dashed?: boolean;
  /** Line color (any CSS color / token). */
  color?: string;
  /** Margin (px) on the cross axis. */
  spacing?: number;
}

/** Thin separating rule. */
export declare function Divider(props: DividerProps): JSX.Element;
export default Divider;
