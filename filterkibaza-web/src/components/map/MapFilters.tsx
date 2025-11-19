import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, MapPin, Building2, Target, Users } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import { useMemo } from 'react';
import { useStore } from '@/stores/useStore';

interface MapFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MapFilters({ isOpen, onClose }: MapFiltersProps) {
  const { filters, setFilters, resetFilters, filteredCount, totalCount } = useFilters();
  const { companies } = useStore();

  // Get unique values for filters
  const uniqueRegions = useMemo(() => {
    return Array.from(new Set(companies.map((c) => c.region))).sort();
  }, [companies]);

  const uniqueIndustries = useMemo(() => {
    return Array.from(new Set(companies.map((c) => c.industry))).sort();
  }, [companies]);

  const companyTypes = ['partner', 'potencjalny klient'] as const;
  const companySizes = ['mała', 'średnia', 'duża'] as const;

  const handleRegionToggle = (region: string) => {
    const newRegions = filters.regions.includes(region)
      ? filters.regions.filter((r) => r !== region)
      : [...filters.regions, region];
    setFilters({ regions: newRegions });
  };

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = filters.industries.includes(industry)
      ? filters.industries.filter((i) => i !== industry)
      : [...filters.industries, industry];
    setFilters({ industries: newIndustries });
  };

  const handleTypeToggle = (type: typeof companyTypes[number]) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    setFilters({ types: newTypes });
  };

  const handleSizeToggle = (size: typeof companySizes[number]) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    setFilters({ sizes: newSizes });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Filter Panel */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed lg:relative left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold text-gray-900">Filtry</h2>
                </div>
                <button
                  onClick={onClose}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Results Count */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  Wyświetlono <span className="font-bold text-primary">{filteredCount}</span> z{' '}
                  <span className="font-bold">{totalCount}</span> firm
                </p>
              </div>

              {/* Reset Button */}
              {(filters.regions.length > 0 ||
                filters.industries.length > 0 ||
                filters.types.length > 0 ||
                filters.sizes.length > 0) && (
                <button
                  onClick={resetFilters}
                  className="w-full mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                >
                  Wyczyść filtry
                </button>
              )}

              {/* Type Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Typ firmy</h3>
                </div>
                <div className="space-y-2">
                  {companyTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.types.includes(type)}
                        onChange={() => handleTypeToggle(type)}
                        className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                      />
                      <span
                        className={`w-3 h-3 rounded-full ${
                          type === 'partner'
                            ? 'bg-orange-500'
                            : 'bg-purple-500'
                        }`}
                      />
                      <span className="text-sm text-gray-700">
                        {type === 'partner'
                          ? 'Partner'
                          : 'Potencjalny klient'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Wielkość firmy</h3>
                </div>
                <div className="space-y-2">
                  {companySizes.map((size) => (
                    <label
                      key={size}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={() => handleSizeToggle(size)}
                        className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {size === 'mała'
                          ? 'Mała (do 100 pracowników)'
                          : size === 'średnia'
                          ? 'Średnia (100-900 pracowników)'
                          : 'Duża (powyżej 900 pracowników)'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Województwo</h3>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {uniqueRegions.map((region) => (
                    <label
                      key={region}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.regions.includes(region)}
                        onChange={() => handleRegionToggle(region)}
                        className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {region}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <h3 className="font-semibold text-gray-900">Branża</h3>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {uniqueIndustries.map((industry) => (
                    <label
                      key={industry}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={filters.industries.includes(industry)}
                        onChange={() => handleIndustryToggle(industry)}
                        className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700 capitalize">
                        {industry}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
