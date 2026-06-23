import * as React from 'react';

export type AttendanceStatus =
  | 'attended' | 'absent' | 'justified' | 'rejected' | 'canceled' | 'running' | 'pending';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Attendance outcome. Default "attended". */
  status?: AttendanceStatus;
  /** Override the auto label. */
  label?: string;
  /** Show the trailing circular status icon. Default true. */
  showIcon?: boolean;
  size?: 'sm' | 'md';
}

/** Label + circular status icon used across the attendance lists. */
export declare function StatusBadge(props: StatusBadgeProps): JSX.Element;
export default StatusBadge;
