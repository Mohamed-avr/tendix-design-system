import * as React from 'react';

export interface SwitchProps {
  checked?: boolean;
  /** Size. Default "md". */
  size?: 'sm' | 'md';
  /** On-state track color. Default "accent". */
  color?: 'accent' | 'ink' | 'success' | string;
  label?: React.ReactNode;
  disabled?: boolean;
  onChange?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** On/off toggle with sliding knob. */
export declare function Switch(props: SwitchProps): JSX.Element;
export default Switch;
