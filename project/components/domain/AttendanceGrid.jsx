import React from 'react';

/**
 * Attendance grid — the rounded-square heatmap of recent sessions from the
 * profile card. Green = present, red = absent, last cell optionally a
 * "loading/next" spinner. `cells` is an array of 'present' | 'absent' | 'pending'.
 */
export function AttendanceGrid({ cells, columns = 5, gap = 10, cellRadius = 12, style, ...rest }) {
  const data = cells || ['present','present','absent','present','present','present','absent','present','present','absent','present','present','absent','present','pending'];
  const bg = {
    present: 'var(--tx-attend-present-soft)',
    absent: 'var(--tx-attend-absent-soft)',
    pending: 'var(--tx-surface-sunken)',
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap, ...style }} {...rest}>
      {data.map((c, i) => (
        <div key={i} style={{
          aspectRatio: '1 / 1', borderRadius: cellRadius, background: bg[c] || bg.pending,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {c === 'pending' && (
            <svg width="40%" height="40%" viewBox="0 0 24 24" style={{ animation: 'tx-spin 1.2s linear infinite', color: 'var(--tx-text-tertiary)' }}>
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="14 40" strokeLinecap="round" />
            </svg>
          )}
        </div>
      ))}
      <style>{`@keyframes tx-spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

export default AttendanceGrid;
