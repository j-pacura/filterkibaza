import { motion } from 'framer-motion';
import { Building2, Users, Target, MapPin, TrendingUp, Sparkles } from 'lucide-react';
import { useCompanies } from '@/hooks/useCompanies';
import { Loading } from '@/components/common/Loading';
import { StatCard } from '@/components/dashboard/StatCard';
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
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
    .slice(0, 10)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));

  const industryData = Object.entries(stats.by_industry)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
    }));

  // Size distribution data
  const sizeData = Object.entries(stats.by_size || {})
    .filter(([name]) => name !== 'nieznana')
    .map(([name, value]) => ({
      subject: name.charAt(0).toUpperCase() + name.slice(1),
      value,
      fullMark: Math.max(...Object.values(stats.by_size || {}))
    }));

  const statCards = [
    {
      title: 'Wszystkie Firmy',
      value: stats.total,
      icon: Building2,
      color: '#0066FF',
      gradient: 'from-blue-500 to-blue-600',
      trend: 8.5
    },
    {
      title: 'Potencjalni Klienci',
      value: stats.by_type['potencjalny klient'] || 0,
      icon: Users,
      color: '#9C27B0',
      gradient: 'from-purple-500 to-purple-600',
      trend: 12.3
    },
    {
      title: 'Partnerzy',
      value: stats.by_type.partner || 0,
      icon: Target,
      color: '#FF6B35',
      gradient: 'from-orange-500 to-orange-600',
      trend: 5.7
    },
    {
      title: 'Województwa',
      value: Object.keys(stats.by_region).length,
      icon: MapPin,
      color: '#00C853',
      gradient: 'from-green-500 to-green-600',
      trend: 0
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">FiltroKibaza Analytics</span>
          </motion.div>

          <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Dashboard
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Kompleksowy przegląd bazy firm związanych z filtracją przemysłową
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <StatCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Region Chart with gradient */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Top 10 Województw</h2>
                  <p className="text-white/50 text-sm">Najwięcej firm w regionie</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={regionData}>
                  <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0066FF" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0066FF" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  />
                  <YAxis tick={{ fill: 'rgba(255,255,255,0.7)' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="url(#colorBar)"
                    radius={[12, 12, 0, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Type Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-orange-500 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Podział według typu</h2>
                  <p className="text-white/50 text-sm">Struktura bazy danych</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <defs>
                    <linearGradient id="partnerGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FF6B35" />
                      <stop offset="100%" stopColor="#FF8C66" />
                    </linearGradient>
                    <linearGradient id="clientGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9C27B0" />
                      <stop offset="100%" stopColor="#BA68C8" />
                    </linearGradient>
                  </defs>
                  <Pie
                    data={typeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(props) => {
                      const data = typeData.find((d) => d.name === props.name);
                      return `${props.name}: ${data?.percentage}%`;
                    }}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {typeData.map((entry) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={entry.name === 'Partnerzy' ? 'url(#partnerGradient)' : 'url(#clientGradient)'}
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="flex justify-center gap-6 mt-4">
                {typeData.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${
                      entry.name === 'Partnerzy' ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`} />
                    <span className="text-white/80 text-sm font-medium">
                      {entry.name} ({entry.value})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industry and Size Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Industry Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Top 8 Branż</h2>
                  <p className="text-white/50 text-sm">Najpopularniejsze sektory</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={industryData} layout="vertical">
                  <defs>
                    <linearGradient id="industryGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#FF6B35" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.7)' }} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={150}
                    tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="url(#industryGradient)"
                    radius={[0, 12, 12, 0]}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Size Radar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Wielkość Firm</h2>
                  <p className="text-white/50 text-sm">Rozkład według rozmiaru</p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={sizeData}>
                  <defs>
                    <linearGradient id="sizeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00C853" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00C853" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <PolarGrid stroke="rgba(255,255,255,0.2)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                  />
                  <PolarRadiusAxis tick={{ fill: 'rgba(255,255,255,0.7)' }} />
                  <Radar
                    name="Firmy"
                    dataKey="value"
                    stroke="#00C853"
                    fill="url(#sizeGradient)"
                    fillOpacity={0.6}
                    animationDuration={1500}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: 'none',
                      borderRadius: '12px',
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
