import React from 'react';

/**
 * Tabs. Underline style (default) or pill/segmented. Controlled via
 * `value` + `onChange`. Items: [{ value, label, icon }].
 */
export function Tabs({ items = [], value, onChange, variant = 'underline', style, ...rest }) {
  const pill = variant === 'pill';
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: pill ? 4 : 24,
        padding: pill ? 4 : 0, background: pill ? 'var(--tx-surface-sunken)' : 'transparent',
        borderRadius: pill ? 9999 : 0, borderBottom: pill ? 'none' : '1px solid var(--tx-border)',
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value} role="tab" aria-selected={active}
            onClick={() => onChange && onChange(it.value)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--tx-font-ui)', fontWeight: 600, fontSize: 15, whiteSpace: 'nowrap',
              ...(pill
                ? { height: 36, padding: '0 18px', borderRadius: 9999, background: active ? 'var(--tx-surface)' : 'transparent', color: active ? 'var(--tx-text)' : 'var(--tx-text-tertiary)', boxShadow: active ? 'var(--tx-shadow-xs)' : 'none' }
                : { height: 40, padding: 0, background: 'transparent', color: active ? 'var(--tx-text)' : 'var(--tx-text-tertiary)', borderBottom: active ? '2px solid var(--tx-accent)' : '2px solid transparent', marginBottom: -1 }),
            }}
          >
            {it.icon}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
