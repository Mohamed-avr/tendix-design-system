import * as React from 'react';

export interface StudentRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Matricule / student ID. */
  id?: string;
  name?: string;
  /** Live attendance state. */
  state?: 'attending' | 'none' | 'late';
  /** Zebra-stripe background. */
  striped?: boolean;
}

/** Live class-roster row (Profs/Admin): id · name · attendance state. */
export declare function StudentRow(props: StudentRowProps): JSX.Element;
export default StudentRow;
