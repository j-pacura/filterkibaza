import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  gradient: string;
  index: number;
  trend?: number; // Percentage change
}

export function StatCard({ title, value, icon: Icon, color, gradient, index, trend }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        y: -10,
        rotateY: 5,
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="relative group"
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500`} />

      {/* Card */}
      <div className="relative glass-card rounded-2xl p-6 overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
        {/* Background gradient */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl -mr-16 -mt-16`} />

        {/* Icon with pulse animation */}
        <div className="relative flex items-center justify-between mb-4">
          <motion.div
            className={`p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg relative`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 blur-md rounded-2xl`} />
            <Icon className="w-7 h-7 text-white relative z-10" />
          </motion.div>

          {/* Trend indicator */}
          {trend !== undefined && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              trend >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              <span className="text-xs font-bold">
                {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
              </span>
            </div>
          )}
        </div>

        {/* Stats */}
        <h3 className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wider">
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <AnimatedCounter
            value={value}
            className={`text-4xl font-black bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          />
        </div>

        {/* Mini sparkline effect */}
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
             style={{ color: color }} />
      </div>
    </motion.div>
  );
}
