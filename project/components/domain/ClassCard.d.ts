import * as React from 'react';

/**
 * Live "started class" card for the Home screen.
 * @startingPoint section="Attendance" subtitle="Live class card with progress + Find CTA" viewport="720x230"
 */
export interface ClassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Class type tag ("TD", "TP", "Cours"). */
  type?: string;
  module?: string;
  teacher?: string;
  block?: string;
  room?: string;
  /** Start/end labels on the progress bar. */
  start?: string;
  end?: string;
  /** 0–1 elapsed fraction. */
  progress?: number;
  /** Attached-document count (amber badge). */
  docCount?: number;
  /** Show the green location-verified check. */
  locationOk?: boolean;
  onFind?: () => void;
}

/**
 * Live "started class" card for the Home screen.
 * @startingPoint section="Attendance" subtitle="Live class card with progress + Find CTA" viewport="720x230"
 */
export declare function ClassCard(props: ClassCardProps): JSX.Element;
export default ClassCard;
