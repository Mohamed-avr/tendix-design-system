import * as React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "soft" (tinted), "outlined" (bordered). Default "soft". */
  variant?: 'soft' | 'outlined';
  /** Color role. Default "neutral". */
  color?: 'neutral' | 'accent' | 'success' | 'error';
  /** Leading element (icon). */
  startIcon?: React.ReactNode;
  /** When provided, renders a trailing × delete button. */
  onDelete?: (e: React.MouseEvent) => void;
  /** Default "md". */
  size?: 'sm' | 'md';
}

/** Inline token for metadata (rooms, teachers, filters). */
export declare function Chip(props: ChipProps): JSX.Element;
export default Chip;
