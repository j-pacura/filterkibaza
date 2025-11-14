import { useQuery } from '@tanstack/react-query';
import { fetchCompaniesDatabase } from '@/lib/api';
import { useStore } from '@/stores/useStore';
import { useEffect } from 'react';

export function useCompanies() {
  const { setCompanies, setIsLoading } = useStore();

  const query = useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompaniesDatabase,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  useEffect(() => {
    if (query.data?.companies) {
      setCompanies(query.data.companies);
      setIsLoading(false);
    }
  }, [query.data, setCompanies, setIsLoading]);

  return {
    companies: query.data?.companies || [],
    database: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
}
