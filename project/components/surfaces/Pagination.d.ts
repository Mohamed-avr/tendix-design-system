import * as React from 'react';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Total page count. Default 5. */
  count?: number;
  /** Active page (1-based). */
  page?: number;
  onChange?: (page: number) => void;
}

/** Numbered pager with circular prev/next buttons. */
export declare function Pagination(props: PaginationProps): JSX.Element;
export default Pagination;
