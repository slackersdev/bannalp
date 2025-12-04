import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsItems = [
  {
    id: 1,
    title: 'Saisonstart 2024/2025',
    date: '2024-12-01',
    time: '09:00',
    category: 'Allgemein',
    excerpt: 'Wir freuen uns, den Start der neuen Wintersaison bekannt zu geben. Alle Lifte sind ab dem 15. Dezember in Betrieb.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
  },
  {
    id: 2,
    title: 'Neue Schneebar eröffnet',
    date: '2024-11-25',
    time: '14:30',
    category: 'Gastronomie',
    excerpt: 'Geniessen Sie heisse Getränke und Snacks in unserer brandneuen Schneebar direkt an der Mittelstation.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
  },
  {
    id: 3,
    title: 'Wartungsarbeiten abgeschlossen',
    date: '2024-11-20',
    time: '10:15',
    category: 'Technik',
    excerpt: 'Alle Liftanlagen wurden umfassend gewartet und modernisiert. Höchste Sicherheit und Komfort garantiert.',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 px-6 md:px-16 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-12 border-b-2 border-gray-300 pb-4">
            <h2 className="" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Aktuelles
            </h2>
            <button className="hidden md:flex items-center gap-2 text-black hover:opacity-70 transition-opacity uppercase tracking-wider" style={{ fontSize: '12px' }}>
              Alle Neuigkeiten
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 uppercase tracking-wider shadow-md" style={{ fontSize: '10px' }}>
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-gray-500 mb-3 border-b border-gray-200 pb-2" style={{ fontSize: '11px' }}>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-blue-600" />
                        <span>{new Date(item.date).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-blue-600" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    <h3 className="mb-3 group-hover:text-blue-600 transition-all uppercase tracking-wide" style={{ fontSize: '14px' }}>
                      {item.title}
                    </h3>

                    <p className="text-gray-700 mb-4" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                      {item.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider" style={{ fontSize: '11px' }}>
                      <span>Weiterlesen</span>
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}