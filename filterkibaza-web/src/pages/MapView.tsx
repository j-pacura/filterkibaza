import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { InteractiveMap } from '@/components/map/InteractiveMap';
import { MapFilters } from '@/components/map/MapFilters';
import { useCompanies } from '@/hooks/useCompanies';
import { useFilters } from '@/hooks/useFilters';
import { Loading } from '@/components/common/Loading';
import type { Company } from '@/types';

export function MapView() {
  const { isLoading } = useCompanies();
  const { filteredCompanies } = useFilters();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="fixed inset-0 pt-16">
      <div className="h-full flex">
        {/* Filters Sidebar */}
        <MapFilters
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />

        {/* Map Container */}
        <div className="flex-1 relative">
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-xl p-4 shadow-xl max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Interaktywna Mapa
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Wyświetlono {filteredCompanies.length} firm
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isFilterOpen
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {isFilterOpen ? (
                    <>
                      <X className="w-5 h-5" />
                      <span>Zamknij filtry</span>
                    </>
                  ) : (
                    <>
                      <Filter className="w-5 h-5" />
                      <span>Filtry</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center gap-6 pt-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-xs text-gray-600">
                    Potencjalni klienci ({filteredCompanies.filter((c) => c.type === 'potencjalny klient').length})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-xs text-gray-600">
                    Partnerzy ({filteredCompanies.filter((c) => c.type === 'partner').length})
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <div className="h-full">
            <InteractiveMap
              companies={filteredCompanies}
              selectedCompany={selectedCompany}
              onCompanyClick={setSelectedCompany}
            />
          </div>

          {/* Selected Company Info (Bottom Right) */}
          {selectedCompany && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute bottom-4 right-4 glass-card rounded-xl p-4 shadow-xl max-w-sm z-10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-gray-900">
                  {selectedCompany.name}
                </h3>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                {selectedCompany.city}, {selectedCompany.region}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {selectedCompany.industry} • {selectedCompany.employees} pracowników
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
