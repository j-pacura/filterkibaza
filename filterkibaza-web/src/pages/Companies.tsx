import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { SearchBar } from '@/components/companies/SearchBar';
import { CompanyCard } from '@/components/companies/CompanyCard';
import { MapFilters } from '@/components/map/MapFilters';
import { useCompanies } from '@/hooks/useCompanies';
import { useFilters } from '@/hooks/useFilters';
import { Loading } from '@/components/common/Loading';

export function Companies() {
  const { isLoading } = useCompanies();
  const { filteredCompanies, filteredCount, totalCount, resetFilters } = useFilters();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Baza Firm
              </h1>
              <p className="text-gray-600">
                Przeglądaj wszystkie firmy związane z filtracją
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                isFilterOpen
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtry</span>
            </motion.button>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex items-center justify-between"
          >
            <p className="text-sm text-gray-600">
              Wyświetlono <span className="font-bold text-primary">{filteredCount}</span> z{' '}
              <span className="font-bold">{totalCount}</span> firm
            </p>
            {filteredCount < totalCount && (
              <button
                onClick={resetFilters}
                className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Wyczyść filtry
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {isFilterOpen && (
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <MapFilters
                  isOpen={true}
                  onClose={() => setIsFilterOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Mobile Filters */}
          <div className="lg:hidden">
            <MapFilters
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>

          {/* Companies Grid/List */}
          <div className="flex-1">
            {filteredCompanies.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-xl p-12 text-center"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Nie znaleziono firm
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Spróbuj zmienić kryteria wyszukiwania lub filtry
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Wyczyść filtry
                  </button>
                </div>
              </motion.div>
            ) : (
              <div
                className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                }`}
              >
                {filteredCompanies.map((company, index) => (
                  <CompanyCard
                    key={company.id}
                    company={company}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
