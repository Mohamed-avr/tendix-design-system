import React from 'react';
import { Badge } from '../feedback/Badge.jsx';
import { Chip } from '../feedback/Chip.jsx';
import { Button } from '../buttons/Button.jsx';
import { Icon } from '../../assets/icons/Icon.jsx';

/**
 * "Started class" card — the live-session card on the Home screen. Header
 * (type badge · module · teacher · room chips), a time-progress bar, and
 * a footer with resource indicators and the "Find The Class" CTA.
 */
export function ClassCard({
  type = 'TD', module: mod = 'MATH', teacher = 'Mr Hanad Farid',
  block = 'Block 2', room = 'Classroom 208',
  start = '08:15', end = '09:30', progress = 0.4,
  docCount = 2, locationOk = true, onFind, style, ...rest
}) {
  return (
    <div style={{
      background: 'var(--tx-surface)', borderRadius: 24, padding: 20,
      boxShadow: 'var(--tx-shadow-card)', border: '1px solid var(--tx-card-stroke)',
      display: 'flex', flexDirection: 'column', gap: 18, ...style,
    }} {...rest}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <Badge color="success" variant="soft" size="lg">{type}</Badge>
        <span style={{ fontFamily: 'var(--tx-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tx-text-strong)' }}>{mod}</span>
        <Chip size="sm"><span style={{ fontWeight: 700, marginRight: 4 }}>Mr</span><span style={{ fontStyle: 'italic' }}>{teacher.replace(/^Mr\s+/, '')}</span></Chip>
        <span style={{ flex: 1 }} />
        <Chip size="sm">{block}</Chip>
        <Chip size="sm">{room}</Chip>
      </div>

      {/* progress */}
      <div style={{ position: 'relative', height: 22 }}>
        <div style={{ position: 'absolute', top: 8, left: 0, right: 0, height: 6, borderRadius: 9999, background: 'var(--tx-surface-sunken)' }} />
        <div style={{ position: 'absolute', top: 8, left: 0, width: `${Math.round(progress * 100)}%`, height: 6, borderRadius: 9999, background: 'var(--tx-accent)' }} />
        <span style={{ position: 'absolute', top: 0, left: 0, fontFamily: 'var(--tx-font-data)', fontSize: 11, fontWeight: 600, color: '#fff', background: 'var(--tx-accent)', borderRadius: 6, padding: '2px 6px' }}>{start}</span>
        <span style={{ position: 'absolute', top: 2, right: 0, fontFamily: 'var(--tx-font-data)', fontSize: 11, color: 'var(--tx-text-tertiary)' }}>{end}</span>
      </div>

      {/* footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ position: 'relative', display: 'inline-flex', color: 'var(--tx-text-secondary)' }}>
          <Icon name="FileText" size={22} />
          {docCount > 0 && <span style={{ position: 'absolute', right: -5, bottom: -3, minWidth: 15, height: 15, borderRadius: 9999, background: 'var(--tx-warning-accent)', color: '#3a2c00', fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 3px', border: '1.5px solid var(--tx-surface)' }}>{docCount}</span>}
        </span>
        <span style={{ position: 'relative', display: 'inline-flex', color: 'var(--tx-text-secondary)' }}>
          <Icon name="MapPin" size={22} />
          {locationOk && <span style={{ position: 'absolute', right: -4, bottom: -3, width: 14, height: 14, borderRadius: '50%', background: 'var(--tx-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--tx-surface)' }}><Icon name="Check" size={9} color="#fff" /></span>}
        </span>
        <span style={{ flex: 1 }} />
        <Button color="primary" endIcon={<Icon name="MapPin" weight="fill" size={18} />} onClick={onFind}>Find The Class</Button>
      </div>
    </div>
  );
}

export default ClassCard;
