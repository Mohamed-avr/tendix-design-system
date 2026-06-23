import React from 'react';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Settings list row — a white pill with a label and a trailing affordance
 * (chevron / custom). Used on the Profile/Settings screen.
 */
export function SettingRow({ label = 'Notifications', trailingIcon = 'CaretRight', danger = false, onClick, children, style, ...rest }) {
  return (
    <button
      type="button" onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
        background: 'var(--tx-surface)', border: 'none', borderRadius: 'var(--tx-radius-lg)',
        padding: '18px 20px', cursor: 'pointer', boxShadow: 'var(--tx-shadow-xs)',
        fontFamily: 'var(--tx-font-display)', fontWeight: 600, fontSize: 17,
        color: danger ? 'var(--tx-error-strong)' : 'var(--tx-text-strong)', ...style,
      }}
      {...rest}
    >
      <span style={{ flex: 1 }}>{label}</span>
      {children}
      {trailingIcon && <Icon name={trailingIcon} size={22} color={danger ? 'var(--tx-error-strong)' : 'var(--tx-text-secondary)'} />}
    </button>
  );
}

export default SettingRow;
