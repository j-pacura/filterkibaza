import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Building2, Phone, Mail, Globe, MapPin, Users } from 'lucide-react';
import type { Company } from '@/types';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const markerIcons = {
  partner: createCustomIcon('#FF6B35'),
  'potencjalny klient': createCustomIcon('#9C27B0'),
};

interface InteractiveMapProps {
  companies: Company[];
  selectedCompany?: Company | null;
  onCompanyClick?: (company: Company) => void;
}

function MapController({ companies }: { companies: Company[] }) {
  const map = useMap();

  useEffect(() => {
    if (companies.length > 0) {
      const bounds = L.latLngBounds(
        companies.map((c) => [c.lat, c.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
    }
  }, [companies, map]);

  return null;
}

export function InteractiveMap({
  companies,
  onCompanyClick,
}: InteractiveMapProps) {

  const defaultCenter: [number, number] = [52.0, 19.0]; // Center of Poland
  const defaultZoom = 6;

  return (
    <div className="h-full w-full rounded-xl overflow-hidden shadow-2xl">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController companies={companies} />

        {companies.map((company) => (
          <Marker
            key={company.id}
            position={[company.lat, company.lng]}
            icon={markerIcons[company.type]}
            eventHandlers={{
              click: () => onCompanyClick?.(company),
            }}
          >
            <Popup
              className="custom-popup"
              maxWidth={300}
            >
              <div className="p-2">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {company.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        company.type === 'partner'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {company.type === 'partner'
                        ? 'Partner'
                        : 'Potencjalny klient'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span>{company.industry}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>
                      {company.city}, {company.region}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{company.employees} pracowników</span>
                  </div>

                  {company.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a
                        href={`tel:${company.phone}`}
                        className="text-primary hover:underline"
                      >
                        {company.phone}
                      </a>
                    </div>
                  )}

                  {company.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a
                        href={`mailto:${company.email}`}
                        className="text-primary hover:underline"
                      >
                        {company.email}
                      </a>
                    </div>
                  )}

                  {company.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Strona WWW
                      </a>
                    </div>
                  )}
                </div>

                {company.description && (
                  <p className="mt-3 text-xs text-gray-600 border-t pt-2">
                    {company.description.slice(0, 150)}
                    {company.description.length > 150 ? '...' : ''}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
