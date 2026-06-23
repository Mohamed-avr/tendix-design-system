import React from 'react';
import { ICONS } from './icons.js';

/**
 * Tendix icon. Phosphor-style glyphs extracted from the Tendix Figma file.
 * Paints with currentColor — set color via CSS or the `color` prop.
 *
 *   <Icon name="House" weight="fill" size={24} />
 */
export function Icon({ name, weight = 'regular', size = 24, color, style, ...rest }) {
  const glyph = ICONS[name] && (ICONS[name][weight] || ICONS[name].regular || Object.values(ICONS[name])[0]);
  if (!glyph) {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" {...rest} />
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={glyph.viewBox}
      fill="none"
      role="img"
      aria-label={name}
      style={{ color, display: 'inline-block', flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: glyph.body }}
      {...rest}
    />
  );
}

export default Icon;
