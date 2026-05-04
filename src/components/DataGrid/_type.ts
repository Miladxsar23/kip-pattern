/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Type definitions for the DataGrid component.
 * Complex components have rich type systems - but they stay PRIVATE.
 */

export interface DataGridProps<T> {
  /**
   * Array of data to display
   */
  data: T[];

  /**
   * Column definitions
   */
  columns: ColumnDef<T>[];

  /**
   * Whether to enable sorting
   * @default true
   */
  sortable?: boolean;

  /**
   * Whether to enable filtering
   * @default true
   */
  filterable?: boolean;

  /**
   * Callback when a row is clicked
   */
  onRowClick?: (row: T) => void;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
}

export interface ColumnDef<T> {
  /**
   * Unique identifier for the column
   */
  id: string;

  /**
   * Display header text
   */
  header: string;

  /**
   * Accessor function to get cell value
   */
  accessor: (row: T) => React.ReactNode;

  /**
   * Whether this column is sortable
   * @default true
   */
  sortable?: boolean;

  /**
   * Custom sort function
   */
  sortFn?: (a: T, b: T) => number;

  /**
   * Column width (CSS value)
   */
  width?: string;
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortState {
  columnId: string | null;
  direction: SortDirection;
}
