import * as React from 'react';

export type AttendanceCell = 'present' | 'absent' | 'pending';

export interface AttendanceGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cell states, row-major. Defaults to a sample month. */
  cells?: AttendanceCell[];
  /** Columns. Default 5. */
  columns?: number;
  gap?: number;
  cellRadius?: number;
}

/** Rounded-square attendance heatmap (green present / red absent). */
export declare function AttendanceGrid(props: AttendanceGridProps): JSX.Element;
export default AttendanceGrid;
