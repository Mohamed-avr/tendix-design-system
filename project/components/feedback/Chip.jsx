import React from 'react';

/**
 * Chip. A bordered or filled inline token, optionally with a leading icon
 * and a trailing delete affordance. The app uses soft grey chips for
 * "Block 2", "Classroom 208", teacher names, etc.
 */
export function Chip({ children, variant = 'soft', color = 'neutral', startIcon, onDelete, size = 'md', style, ...rest }) {
  const palette = {
    neutral: { main: 'var(--tx-text)', soft: 'var(--tx-surface-sunken)', border: 'var(--tx-border)' },
    accent:  { main: 'var(--tx-accent)', soft: 'var(--tx-accent-soft)', border: 'var(--tx-accent)' },
    success: { main: 'var(--tx-success-dark)', soft: 'var(--tx-success-soft)', border: 'var(--tx-success)' },
    error:   { main: 'var(--tx-error)', soft: 'var(--tx-error-soft)', border: 'var(--tx-error)' },
  }[color] || {};
  const sizes = { sm: { h: 28, px: 12, fs: 13 }, md: { h: 36, px: 16, fs: 14 } }[size];
  const treat = variant === 'outlined'
    ? { background: 'transparent', border: `1px solid ${palette.border}`, color: palette.main }
    : { background: palette.soft, border: '1px solid transparent', color: palette.main };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, height: sizes.h, padding: `0 ${sizes.px}px`,
      borderRadius: 9999, fontFamily: 'var(--tx-font-ui)', fontWeight: 600, fontSize: sizes.fs, whiteSpace: 'nowrap', ...treat, ...style,
    }} {...rest}>
      {startIcon}
      {children}
      {onDelete && (
        <button type="button" onClick={onDelete} aria-label="Remove" style={{ display: 'inline-flex', border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, marginLeft: 2, color: 'inherit', opacity: 0.6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
      )}
    </span>
  );
}

export default Chip;
