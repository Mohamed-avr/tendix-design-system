import React from 'react';
import { StatusBadge } from './StatusBadge.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * Class-history row — the core list item of the attendance screens.
 * Left: time + date (with an optional accent "running" tab). Middle:
 * teacher + a small status note. Right: a white pill with module name,
 * a document chip, and the attendance StatusBadge.
 */
export function ClassRow({
  time = '08:00 AM', date = '2025/05/03', teacherTitle = 'Mr', teacher = 'Hanad Farid',
  note, noteColor = 'var(--tx-text-tertiary)', module: mod, status = 'attended',
  hasDoc = true, running = false, onClick, style, ...rest
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px',
        background: 'var(--tx-surface-sunken)', borderRadius: 9999,
        cursor: onClick ? 'pointer' : 'default', ...style,
      }}
      {...rest}
    >
      {/* time + date */}
      <div style={{ position: 'relative', flexShrink: 0, minWidth: 96 }}>
        {running && <span style={{ position: 'absolute', inset: '-10px -14px', background: 'var(--tx-accent)', borderRadius: 9999, zIndex: 0 }} />}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'var(--tx-font-display)', fontWeight: 700, fontSize: 17, color: running ? '#fff' : 'var(--tx-text-strong)' }}>{time}</div>
          <div style={{ fontFamily: 'var(--tx-font-data)', fontSize: 12, color: running ? 'rgba(255,255,255,0.85)' : 'var(--tx-text-tertiary)' }}>{date}</div>
        </div>
      </div>

      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--tx-text-strong)', flexShrink: 0 }} />

      {/* teacher + note */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'var(--tx-font-display)', fontWeight: 700, fontSize: 15, color: 'var(--tx-text-strong)' }}>{teacherTitle}</span>
          <span style={{ fontFamily: 'var(--tx-font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: 15, color: 'var(--tx-text)' }}>{teacher}</span>
        </div>
        {note && <div style={{ fontFamily: 'var(--tx-font-display)', fontStyle: 'italic', fontSize: 12.5, color: noteColor }}>{note}</div>}
      </div>

      {/* right pill */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        background: 'var(--tx-surface)', borderRadius: 9999, padding: '8px 14px', minWidth: 168, justifyContent: 'flex-end',
      }}>
        {mod && <span style={{ fontFamily: 'var(--tx-font-ui)', fontWeight: 600, fontSize: 14, color: 'var(--tx-text)' }}>{mod}</span>}
        {hasDoc && (
          <span style={{ position: 'relative', display: 'inline-flex', color: 'var(--tx-text-secondary)' }}>
            <Icon name="FileText" size={20} />
            <span style={{ position: 'absolute', right: -3, bottom: -2, width: 12, height: 12, borderRadius: '50%', background: 'var(--tx-warning-accent)', border: '1.5px solid var(--tx-surface)' }} />
          </span>
        )}
        {(mod || hasDoc) && <span style={{ width: 1, alignSelf: 'stretch', background: 'var(--tx-border)' }} />}
        <StatusBadge status={status} size="sm" />
      </div>
    </div>
  );
}

export default ClassRow;
