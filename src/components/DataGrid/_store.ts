/**
 * 🛡️ KIP PATTERN - LEVEL 3: COMPLEX COMPONENT
 *
 * Zustand store for DataGrid state management.
 * For complex components with significant state, a dedicated store keeps things organized.
 *
 * This store is PRIVATE - only DataGrid internals should access it.
 */

import { create } from 'zustand';
import type { SortState } from './_type';

interface DataGridStore {
  sortState: SortState;
  searchTerm: string;
  setSortState: (state: SortState) => void;
  setSearchTerm: (term: string) => void;
  reset: () => void;
}

const initialState = {
  sortState: { columnId: null, direction: null } as SortState,
  searchTerm: '',
};

export const useDataGridStore = create<DataGridStore>((set) => ({
  ...initialState,

  setSortState: (sortState) => set({ sortState }),

  setSearchTerm: (searchTerm) => set({ searchTerm }),

  reset: () => set(initialState),
}));
