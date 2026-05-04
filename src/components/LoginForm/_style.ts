/**
 * 🛡️ KIP PATTERN - LEVEL 2: MEDIUM COMPONENT
 *
 * Private styles for LoginForm.
 * Keeping styles in a separate file improves organization and maintainability.
 */

import type { CSSProperties } from 'react';

export const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
  } as CSSProperties,

  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
    textAlign: 'left' as const,
  } as CSSProperties,

  label: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#e0e0e0',
  } as CSSProperties,

  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  } as CSSProperties,

  inputError: {
    borderColor: '#ef4444',
  } as CSSProperties,

  errorText: {
    fontSize: '0.75rem',
    color: '#ef4444',
  } as CSSProperties,

  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  } as CSSProperties,

  checkbox: {
    width: '1rem',
    height: '1rem',
    cursor: 'pointer',
  } as CSSProperties,

  checkboxLabel: {
    fontSize: '0.875rem',
    color: '#e0e0e0',
    cursor: 'pointer',
  } as CSSProperties,

  submitButton: {
    padding: '0.75rem',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    backgroundColor: '#3b82f6',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  } as CSSProperties,

  submitButtonDisabled: {
    backgroundColor: '#1e40af',
    cursor: 'not-allowed',
    opacity: 0.6,
  } as CSSProperties,
};
