import { Building2, Users, Award, MapPin } from 'lucide-react';
import { useCompanies } from '@/hooks/useCompanies';
import { Loading } from '@/components/common/Loading';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export function Dashboard() {
  const { database, isLoading } = useCompanies();

  if (isLoading || !database) {
    return <Loading />;
  }

  const stats = database.statistics;

  // Prepare data for charts
  const typeData = Object.entries(stats.by_type).map(([name, value]) => ({
    name: name === 'partner' ? 'Partnerzy' : 'Potencjalni klienci',
    value,
    percentage: ((value / stats.total) * 100).toFixed(1)
  }));

  const regionData = Object.entries(stats.by_region)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value
    }));

  const industryData = Object.entries(stats.by_industry)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value
    }));

  const COLORS = {
    partner: '#2563eb',
    client: '#8b5cf6'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-3">Dashboard - Przegląd Bazy</h1>
            <p className="text-blue-100 text-lg">
              Kompleksowa analityka i statystyki dla {stats.total} firm w bazie danych
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Companies */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                +5.8%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Wszystkie Firmy</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>

          {/* Potential Clients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                +12.3%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Potencjalni Klienci</h3>
            <p className="text-3xl font-bold text-gray-900">
              {stats.by_type['potencjalny klient'] || 0}
            </p>
          </div>

          {/* Partners */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                +7.2%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Partnerzy</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.by_type['partner'] || 0}</p>
          </div>

          {/* Regions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
                Stałe
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">Województwa</h3>
            <p className="text-3xl font-bold text-gray-900">
              {Object.keys(stats.by_region).length}
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Regional Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Rozkład Regionalny</h2>
              <span className="text-sm text-gray-500">Top 8 województw</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Type Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Podział według typu</h2>
              <span className="text-sm text-gray-500">{stats.total} firm</span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={typeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(props) => {
                    const entry = typeData.find((d) => d.name === props.name);
                    return entry ? `${entry.name}: ${entry.percentage}%` : '';
                  }}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {typeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.name === 'Partnerzy' ? COLORS.partner : COLORS.client}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Industry Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Top 6 Branż</h2>
            <span className="text-sm text-gray-500">Według liczby firm</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={industryData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                width={120}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {stats.by_size?.duża || 0}
              </div>
              <div className="text-sm text-gray-600 mt-1">Duże firmy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {stats.by_size?.średnia || 0}
              </div>
              <div className="text-sm text-gray-600 mt-1">Średnie firmy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {stats.by_size?.mała || 0}
              </div>
              <div className="text-sm text-gray-600 mt-1">Małe firmy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {Object.keys(stats.by_industry).length}
              </div>
              <div className="text-sm text-gray-600 mt-1">Branż</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
