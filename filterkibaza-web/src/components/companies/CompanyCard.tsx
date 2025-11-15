import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Phone, Mail, Globe, TrendingUp } from 'lucide-react';
import type { Company } from '@/types';
import { getPotentialBadgeColor, getCompanyTypeLabel } from '@/lib/utils';

interface CompanyCardProps {
  company: Company;
  index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  const typeColors = {
    partner: 'border-orange-500 bg-orange-50',
    'potencjalny klient': 'border-purple-500 bg-purple-50',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`glass-card rounded-xl p-6 cursor-pointer border-l-4 ${
        typeColors[company.type]
      } hover:shadow-2xl transition-all`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {company.name}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                company.type === 'partner'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {getCompanyTypeLabel(company.type)}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${getPotentialBadgeColor(
                company.potential
              )}`}
            >
              Potencjał: {company.potential}
            </span>
          </div>
        </div>
        <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-lg">
          <Building2 className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Building2 className="w-4 h-4 text-gray-400" />
          <span className="font-medium">{company.industry}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>
            {company.city}, {company.region}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Users className="w-4 h-4 text-gray-400" />
          <span>{company.employees} pracowników</span>
        </div>

        {company.revenue && (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <TrendingUp className="w-4 h-4 text-gray-400" />
            <span>{company.revenue}</span>
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
        {company.phone && (
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="w-4 h-4" />
            <span>{company.phone}</span>
          </a>
        )}

        {company.email && (
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail className="w-4 h-4" />
            <span className="truncate">{company.email}</span>
          </a>
        )}

        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-4 h-4" />
            <span className="truncate">Strona WWW</span>
          </a>
        )}
      </div>

      {/* Description */}
      {company.description && (
        <p className="mt-4 text-xs text-gray-600 line-clamp-2">
          {company.description}
        </p>
      )}
    </motion.div>
  );
}
