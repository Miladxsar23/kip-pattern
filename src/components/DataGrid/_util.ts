/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Private utility functions for DataGrid.
 * These are data transformation and sorting helpers specific to this component.
 */

import type { SortDirection } from './_type';

/**
 * Generic sort function that handles different data types
 */
export function sortData<T>(
  data: T[],
  accessor: (row: T) => React.ReactNode,
  direction: SortDirection
): T[] {
  if (!direction) return data;

  return [...data].sort((a, b) => {
    const aVal = accessor(a);
    const bVal = accessor(b);

    // Handle null/undefined
    if (aVal == null) return 1;
    if (bVal == null) return -1;

    // Convert to comparable values
    const aComp = String(aVal).toLowerCase();
    const bComp = String(bVal).toLowerCase();

    const comparison = aComp.localeCompare(bComp);
    return direction === 'asc' ? comparison : -comparison;
  });
}

/**
 * Filter data based on search term
 */
export function filterData<T>(
  data: T[],
  searchTerm: string,
  accessor: (row: T) => React.ReactNode
): T[] {
  if (!searchTerm) return data;

  const lowerSearch = searchTerm.toLowerCase();
  return data.filter((row) => {
    const value = String(accessor(row)).toLowerCase();
    return value.includes(lowerSearch);
  });
}

/**
 * Calculate next sort direction
 */
export function getNextSortDirection(current: SortDirection): SortDirection {
  if (current === null) return 'asc';
  if (current === 'asc') return 'desc';
  return null;
}
