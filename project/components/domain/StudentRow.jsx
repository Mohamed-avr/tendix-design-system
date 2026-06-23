import React from 'react';

/**
 * Roster row (Profs/Admin view) — one student in the live class list:
 * matricule · name · live attendance state. `state`: 'attending' | 'none'.
 */
export function StudentRow({ id = '21773302', name = 'Seryne amin', state = 'none', striped = false, style, ...rest }) {
  const states = {
    attending: { label: 'attending now', color: 'var(--tx-success-dark)' },
    none: { label: 'none', color: 'var(--tx-text-tertiary)' },
    late: { label: 'late', color: 'var(--tx-warning-dark)' },
  };
  const s = states[state] || states.none;
  return (
    <div
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1.6fr 1.4fr', alignItems: 'center',
        padding: '16px 20px', background: striped ? 'var(--tx-surface-sunken)' : 'var(--tx-surface)',
        fontFamily: 'var(--tx-font-ui)', fontSize: 15, color: 'var(--tx-text)', ...style,
      }}
      {...rest}
    >
      <span style={{ fontFamily: 'var(--tx-font-data)', color: 'var(--tx-text-secondary)' }}>{id}</span>
      <span style={{ fontWeight: 500 }}>{name}</span>
      <span style={{ textAlign: 'center', fontWeight: 600, color: s.color }}>{s.label}</span>
    </div>
  );
}

export default StudentRow;
