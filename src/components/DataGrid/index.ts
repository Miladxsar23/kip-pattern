/**
 * 🛡️ KIP PATTERN - THE GATE (index.ts)
 *
 * LEVEL 3 EXAMPLE:
 * - Complex components carefully choose what to expose
 * - We export the component and its public types
 * - We might export the hook if it's reusable
 * - We do NOT export internal slots, utilities, or store
 *
 * The DataGrid has 6 internal files, but only exposes what's necessary.
 * This is the power of KIP - complexity is managed, not exposed.
 */

export { DataGrid } from './_component';
export type { DataGridProps, ColumnDef } from './_type';

// Optional: export the hook if other components need similar data grid logic
// export { useDataGrid } from './_hook';
