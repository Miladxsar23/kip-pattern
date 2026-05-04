/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * The DataGrid component - orchestrating all the private pieces.
 * Notice how clean this is despite the component's complexity:
 * - Types are in _type.ts
 * - Business logic is in _hook.ts
 * - Utilities are in _util.ts
 * - State management is in _store.ts
 * - Sub-components are in _slots.tsx
 *
 * This file is just the conductor, bringing everything together.
 */

import type { DataGridProps } from './_type';
import { useDataGrid } from './_hook';
import { TableHeader, TableBody, SearchBar, LoadingOverlay } from './_slots';

export function DataGrid<T>({
  data,
  columns,
  sortable = true,
  filterable = true,
  onRowClick,
  loading = false,
}: DataGridProps<T>) {
  const { processedData, sortState, searchTerm, handleSort, handleSearch } = useDataGrid(
    data,
    columns,
    sortable,
    filterable
  );

  return (
    <div style={styles.container}>
      {filterable && (
        <SearchBar value={searchTerm} onChange={handleSearch} disabled={loading} />
      )}

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <TableHeader
            columns={columns}
            sortState={sortState}
            onSort={handleSort}
            sortable={sortable}
          />
          <TableBody data={processedData} columns={columns} onRowClick={onRowClick} />
        </table>

        <LoadingOverlay visible={loading} />
      </div>

      <div style={styles.footer}>
        Showing {processedData.length} of {data.length} rows
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  tableWrapper: {
    position: 'relative' as const,
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
  },
  footer: {
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#888',
    textAlign: 'right' as const,
  },
};
