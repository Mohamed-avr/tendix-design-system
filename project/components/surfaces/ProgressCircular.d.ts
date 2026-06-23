import * as React from 'react';

export interface ProgressCircularProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 0–100 for determinate; omit for an indeterminate spinner. */
  value?: number;
  /** Diameter (px). Default 44. */
  size?: number;
  /** Ring stroke width. Default 4. */
  thickness?: number;
  color?: string;
  track?: string;
}

/** Circular progress indicator / spinner. */
export declare function ProgressCircular(props: ProgressCircularProps): JSX.Element;
export default ProgressCircular;
