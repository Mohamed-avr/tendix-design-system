import * as React from 'react';
import type { AttendanceStatus } from './StatusBadge';

/**
 * One attendance-history record: time/date · teacher · module · status.
 * @startingPoint section="Attendance" subtitle="Class-history list row" viewport="720x120"
 */
export interface ClassRowProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: string;
  date?: string;
  /** e.g. "Mr" / "Mrs". */
  teacherTitle?: string;
  teacher?: string;
  /** Small italic note ("Justified", "Justification Rejected", …). */
  note?: string;
  /** Color of the note (token / CSS). */
  noteColor?: string;
  /** Module name shown in the right pill (e.g. "Math 5", "OV"). */
  module?: string;
  status?: AttendanceStatus;
  /** Show the document chip with amber dot. Default true. */
  hasDoc?: boolean;
  /** Highlight as the live/running session (accent time tab). */
  running?: boolean;
  onClick?: () => void;
}

/**
 * One attendance-history record: time/date · teacher · module · status.
 * @startingPoint section="Attendance" subtitle="Class-history list row" viewport="700x120"
 */
export declare function ClassRow(props: ClassRowProps): JSX.Element;
export default ClassRow;
