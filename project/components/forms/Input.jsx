import React from 'react';

/**
 * Text field. Outlined (default) or filled, with optional label, helper
 * text, and start/end adornments. Pillised to match the app's controls,
 * or square via `pill={false}`.
 */
export function Input({
  label, helperText, error = false, success = false,
  startAdornment, endAdornment, size = 'md', pill = false,
  fullWidth = true, disabled = false, id, style, ...rest
}) {
  const sizes = { sm: { h: 40, fs: 14 }, md: { h: 48, fs: 15 }, lg: { h: 56, fs: 16 } }[size];
  const borderColor = error ? 'var(--tx-error)' : success ? 'var(--tx-success)' : 'var(--tx-border-input)';
  const fieldId = id || (label ? 'tx-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: fullWidth ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--tx-font-ui)', fontSize: 13, fontWeight: 600, color: 'var(--tx-text-secondary)' }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: sizes.h,
        padding: '0 14px', background: 'var(--tx-surface)',
        border: `1px solid ${borderColor}`, borderRadius: pill ? 9999 : 'var(--tx-radius-md)',
        opacity: disabled ? 0.5 : 1, transition: 'border-color .15s',
      }}>
        {startAdornment && <span style={{ display: 'inline-flex', color: 'var(--tx-text-tertiary)' }}>{startAdornment}</span>}
        <input
          id={fieldId} disabled={disabled}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--tx-font-ui)', fontSize: sizes.fs, color: 'var(--tx-text)',
          }}
          {...rest}
        />
        {endAdornment && <span style={{ display: 'inline-flex', color: 'var(--tx-text-tertiary)' }}>{endAdornment}</span>}
      </div>
      {helperText && (
        <span style={{ fontSize: 12, color: error ? 'var(--tx-error)' : success ? 'var(--tx-success-dark)' : 'var(--tx-text-tertiary)', paddingLeft: 4 }}>
          {helperText}
        </span>
      )}
    </div>
  );
}

export default Input;
