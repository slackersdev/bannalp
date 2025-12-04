import { motion } from 'motion/react';
import { MapPin, Phone, Globe, Mail, ChevronLeft, Utensils, Bed } from 'lucide-react';

interface GastronomieSectionProps {
  onBack: () => void;
}

const restaurants = [
  {
    id: 1,
    name: 'Bergrestaurant Bannalp',
    type: 'restaurant',
    category: 'Bergrestaurant',
    description: 'Traditionelle Schweizer Küche mit atemberaubender Aussicht auf die Urner Alpen.',
    address: 'Bergstation Bannalp, 6467 Schattdorf',
    phone: '+41 41 879 11 75',
    email: 'info@bannalp.ch',
    website: 'https://www.bannalp.ch',
    image: 'mountain restaurant',
    hours: 'Täglich 08:30 - 17:00'
  },
  {
    id: 2,
    name: 'Chrüzhütte',
    type: 'restaurant',
    category: 'Berghütte',
    description: 'Gemütliche Berghütte mit hausgemachten Spezialitäten und regionalen Produkten.',
    address: 'Chrüzboden, 6467 Schattdorf',
    phone: '+41 41 879 15 22',
    email: 'kontakt@chruezhuette.ch',
    website: 'https://www.chruezhuette.ch',
    image: 'alpine cabin restaurant',
    hours: 'Mi - So 09:00 - 16:30'
  },
  {
    id: 3,
    name: 'Waldstätterhof',
    type: 'accommodation',
    category: 'Hotel & Restaurant',
    description: 'Familienbetrieb mit komfortablen Zimmern und ausgezeichneter Gastronomie.',
    address: 'Dorfstrasse 55, 6467 Schattdorf',
    phone: '+41 41 879 10 45',
    email: 'info@waldstaetterhof.ch',
    website: 'https://www.waldstaetterhof.ch',
    image: 'swiss hotel',
    hours: 'Restaurant: 11:30 - 14:00 & 18:00 - 21:00'
  },
  {
    id: 4,
    name: 'Berggasthaus Urnerboden',
    type: 'accommodation',
    category: 'Berggasthaus',
    description: 'Authentisches Berggasthaus mit Übernachtungsmöglichkeiten direkt an den Pisten.',
    address: 'Urnerboden 12, 6467 Schattdorf',
    phone: '+41 41 879 12 88',
    email: 'info@urnerboden.ch',
    website: 'https://www.urnerboden.ch',
    image: 'mountain inn',
    hours: 'Täglich 08:00 - 22:00'
  },
  {
    id: 5,
    name: 'Gipfelstübli',
    type: 'restaurant',
    category: 'Selbstbedienung',
    description: 'Schneller Service und lokale Snacks direkt an der Bergstation.',
    address: 'Bergstation Bannalp, 6467 Schattdorf',
    phone: '+41 41 879 11 80',
    email: 'gipfelstuebli@bannalp.ch',
    website: 'https://www.bannalp.ch/gipfelstuebli',
    image: 'alpine cafeteria',
    hours: 'Täglich 09:00 - 16:30'
  },
  {
    id: 6,
    name: 'Pension Alpenblick',
    type: 'accommodation',
    category: 'Pension',
    description: 'Gemütliche Pension mit herzlichem Service und Panoramablick.',
    address: 'Bergstrasse 28, 6467 Schattdorf',
    phone: '+41 41 879 13 45',
    email: 'info@alpenblick-uri.ch',
    website: 'https://www.alpenblick-uri.ch',
    image: 'alpine guesthouse',
    hours: 'Check-in: 14:00 - 18:00'
  }
];

export default function GastronomieSection({ onBack }: GastronomieSectionProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4"
          >
            <ChevronLeft size={20} />
            <span className="uppercase tracking-wide" style={{ fontSize: '13px' }}>Zurück</span>
          </button>
          <h1 className="font-['Krona_One:Regular',sans-serif]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Gastronomie & Unterkünfte
          </h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-md uppercase tracking-wide" style={{ fontSize: '12px' }}>
              <Utensils size={16} />
              Alle
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md uppercase tracking-wide transition-colors" style={{ fontSize: '12px' }}>
              <Utensils size={16} />
              Restaurants
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-md uppercase tracking-wide transition-colors" style={{ fontSize: '12px' }}>
              <Bed size={16} />
              Unterkünfte
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {restaurants.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  {place.type === 'restaurant' ? (
                    <Utensils size={48} className="text-blue-600 mx-auto mb-2" />
                  ) : (
                    <Bed size={48} className="text-blue-600 mx-auto mb-2" />
                  )}
                  <p className="text-blue-600 uppercase tracking-wide" style={{ fontSize: '11px' }}>
                    {place.image}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md uppercase tracking-wider" style={{ fontSize: '10px' }}>
                    {place.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-['Krona_One:Regular',sans-serif] mb-3" style={{ fontSize: '20px' }}>
                  {place.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4" style={{ fontSize: '14px' }}>
                  {place.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 border-t border-gray-200 pt-4">
                  <div className="flex items-start gap-2 text-gray-700">
                    <MapPin size={16} className="mt-1 flex-shrink-0" />
                    <span style={{ fontSize: '13px' }}>{place.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={16} className="flex-shrink-0" />
                    <a href={`tel:${place.phone}`} className="hover:text-blue-600 transition-colors" style={{ fontSize: '13px' }}>
                      {place.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={16} className="flex-shrink-0" />
                    <a href={`mailto:${place.email}`} className="hover:text-blue-600 transition-colors" style={{ fontSize: '13px' }}>
                      {place.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Globe size={16} className="flex-shrink-0" />
                    <a 
                      href={place.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors underline" 
                      style={{ fontSize: '13px' }}
                    >
                      Website besuchen
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <p className="text-gray-600 uppercase tracking-wider" style={{ fontSize: '11px' }}>
                    Öffnungszeiten
                  </p>
                  <p className="text-gray-800 mt-1" style={{ fontSize: '13px' }}>
                    {place.hours}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={place.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors uppercase tracking-wide"
                    style={{ fontSize: '12px' }}
                  >
                    Mehr Info
                  </a>
                  <a
                    href={`tel:${place.phone}`}
                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors uppercase tracking-wide"
                    style={{ fontSize: '12px' }}
                  >
                    Anrufen
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-12">
        <div className="bg-blue-50 rounded-md p-8 border border-blue-200">
          <h3 className="font-['Krona_One:Regular',sans-serif] mb-4" style={{ fontSize: '20px' }}>
            Reservierung empfohlen
          </h3>
          <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
            In der Hochsaison empfehlen wir eine Reservierung. Bitte kontaktieren Sie die Betriebe direkt per Telefon oder über deren Website.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-md p-4 border border-blue-200">
              <h4 className="uppercase tracking-wider mb-2" style={{ fontSize: '12px' }}>
                <strong>Wintersaison</strong>
              </h4>
              <p className="text-gray-600" style={{ fontSize: '13px' }}>
                Dezember - März: Täglich geöffnet
              </p>
            </div>
            <div className="bg-white rounded-md p-4 border border-blue-200">
              <h4 className="uppercase tracking-wider mb-2" style={{ fontSize: '12px' }}>
                <strong>Sommersaison</strong>
              </h4>
              <p className="text-gray-600" style={{ fontSize: '13px' }}>
                Juni - September: Eingeschränkte Öffnungszeiten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
