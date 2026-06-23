import React from 'react';
import { Avatar } from '../feedback/Avatar.jsx';
import { IconButton } from '../buttons/IconButton.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Home greeting header — a white pill carrying the avatar + name + greeting,
 * with floating circular action buttons (globe / bell) on the right.
 */
export function ProfileHeader({
  name = 'Azol, Mohamed', greeting = 'how are you today?', avatarSrc,
  status = 'online', showLanguage = false, onBell, onLanguage, style, ...rest
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }} {...rest}>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', gap: 14, minWidth: 0,
        background: 'var(--tx-surface)', borderRadius: 9999, padding: '10px 18px 10px 10px', boxShadow: 'var(--tx-shadow-sm)',
      }}>
        <Avatar src={avatarSrc} name={name} size={56} ring status={status} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--tx-font-display)', fontWeight: 700, fontSize: 20, color: 'var(--tx-text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
          <div style={{ fontFamily: 'var(--tx-font-ui)', fontSize: 15, color: 'var(--tx-text-tertiary)' }}>{greeting}</div>
        </div>
      </div>
      {showLanguage && (
        <IconButton variant="white" onClick={onLanguage} aria-label="Language"><Icon name="Globe" size={24} /></IconButton>
      )}
      <IconButton variant="white" onClick={onBell} aria-label="Notifications"><Icon name="Bell" size={24} /></IconButton>
    </div>
  );
}

export default ProfileHeader;
