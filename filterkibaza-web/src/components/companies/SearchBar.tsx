import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '@/stores/useStore';
import { debounce } from '@/lib/utils';
import { useMemo } from 'react';

export function SearchBar() {
  const { filters, setFilters } = useStore();

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setFilters({ searchQuery: query });
      }, 300),
    [setFilters]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setFilters({ searchQuery: '' });
    const input = document.getElementById('search-input') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          id="search-input"
          type="text"
          placeholder="Szukaj firm po nazwie, mieście lub branży..."
          defaultValue={filters.searchQuery}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 placeholder-gray-400"
        />
        {filters.searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
