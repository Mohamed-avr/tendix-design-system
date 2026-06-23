import React from 'react';

/** Circular progress / spinner ring. Determinate when `value` (0–100) set. */
export function ProgressCircular({ value, size = 44, thickness = 4, color = 'var(--tx-accent)', track = 'var(--tx-grey-16)', style, ...rest }) {
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const indeterminate = value == null;
  const dash = indeterminate ? circ * 0.25 : circ * (value / 100);
  return (
    <span style={{ display: 'inline-flex', width: size, height: size, ...style }} {...rest}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={indeterminate ? { animation: 'tx-spin 1s linear infinite' } : undefined}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={thickness}
          strokeLinecap="round" strokeDasharray={`${dash} ${circ}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <style>{`@keyframes tx-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}

export default ProgressCircular;
