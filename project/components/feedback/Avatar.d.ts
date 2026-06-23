import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. */
  src?: string;
  alt?: string;
  /** Name used for initials fallback. */
  name?: string;
  /** Pixel diameter. Default 48. */
  size?: number;
  /** Accent ring (home header style). */
  ring?: boolean;
  /** Presence dot. */
  status?: 'online' | 'busy' | 'away';
  /** Circle or rounded square. Default "circle". */
  shape?: 'circle' | 'rounded';
}

/** User avatar with optional ring and presence dot; initials fallback. */
export declare function Avatar(props: AvatarProps): JSX.Element;
export default Avatar;
