import React from 'react';

/** Checkbox. Square w/ rounded corners; checked fills with the role accent. */
export function Checkbox({ checked = false, indeterminate = false, size = 'md', color = 'accent', disabled = false, label, onChange, style, ...rest }) {
  const dim = { sm: 20, md: 24 }[size] || size;
  const fill = { accent: 'var(--tx-accent)', ink: 'var(--tx-ink)', success: 'var(--tx-success)' }[color] || color;
  const on = checked || indeterminate;
  const box = (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, borderRadius: 6,
      background: on ? fill : 'var(--tx-surface)',
      border: on ? `1px solid ${fill}` : '1.5px solid var(--tx-border-strong)',
      transition: 'background .15s, border-color .15s', flexShrink: 0,
    }}>
      {indeterminate ? (
        <svg width={dim * 0.66} height={dim * 0.66} viewBox="0 0 24 24"><path d="M6 12h12" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" /></svg>
      ) : checked ? (
        <svg width={dim * 0.7} height={dim * 0.7} viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : null}
    </span>
  );
  const node = (
    <span
      role="checkbox" aria-checked={indeterminate ? 'mixed' : checked}
      onClick={disabled ? undefined : onChange}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      {...rest}
    >
      {box}
      {label && <span style={{ fontFamily: 'var(--tx-font-ui)', fontSize: 15, color: 'var(--tx-text)' }}>{label}</span>}
    </span>
  );
  return node;
}

export default Checkbox;
