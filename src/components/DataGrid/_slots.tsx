/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Internal sub-components (slots) for DataGrid.
 * These are reusable pieces used only within DataGrid - they're NOT exported.
 * Styles are separated into _style.ts for better organization.
 *
 * Think of these as "private helper components" that keep _component.tsx clean.
 */

import type { ColumnDef, SortState } from './_type';
import { styles } from './_style';

interface TableHeaderProps<T> {
  columns: ColumnDef<T>[];
  sortState: SortState;
  onSort: (columnId: string) => void;
  sortable: boolean;
}

export function TableHeader<T>({ columns, sortState, onSort, sortable }: TableHeaderProps<T>) {
  return (
    <thead style={styles.thead}>
      <tr>
        {columns.map((column) => {
          const isSortable = sortable && column.sortable !== false;
          const isActive = sortState.columnId === column.id;

          return (
            <th
              key={column.id}
              onClick={() => isSortable && onSort(column.id)}
              style={{
                ...styles.th,
                ...(isSortable ? styles.thSortable : {}),
                width: column.width,
              }}
            >
              <div style={styles.thContent}>
                {column.header}
                {isSortable && (
                  <span style={styles.sortIcon}>
                    {isActive ? (sortState.direction === 'asc' ? '↑' : '↓') : '↕'}
                  </span>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

interface TableBodyProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
}

export function TableBody<T>({ data, columns, onRowClick }: TableBodyProps<T>) {
  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={columns.length} style={styles.emptyState}>
            No data available
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          onClick={() => onRowClick?.(row)}
          style={{
            ...styles.tr,
            ...(onRowClick ? styles.trClickable : {}),
          }}
        >
          {columns.map((column) => (
            <td key={column.id} style={styles.td}>
              {column.accessor(row)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function SearchBar({ value, onChange, disabled }: SearchBarProps) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={styles.searchInput}
      />
    </div>
  );
}

interface LoadingOverlayProps {
  visible: boolean;
}

export function LoadingOverlay({ visible }: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <div style={styles.loadingOverlay}>
      <div style={styles.spinner}>Loading...</div>
    </div>
  );
}
