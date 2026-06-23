import React from 'react';

/**
 * Badge / pill label. Soft (tinted) or solid; carries a color role.
 * Used for "TD" class-type tags, "SUPER" callouts, status chips.
 */
export function Badge({ children, color = 'neutral', variant = 'soft', dot = false, size = 'md', style, ...rest }) {
  const palette = {
    neutral: { main: 'var(--tx-text-secondary)', soft: 'var(--tx-grey-16)' },
    accent:  { main: 'var(--tx-accent)', soft: 'var(--tx-accent-soft)' },
    success: { main: 'var(--tx-success-dark)', soft: 'var(--tx-success-soft)' },
    error:   { main: 'var(--tx-error)', soft: 'var(--tx-error-soft)' },
    warning: { main: 'var(--tx-warning-dark)', soft: 'var(--tx-warning-soft)' },
    info:    { main: 'var(--tx-info-dark)', soft: 'var(--tx-info-soft)' },
  }[color] || {};
  const sizes = { sm: { h: 20, px: 8, fs: 11 }, md: { h: 26, px: 12, fs: 12 }, lg: { h: 32, px: 14, fs: 14 } }[size];
  const solid = variant === 'solid';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, height: sizes.h, padding: `0 ${sizes.px}px`,
      borderRadius: 9999, fontFamily: 'var(--tx-font-ui)', fontWeight: 700, fontSize: sizes.fs,
      letterSpacing: '0.02em', whiteSpace: 'nowrap',
      background: solid ? palette.main : palette.soft, color: solid ? '#fff' : palette.main, ...style,
    }} {...rest}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: solid ? '#fff' : palette.main }} />}
      {children}
    </span>
  );
}

export default Badge;
