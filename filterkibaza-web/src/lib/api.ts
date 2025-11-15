import type { CompanyDatabase, Company } from '@/types';

export async function fetchCompaniesDatabase(): Promise<CompanyDatabase> {
  const response = await fetch('/filterkibaza_database.json');
  if (!response.ok) {
    throw new Error('Failed to fetch companies database');
  }
  return response.json();
}

export async function fetchCompaniesSimple(): Promise<Company[]> {
  const response = await fetch('/companies_simple.json');
  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }
  const data = await response.json();
  return data.companies || [];
}

export function filterCompanies(
  companies: Company[],
  filters: {
    searchQuery?: string;
    regions?: string[];
    industries?: string[];
    types?: string[];
    potential?: string[];
    sizes?: string[];
  }
): Company[] {
  return companies.filter((company) => {
    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch =
        company.name.toLowerCase().includes(query) ||
        company.city.toLowerCase().includes(query) ||
        company.industry.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Region filter
    if (filters.regions && filters.regions.length > 0) {
      if (!filters.regions.includes(company.region)) return false;
    }

    // Industry filter
    if (filters.industries && filters.industries.length > 0) {
      if (!filters.industries.includes(company.industry)) return false;
    }

    // Type filter
    if (filters.types && filters.types.length > 0) {
      if (!filters.types.includes(company.type)) return false;
    }

    // Potential filter
    if (filters.potential && filters.potential.length > 0) {
      if (!filters.potential.includes(company.potential)) return false;
    }

    // Size filter
    if (filters.sizes && filters.sizes.length > 0) {
      if (!company.size || !filters.sizes.includes(company.size)) return false;
    }

    return true;
  });
}
