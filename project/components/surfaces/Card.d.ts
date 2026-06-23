import * as React from 'react';

/**
 * White, very-rounded surface with a soft diffuse shadow.
 * @startingPoint section="Surfaces" subtitle="Rounded white card surface" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sunken grey row treatment (no shadow/border). */
  inset?: boolean;
  /** Inner padding (px). Default 20. */
  padding?: number;
  /** Corner radius (px). Default 24. */
  radius?: number;
  /** Adds pointer cursor + hover transition. */
  interactive?: boolean;
}

/**
 * White, very-rounded surface with a soft diffuse shadow — the core
 * container of every Tendix screen.
 * @startingPoint section="Surfaces" subtitle="Rounded white card surface" viewport="700x220"
 */
export declare function Card(props: CardProps): JSX.Element;
export default Card;
