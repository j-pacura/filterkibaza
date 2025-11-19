import { useMemo } from 'react';
import { useStore } from '@/stores/useStore';
import { filterCompanies } from '@/lib/api';

export function useFilters() {
  const { companies, filters, setFilters, resetFilters } = useStore();

  const filteredCompanies = useMemo(() => {
    return filterCompanies(companies, filters);
  }, [companies, filters]);

  return {
    filteredCompanies,
    filters,
    setFilters,
    resetFilters,
    totalCount: companies.length,
    filteredCount: filteredCompanies.length,
  };
}
