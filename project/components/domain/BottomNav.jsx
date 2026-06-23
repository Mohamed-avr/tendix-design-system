import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Bottom tab bar — white surface with the active item rendered as an
 * ink pill (icon + label), inactive items as muted icon+label.
 * items: [{ value, label, icon }]. Default items match the Student app.
 */
const DEFAULT = [
  { value: 'home', label: 'Home', icon: 'House' },
  { value: 'attendances', label: 'Attendances', icon: 'Clipboard' },
  { value: 'profile', label: 'Profile', icon: 'User' },
];

export function BottomNav({ items = DEFAULT, value = 'home', onChange, style, ...rest }) {
  return (
    <nav
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 8,
        background: 'var(--tx-surface)', padding: '14px 16px', borderRadius: 0,
        boxShadow: 'var(--tx-shadow-nav)', ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.value === value;
        return (
          <button
            key={it.value} type="button" onClick={() => onChange && onChange(it.value)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, border: 'none', cursor: 'pointer',
              height: 52, padding: active ? '0 24px' : '0 10px', borderRadius: 9999,
              background: active ? 'var(--tx-ink)' : 'transparent', color: active ? '#fff' : 'var(--tx-text-secondary)',
              fontFamily: 'var(--tx-font-ui)', fontWeight: 600, fontSize: 16, transition: 'background .18s, padding .18s',
            }}
          >
            <Icon name={it.icon} weight={active ? 'fill' : 'regular'} size={24} />
            <span>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
