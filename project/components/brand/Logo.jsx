import React from 'react';
import { CAP_MARK } from './cap-mark.js';

/**
 * Tendix logo. The graduation-cap mark (recolourable) with an optional
 * "Tendix" wordmark and a role sub-label (Student / Profs / Admin).
 * Role presets recolor the mark: student=amber, profs=blue, admin=green.
 */
export function Logo({
  variant = 'lockup',           // 'mark' | 'lockup'
  role,                         // 'student' | 'profs' | 'admin' | undefined (ink)
  color,                        // explicit override for the mark color
  wordmark = 'Tendix',
  sublabel,                     // defaults to the role name when role set
  size = 32,                    // mark height in px
  onDark = false,
  style, ...rest
}) {
  const roleColor = { student: 'var(--tx-student)', profs: 'var(--tx-profs)', admin: 'var(--tx-admin)' };
  const markColor = color || (role ? roleColor[role] : (onDark ? '#fff' : 'var(--tx-ink)'));
  const label = sublabel !== undefined ? sublabel : (role ? { student: 'Student', profs: 'Profs', admin: 'Admin' }[role] : null);

  const mark = (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block', height: size, width: size * (195 / 147), flexShrink: 0,
        backgroundColor: markColor,
        WebkitMaskImage: `url("${CAP_MARK}")`, maskImage: `url("${CAP_MARK}")`,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskPosition: 'center', maskPosition: 'center',
      }}
    />
  );

  if (variant === 'mark') {
    return <span role="img" aria-label="Tendix" style={{ display: 'inline-flex', ...style }} {...rest}>{mark}</span>;
  }

  return (
    <span role="img" aria-label={`Tendix ${label || ''}`.trim()} style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.4, ...style }} {...rest}>
      {mark}
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'var(--tx-font-display)', fontWeight: 500, fontSize: size * 0.92, color: onDark ? '#fff' : 'var(--tx-text-strong)', letterSpacing: '-0.01em' }}>{wordmark}</span>
        {label && <span style={{ fontFamily: 'var(--tx-font-ui)', fontWeight: 500, fontSize: size * 0.4, color: onDark ? 'rgba(255,255,255,0.7)' : 'var(--tx-text-tertiary)', marginTop: size * 0.1 }}>{label}</span>}
      </span>
    </span>
  );
}

export default Logo;
