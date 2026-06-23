import React from 'react';

/**
 * Avatar. Circle by default with optional ring (the home header uses an
 * accent ring) and a presence dot. Falls back to initials.
 */
export function Avatar({ src, alt = '', name, size = 48, ring = false, status, shape = 'circle', style, ...rest }) {
  const radius = shape === 'circle' ? '50%' : 'var(--tx-radius-lg)';
  const initials = (name || alt || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const statusColor = { online: 'var(--tx-success)', busy: 'var(--tx-error)', away: 'var(--tx-warning)' }[status];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...style }} {...rest}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size,
        borderRadius: radius, overflow: 'hidden', background: 'var(--tx-grey-16)',
        color: 'var(--tx-text-secondary)', fontFamily: 'var(--tx-font-ui)', fontWeight: 700, fontSize: size * 0.36,
        border: ring ? '2.5px solid var(--tx-accent)' : 'none', boxSizing: 'border-box',
      }}>
        {src ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
      </span>
      {statusColor && (
        <span style={{
          position: 'absolute', right: 0, bottom: 0, width: size * 0.26, height: size * 0.26,
          minWidth: 10, minHeight: 10, borderRadius: '50%', background: statusColor, border: '2px solid var(--tx-surface)',
        }} />
      )}
    </span>
  );
}

export default Avatar;
