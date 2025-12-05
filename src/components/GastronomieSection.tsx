import { motion } from 'motion/react';
import { MapPin, Phone, Globe, Mail, ChevronLeft, Utensils, Bed } from 'lucide-react';

// Import images
import bannalpseeImg from '../assets/images/gastro/Berggasthaus_Bannalpsee.jpg';
import urnerstaffelImg from '../assets/images/gastro/Berggasthaus_Urnerstaffel.png';
import chruezhuetteImg from '../assets/images/gastro/Alpwirtschaft_Chruezhuette.jpg';
import oberfeldImg from '../assets/images/gastro/Alpwirtschaft_Oberfeld.jpg';
import haghütteImg from '../assets/images/gastro/Alp_Haghuette.jpg';
import schneebarImg from '../assets/images/gastro/Schneebar_Naetschbode.jpg';
import heimeligImg from '../assets/images/gastro/Berghaus_Heimelig.jpg';
import laegernImg from '../assets/images/gastro/Laegernhuette.jpg';

interface GastronomieSectionProps {
  onBack: () => void;
}

const restaurants = [
  {
    id: 1,
    name: 'Berggasthaus Bannalpsee',
    type: 'restaurant', // Also accommodation, but primary category in list
    category: 'Berggasthaus',
    description: 'Mitte Mai bis Mitte Oktober Übernachtungsmöglichkeit bis 70 Personen im Zimmer oder Massenlager. Kinderfreundliches Restaurant mit grosser Terrasse am See, Kinderspielplatz.',
    address: 'Bannalpsee',
    phone: '041 628 15 56',
    email: '', // No email provided in text
    website: 'https://www.restaurant-bannalpsee.ch',
    image: bannalpseeImg,
    hours: 'Mitte Mai bis Mitte Oktober'
  },
  {
    id: 2,
    name: 'Berggasthaus Urnerstaffel',
    type: 'restaurant',
    category: 'Berggasthaus',
    description: 'Ab dem 03. Oktober bis Ende Oktober bei schönem Wetter wieder geöffnet.',
    address: 'Urnerstaffel',
    phone: '', // No phone provided in text section, checking contact at bottom... none specific to Urnerstaffel in text block
    email: '',
    website: 'https://www.urnerstaffel.com',
    image: urnerstaffelImg,
    hours: 'Ab 03. Okt bis Ende Okt bei schönem Wetter'
  },
  {
    id: 3,
    name: 'Alpwirtschaft Chrüzhütte',
    type: 'accommodation', // Highlight accommodation features
    category: 'Alpwirtschaft',
    description: 'Gemütliches Gästehaus, Küche für Selbstkochgelegenheit, Betten bezogen, Gruppenzimmer beheizt, Spielwiese, Feuerstelle, zwei Aufenthaltsräume. Direkt am Walenpfad, neben Skilift.',
    address: 'Chrüzhütte',
    phone: '041 628 23 09',
    email: 'info@berghof.ch',
    website: 'https://www.berghof.ch',
    image: chruezhuetteImg,
    hours: 'Im Sommer bewirtet'
  },
  {
    id: 4,
    name: 'Alpwirtschaft Oberfeld',
    type: 'restaurant',
    category: 'Alpwirtschaft',
    description: 'Gemütliches Bergbeizli am Walenpfad. Diverse Produkte vom Bio-Betrieb. Übernachtung in der Oberfeld-Suite.',
    address: 'Oberfeld',
    phone: '079 728 50 60',
    email: '',
    website: 'https://www.ifaengi.ch',
    image: oberfeldImg,
    hours: 'Juni bis Oktober'
  },
  {
    id: 5,
    name: 'Alp Haghütte',
    type: 'restaurant',
    category: 'Alpbeizli',
    description: 'Herzlich willkommen in unserem gemütlichen Alpbeizli auf 1510 m.ü.M. Geniessen Sie hausgemachte Käse- und Fleischspezialitäten.',
    address: 'Alp Haghütte',
    phone: '079 311 32 63',
    email: '',
    website: '',
    image: haghütteImg,
    hours: 'Sommerbetrieb 10:00 - 16:00'
  },
  {
    id: 6,
    name: 'Schneebar Nätschbode',
    type: 'restaurant',
    category: 'Schneebar',
    description: 'Offen bei Skiliftbetrieb. Wir verwöhnen Sie mit einer kleinen, aber feinen Karte.',
    address: 'Nätschbode',
    phone: '',
    email: '',
    website: 'https://www.skiliftverein-bannalp.ch',
    image: schneebarImg,
    hours: 'Bei Skiliftbetrieb'
  },
  {
    id: 7,
    name: 'Berghaus Heimelig',
    type: 'accommodation',
    category: 'Berghaus',
    description: 'Gemütliches Gästehaus, Selbstversorger, Betten mit Decken bezogen, Aussengrill, Spielwiese, Terrasse mit grandiosem Ausblick.',
    address: 'Heimelig',
    phone: '041 628 23 09',
    email: 'info@berghof.ch',
    website: 'https://www.berghof.ch',
    image: heimeligImg,
    hours: ''
  },
  {
    id: 8,
    name: 'Lägernhütte',
    type: 'accommodation',
    category: 'Hütte',
    description: 'Massenlager für 20 Personen, nordisch eingerichtet, grosse Terrasse mit Aussengrill, zwei Nasszellen und eine Dusche.',
    address: 'Lägernhütte',
    phone: '041 520 75 59',
    email: '',
    website: 'https://www.laegernhuette.ch',
    image: laegernImg,
    hours: ''
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
          <h1 className="" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Gastronomie & Unterkünfte
          </h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4">
          <div className="flex flex-col md:flex-row gap-4">
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
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
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
                <h3 className="mb-3" style={{ fontSize: '20px' }}>
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
                  {place.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone size={16} className="flex-shrink-0" />
                      <a href={`tel:${place.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors" style={{ fontSize: '13px' }}>
                        {place.phone}
                      </a>
                    </div>
                  )}
                  {place.email && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail size={16} className="flex-shrink-0" />
                      <a href={`mailto:${place.email}`} className="hover:text-blue-600 transition-colors" style={{ fontSize: '13px' }}>
                        {place.email}
                      </a>
                    </div>
                  )}
                  {place.website && (
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
                  )}
                </div>

                {/* Hours */}
                {place.hours && (
                  <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                    <p className="text-gray-600 uppercase tracking-wider" style={{ fontSize: '11px' }}>
                      Öffnungszeiten
                    </p>
                    <p className="text-gray-800 mt-1" style={{ fontSize: '13px' }}>
                      {place.hours}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  {place.website && (
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors uppercase tracking-wide"
                      style={{ fontSize: '12px' }}
                    >
                      Mehr Info
                    </a>
                  )}
                  {place.phone && (
                    <a
                      href={`tel:${place.phone.replace(/\s/g, '')}`}
                      className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors uppercase tracking-wide"
                      style={{ fontSize: '12px' }}
                    >
                      Anrufen
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-12">
        <div className="bg-blue-50 rounded-md p-8 border border-blue-200">
          <h3 className="mb-4" style={{ fontSize: '20px' }}>
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

