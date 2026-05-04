/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Private styles for DataGrid slots.
 * Separating styles keeps the component files focused on logic and structure.
 */

import type { CSSProperties } from 'react';

export const styles = {
  // Table Header Styles
  thead: {
    backgroundColor: '#2a2a2a',
    borderBottom: '2px solid #444',
  } as CSSProperties,

  th: {
    padding: '0.75rem',
    textAlign: 'left' as const,
    fontWeight: 600,
    color: '#e0e0e0',
    fontSize: '0.875rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  } as CSSProperties,

  thSortable: {
    cursor: 'pointer',
    userSelect: 'none' as const,
  } as CSSProperties,

  thContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  } as CSSProperties,

  sortIcon: {
    fontSize: '0.75rem',
    opacity: 0.6,
  } as CSSProperties,

  // Table Body Styles
  tr: {
    borderBottom: '1px solid #333',
  } as CSSProperties,

  trClickable: {
    cursor: 'pointer',
  } as CSSProperties,

  td: {
    padding: '0.75rem',
    color: '#d0d0d0',
  } as CSSProperties,

  emptyState: {
    padding: '2rem',
    textAlign: 'center' as const,
    color: '#888',
    fontStyle: 'italic' as const,
  } as CSSProperties,

  // Search Bar Styles
  searchContainer: {
    marginBottom: '1rem',
  } as CSSProperties,

  searchInput: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '0.875rem',
    border: '1px solid #444',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  } as CSSProperties,

  // Loading Overlay Styles
  loadingOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
  } as CSSProperties,

  spinner: {
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 600,
  } as CSSProperties,
};
