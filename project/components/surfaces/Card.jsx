import React from 'react';

/**
 * Card. The system's fundamental surface: white, very rounded (24px),
 * soft diffuse shadow, faint hairline. `inset` gives the sunken grey
 * row treatment used inside list cards.
 */
export function Card({ children, inset = false, padding = 20, radius = 24, interactive = false, style, ...rest }) {
  return (
    <div
      style={{
        background: inset ? 'var(--tx-surface-sunken)' : 'var(--tx-surface)',
        borderRadius: radius,
        border: inset ? 'none' : '1px solid var(--tx-card-stroke)',
        boxShadow: inset ? 'none' : 'var(--tx-shadow-card)',
        padding,
        transition: interactive ? 'transform .15s, box-shadow .15s' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
