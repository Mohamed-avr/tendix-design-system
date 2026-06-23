import React from 'react';

/**
 * Select / dropdown trigger. Pillised by default to match the app's
 * "February ⌄" month picker. Renders the chosen label + a caret;
 * wire `onClick` to open your own menu/sheet.
 */
export function Select({
  value, placeholder = 'Select', options, size = 'md', pill = true,
  open = false, fullWidth = false, disabled = false, style, ...rest
}) {
  const sizes = { sm: { h: 40, fs: 14, px: 16 }, md: { h: 48, fs: 15, px: 20 }, lg: { h: 56, fs: 16, px: 22 } }[size];
  const caret = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .15s' }}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <button
      type="button" disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        height: sizes.h, padding: `0 ${sizes.px}px`, width: fullWidth ? '100%' : 'auto',
        background: 'var(--tx-surface)', border: '1px solid var(--tx-border)',
        borderRadius: pill ? 9999 : 'var(--tx-radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--tx-font-ui)', fontSize: sizes.fs, fontWeight: 600,
        color: value ? 'var(--tx-text)' : 'var(--tx-text-tertiary)', opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      {...rest}
    >
      <span>{value || placeholder}</span>
      <span style={{ display: 'inline-flex', color: 'var(--tx-text-secondary)' }}>{caret}</span>
    </button>
  );
}

export default Select;
