export interface Company {
  id: number;
  name: string;
  region: string;
  city: string;
  industry: string;
  employees: string;
  revenue?: string;
  potential: 'wysoki' | 'średni' | 'niski';
  type: 'partner' | 'potencjalny klient';
  size?: 'mała' | 'średnia' | 'duża' | 'nieznana';
  lat: number;
  lng: number;
  address: string;
  phone: string;
  website?: string;
  email?: string;
  description: string;
}

export interface DatabaseMetadata {
  title: string;
  total_companies: number;
  created_date: string;
  version: string;
  coverage: string;
}

export interface CompanyDatabase {
  metadata: DatabaseMetadata;
  companies: Company[];
  by_region: Record<string, Company[]>;
  statistics: {
    total: number;
    by_region: Record<string, number>;
    by_type: Record<string, number>;
    by_industry: Record<string, number>;
    by_size: Record<string, number>;
  };
}

export interface FilterState {
  searchQuery: string;
  regions: string[];
  industries: string[];
  types: ('partner' | 'potencjalny klient')[];
  potential: ('wysoki' | 'średni' | 'niski')[];
  sizes: ('mała' | 'średnia' | 'duża')[];
  employeesRange: [number, number];
}

export type ViewMode = 'cards' | 'table' | 'map';

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}
