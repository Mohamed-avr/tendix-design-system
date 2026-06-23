import React from 'react';

/**
 * Circular icon button. The app's chrome buttons (bell, globe, back) are
 * white circles on the grey canvas with a soft shadow; list/inline ones
 * are bare or soft-filled.
 */
export function IconButton({
  children,
  variant = 'plain',
  size = 'md',
  color = 'ink',
  round = true,
  disabled = false,
  style,
  ...rest
}) {
  const dim = { sm: 32, md: 44, lg: 56 }[size];
  const fg = {
    ink: 'var(--tx-text)', accent: 'var(--tx-accent)',
    error: 'var(--tx-error)', muted: 'var(--tx-text-tertiary)', white: '#fff',
  }[color] || color;

  const variants = {
    plain:  { background: 'transparent', boxShadow: 'none', border: 'none' },
    white:  { background: 'var(--tx-surface)', boxShadow: 'var(--tx-shadow-sm)', border: 'none' },
    soft:   { background: 'var(--tx-grey-8)', boxShadow: 'none', border: 'none' },
    outlined: { background: 'transparent', boxShadow: 'none', border: '1px solid var(--tx-border)' },
  }[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, padding: 0, color: fg,
        borderRadius: round ? '50%' : 'var(--tx-radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background .15s, opacity .15s', WebkitTapHighlightColor: 'transparent',
        ...variants, ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default IconButton;
