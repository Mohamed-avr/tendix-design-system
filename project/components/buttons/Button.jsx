import React from 'react';

/**
 * Tendix Button. MUI/Minimal-derived: contained · outlined · soft · text,
 * pillised by default (the app uses fully-rounded controls everywhere).
 * Default color "primary" = near-black ink; "accent" follows the role theme.
 */
export function Button({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'md',
  pill = true,
  fullWidth = false,
  startIcon,
  endIcon,
  disabled = false,
  style,
  ...rest
}) {
  const palette = {
    primary: { main: 'var(--tx-ink)', hover: 'var(--tx-ink-hover)', on: '#fff', soft: 'var(--tx-grey-16)' },
    accent:  { main: 'var(--tx-accent)', hover: 'var(--tx-accent-hover)', on: '#fff', soft: 'var(--tx-accent-soft)' },
    error:   { main: 'var(--tx-error)', hover: 'var(--tx-error-dark)', on: '#fff', soft: 'var(--tx-error-soft)' },
    success: { main: 'var(--tx-success)', hover: 'var(--tx-success-dark)', on: '#fff', soft: 'var(--tx-success-soft)' },
  }[color] || {};

  const sizes = {
    sm: { h: 36, px: 16, fs: 14 },
    md: { h: 44, px: 22, fs: 15 },
    lg: { h: 52, px: 28, fs: 16 },
  }[size];

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    height: sizes.h, padding: `0 ${sizes.px}px`, fontFamily: 'var(--tx-font-ui)',
    fontSize: sizes.fs, fontWeight: 600, lineHeight: 1, letterSpacing: '0.01em',
    borderRadius: pill ? 9999 : 'var(--tx-radius-md)',
    border: '1px solid transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : 'auto', whiteSpace: 'nowrap',
    transition: 'background .15s, color .15s, border-color .15s, opacity .15s',
    opacity: disabled ? 0.45 : 1, WebkitTapHighlightColor: 'transparent',
  };

  const variants = {
    contained: { background: palette.main, color: palette.on },
    outlined:  { background: 'transparent', color: palette.main, borderColor: 'currentColor' },
    soft:      { background: palette.soft, color: palette.main },
    text:      { background: 'transparent', color: palette.main },
  }[variant];

  return (
    <button type="button" disabled={disabled} style={{ ...base, ...variants, ...style }} {...rest}>
      {startIcon}
      {children && <span>{children}</span>}
      {endIcon}
    </button>
  );
}

export default Button;
