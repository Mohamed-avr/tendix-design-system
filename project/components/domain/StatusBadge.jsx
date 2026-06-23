import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Attendance status pill — the colored "Attended ✓ / Absent ✕ / Canceled ⊘"
 * marker from the class rows. Renders the label + a circular status icon.
 */
const MAP = {
  attended:  { label: 'Attended',  color: 'var(--tx-success)',  icon: 'Check',    fg: 'var(--tx-text)' },
  absent:    { label: 'Absent',    color: 'var(--tx-error)',    icon: 'X',        fg: 'var(--tx-text)' },
  justified: { label: 'Justified', color: 'var(--tx-accent)',   icon: 'Check',    fg: 'var(--tx-accent)' },
  rejected:  { label: 'Rejected',  color: 'var(--tx-error-strong)', icon: 'X',    fg: 'var(--tx-error-strong)' },
  canceled:  { label: 'Canceled',  color: 'var(--tx-attend-canceled)', icon: 'Prohibit', fg: 'var(--tx-text-secondary)' },
  running:   { label: 'Running',   color: 'var(--tx-accent)',   icon: 'Clock',    fg: 'var(--tx-text)' },
  pending:   { label: 'Pending',   color: 'var(--tx-warning-dark)', icon: 'Clock', fg: 'var(--tx-text-secondary)' },
};

export function StatusBadge({ status = 'attended', label, showIcon = true, size = 'md', style, ...rest }) {
  const s = MAP[status] || MAP.attended;
  const dim = { sm: 26, md: 32 }[size];
  const fs = { sm: 13, md: 15 }[size];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }} {...rest}>
      <span style={{ fontFamily: 'var(--tx-font-ui)', fontWeight: 600, fontSize: fs, color: s.fg }}>{label || s.label}</span>
      {showIcon && (
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: dim, height: dim,
          borderRadius: '50%', background: 'var(--tx-surface)', boxShadow: 'var(--tx-shadow-xs)', color: s.color,
        }}>
          <Icon name={s.icon} weight="bold" size={dim * 0.56} />
        </span>
      )}
    </span>
  );
}

export default StatusBadge;
