import { create } from 'zustand';
import type { Company, FilterState, ViewMode } from '@/types';

interface AppState {
  // Companies data
  companies: Company[];
  setCompanies: (companies: Company[]) => void;

  // Filters
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;

  // View mode
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  // Selected company
  selectedCompany: Company | null;
  setSelectedCompany: (company: Company | null) => void;

  // Loading state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const defaultFilters: FilterState = {
  searchQuery: '',
  regions: [],
  industries: [],
  types: [],
  potential: [],
  employeesRange: [0, 100000],
};

export const useStore = create<AppState>((set) => ({
  companies: [],
  setCompanies: (companies) => set({ companies }),

  filters: defaultFilters,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () => set({ filters: defaultFilters }),

  viewMode: 'cards',
  setViewMode: (mode) => set({ viewMode: mode }),

  selectedCompany: null,
  setSelectedCompany: (company) => set({ selectedCompany: company }),

  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
