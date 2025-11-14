import { motion } from 'framer-motion';

export function MapView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mapa Firm</h1>
          <p className="text-gray-600">
            Interaktywna mapa z rozmieszczeniem wszystkich firm
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-xl p-8 text-center"
        >
          <p className="text-gray-600">Mapa będzie dostępna wkrótce...</p>
        </motion.div>
      </div>
    </div>
  );
}
