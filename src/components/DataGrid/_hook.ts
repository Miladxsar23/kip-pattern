/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Custom hook that orchestrates DataGrid's business logic.
 * This hook combines store state, utilities, and data processing.
 */

import { useMemo } from 'react';
import type { ColumnDef } from './_type';
import { useDataGridStore } from './_store';
import { sortData, filterData, getNextSortDirection } from './_util';

export function useDataGrid<T>(
  data: T[],
  columns: ColumnDef<T>[],
  sortable: boolean,
  filterable: boolean
) {
  const { sortState, searchTerm, setSortState, setSearchTerm } = useDataGridStore();

  // Process data: filter first, then sort
  const processedData = useMemo(() => {
    let result = data;

    // Apply filtering
    if (filterable && searchTerm) {
      // Filter across all columns
      result = result.filter((row) =>
        columns.some((col) => {
          const value = String(col.accessor(row)).toLowerCase();
          return value.includes(searchTerm.toLowerCase());
        })
      );
    }

    // Apply sorting
    if (sortable && sortState.columnId && sortState.direction) {
      const column = columns.find((col) => col.id === sortState.columnId);
      if (column) {
        if (column.sortFn) {
          // Use custom sort function if provided
          result = [...result].sort((a, b) => {
            const comparison = column.sortFn!(a, b);
            return sortState.direction === 'asc' ? comparison : -comparison;
          });
        } else {
          // Use default sort
          result = sortData(result, column.accessor, sortState.direction);
        }
      }
    }

    return result;
  }, [data, columns, sortState, searchTerm, sortable, filterable]);

  const handleSort = (columnId: string) => {
    if (!sortable) return;

    const column = columns.find((col) => col.id === columnId);
    if (!column || column.sortable === false) return;

    const isCurrentColumn = sortState.columnId === columnId;
    const currentDirection = isCurrentColumn ? sortState.direction : null;
    const nextDirection = getNextSortDirection(currentDirection);

    setSortState({
      columnId: nextDirection ? columnId : null,
      direction: nextDirection,
    });
  };

  const handleSearch = (term: string) => {
    if (!filterable) return;
    setSearchTerm(term);
  };

  return {
    processedData,
    sortState,
    searchTerm,
    handleSort,
    handleSearch,
  };
}
