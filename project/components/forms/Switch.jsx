import React from 'react';

/** Toggle switch. Track fills with the role accent when on. */
export function Switch({ checked = false, size = 'md', color = 'accent', disabled = false, label, onChange, style, ...rest }) {
  const dims = { sm: { w: 36, h: 20, k: 14 }, md: { w: 46, h: 26, k: 20 } }[size];
  const fill = { accent: 'var(--tx-accent)', ink: 'var(--tx-ink)', success: 'var(--tx-success)' }[color] || color;
  const track = (
    <span style={{
      position: 'relative', width: dims.w, height: dims.h, borderRadius: 9999, flexShrink: 0,
      background: checked ? fill : 'var(--tx-grey-24)', transition: 'background .2s',
    }}>
      <span style={{
        position: 'absolute', top: (dims.h - dims.k) / 2, left: checked ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
        width: dims.k, height: dims.k, borderRadius: '50%', background: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.25)', transition: 'left .2s',
      }} />
    </span>
  );
  return (
    <span
      role="switch" aria-checked={checked} onClick={disabled ? undefined : onChange}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
      {...rest}
    >
      {track}
      {label && <span style={{ fontFamily: 'var(--tx-font-ui)', fontSize: 15, color: 'var(--tx-text)' }}>{label}</span>}
    </span>
  );
}

export default Switch;
