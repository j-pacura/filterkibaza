import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('pl-PL').format(num);
}

export function formatRevenue(revenue?: string): string {
  if (!revenue) return 'N/A';
  return revenue;
}

export function getCompanyTypeColor(type: string): string {
  switch (type) {
    case 'klient':
      return 'text-secondary-green';
    case 'partner':
      return 'text-secondary-orange';
    case 'potencjalny klient':
      return 'text-secondary-purple';
    default:
      return 'text-gray-600';
  }
}

export function getCompanyTypeLabel(type: string): string {
  switch (type) {
    case 'klient':
      return 'Klient';
    case 'partner':
      return 'Partner';
    case 'potencjalny klient':
      return 'Potencjalny klient';
    default:
      return type;
  }
}

export function getPotentialBadgeColor(potential: string): string {
  switch (potential) {
    case 'wysoki':
      return 'bg-green-100 text-green-800';
    case 'średni':
      return 'bg-yellow-100 text-yellow-800';
    case 'niski':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
