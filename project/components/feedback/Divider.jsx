import React from 'react';

/** Hairline divider. Horizontal (default) or vertical, solid or dashed. */
export function Divider({ orientation = 'horizontal', dashed = false, color = 'var(--tx-divider)', spacing = 0, style, ...rest }) {
  const v = orientation === 'vertical';
  const line = dashed ? 'dashed' : 'solid';
  return (
    <div
      role="separator"
      style={{
        ...(v
          ? { width: 0, alignSelf: 'stretch', borderLeft: `1px ${line} ${color}`, margin: `0 ${spacing}px` }
          : { height: 0, width: '100%', borderTop: `1px ${line} ${color}`, margin: `${spacing}px 0` }),
        ...style,
      }}
      {...rest}
    />
  );
}

export default Divider;
