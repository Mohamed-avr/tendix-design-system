import React from 'react';

/**
 * Pagination. Circular prev/next buttons flanking numbered pages — the
 * exact treatment from the Attendances list footer.
 */
export function Pagination({ count = 5, page = 1, onChange, style, ...rest }) {
  const go = (p) => onChange && p >= 1 && p <= count && onChange(p);
  const arrow = (dir) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transform: dir === 'left' ? 'rotate(180deg)' : 'none' }}>
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const circle = {
    width: 52, height: 52, borderRadius: '50%', border: '1px solid var(--tx-border)',
    background: 'var(--tx-surface)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: 'var(--tx-text)',
  };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18, ...style }} {...rest}>
      <button type="button" onClick={() => go(page - 1)} style={circle} aria-label="Previous">{arrow('left')}</button>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
        {Array.from({ length: count }, (_, i) => i + 1).map((p) => (
          <button key={p} type="button" onClick={() => go(p)} style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            fontFamily: 'var(--tx-font-ui)', fontSize: 18, lineHeight: 1,
            fontWeight: p === page ? 700 : 500, color: p === page ? 'var(--tx-text)' : 'var(--tx-text-tertiary)',
          }}>{p}</button>
        ))}
      </div>
      <button type="button" onClick={() => go(page + 1)} style={circle} aria-label="Next">{arrow('right')}</button>
    </div>
  );
}

export default Pagination;
