import * as React from 'react';

export interface SettingRowProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  /** Trailing Icon name. Default "CaretRight". Pass null to hide. */
  trailingIcon?: string | null;
  /** Red destructive styling (e.g. Log Out). */
  danger?: boolean;
  onClick?: () => void;
}

/** Tappable settings list row (white pill + chevron). */
export declare function SettingRow(props: SettingRowProps): JSX.Element;
export default SettingRow;
