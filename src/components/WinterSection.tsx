import { motion } from 'motion/react';
import { ChevronLeft, Snowflake, Mountain, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WinterSectionProps {
  onBack: () => void;
}

const winterActivities = [
  {
    id: 1,
    title: 'Schneeschuhlaufen',
    category: 'Winteraktivität',
    icon: Snowflake,
    description: 'Markierter Schneeschuhpfad mit verschiedenen Routen und Schneeschuhvermietung an der Talstation.',
    items: [
      'Schneeschuhmiete inkl. Stöcke Fr. 10.- / Tag',
      'Schneeschuhtouren im Mondschein mit Raclette oder Spaghetti-Plausch',
      'Markierte Schneeschuhpfade mit verschiedenen Routen'
    ],
    image: 'snowshoeing mountain',
    details: 'Mondschein-Touren inklusive Luftseilbahn retour, Schneeschuhmiete, Führung, Apero und Essen in der Lägernhütte. Ab 6 Personen, max. 16 Personen, nur auf Voranmeldung. Fr. 64.-/Person'
  },
  {
    id: 2,
    title: 'Touren',
    category: 'Ski- & Snowboardtouren',
    icon: Mountain,
    description: 'Die Bergstation Chrüzhütte 1715 m.ü.M. ist Ausgangspunkt zahlreicher Ski-, Snowboard- und Schneeschuhtouren.',
    items: [
      'Ausgangspunkt Chrüzhütte 1715 m.ü.M.',
      'Ski- und Snowboardtouren',
      'Winterpanoramakarte verfügbar'
    ],
    image: 'ski touring snow',
    details: 'Tourenvorschläge ab Bergstation Chrüzhütte 1715 m.ü.M. - ideal für erfahrene Tourengeher.'
  },
  {
    id: 3,
    title: 'Skilifte',
    category: 'Familiengebiet',
    icon: Users,
    description: 'Familienfreundliches Skigebiet mit zwei Skiliften und gemütlicher Schneebar.',
    items: [
      'Zwei Skilifte',
      'Gemütliche Schneebar Nätschboden',
      'Ideal für Familien'
    ],
    image: 'ski lift family',
    details: 'Die Skilifte und Schneebar sind bei Skiliftbetrieb geöffnet. Weitere Informationen finden Sie beim Skilift-Verein-Bannalp.'
  }
];

const winterInfo = [
  {
    title: 'Schneeschuhmiete',
    description: 'Schneeschuhe inkl. Stöcke Fr. 10.- pro Tag. Miete an der Talstation verfügbar.'
  },
  {
    title: 'Markierte Schneeschuhpfade',
    description: 'Bergstation Chrüzhütte - Bannalpsee - Berggasthaus Urnerstaffel - Chrüzhütte (2 Std. 30 Min) oder Chrüzhütte - Nätschboden - Chrüzhütte (1 Std. 30 Min).'
  },
  {
    title: 'Schneebar',
    description: 'Herzlich willkommen an der Schneebar Nätschboden. Bei Skiliftbetrieb haben wir für Sie geöffnet und verwöhnen Sie mit einer kleinen, aber feinen Karte.'
  },
  {
    title: 'Tourengebiet',
    description: 'Tourenvorschläge ab Bergstation Chrüzhütte 1715 m.ü.M. Bitte beachten Sie die aktuellen Lawinenwarnungen.'
  }
];

export default function WinterSection({ onBack }: WinterSectionProps) {
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
            Winter
          </h1>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-[50vh] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        <div className="text-center">
          <Snowflake size={64} className="text-blue-600 mx-auto mb-4" />
          <p className="text-blue-600 uppercase tracking-wide" style={{ fontSize: '11px' }}>
            winter mountain landscape
          </p>
        </div>
      </div>

      {/* Winter Activities Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <div className="mb-12">
          <h2 className="font-['Krona_One:Regular',sans-serif] mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Winteraktivitäten
          </h2>
          <p className="text-gray-600 max-w-3xl" style={{ fontSize: '15px', lineHeight: '1.8' }}>
            Entdecken Sie die vielfältigen Winteraktivitäten auf der Bannalp. Von Schneeschuhwandern über Skitouren bis hin zu entspannten Abfahrten auf unseren Familienliften.
          </p>
        </div>

        <div className="space-y-8">
          {winterActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <activity.icon size={48} className="text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-600 uppercase tracking-wide px-4" style={{ fontSize: '11px' }}>
                      {activity.image}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md uppercase tracking-wider" style={{ fontSize: '10px' }}>
                      {activity.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Krona_One:Regular',sans-serif] mb-3" style={{ fontSize: '24px' }}>
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                    {activity.description}
                  </p>

                  {/* Items List */}
                  <div className="mb-4 space-y-2">
                    {activity.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700" style={{ fontSize: '14px' }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="bg-gray-50 rounded-md p-4 border border-gray-200 mt-4">
                    <p className="text-gray-700" style={{ fontSize: '13px' }}>
                      {activity.details}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Winter Information Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-12">
        <h2 className="font-['Krona_One:Regular',sans-serif] mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          Wichtige Informationen
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {winterInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-md p-6 shadow-lg border border-gray-200"
            >
              <h4 className="uppercase tracking-wider mb-3" style={{ fontSize: '12px' }}>
                <strong>{info.title}</strong>
              </h4>
              <p className="text-gray-600" style={{ fontSize: '14px', lineHeight: '1.8' }}>
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-12">
        <div className="bg-blue-600 rounded-md p-8 text-white text-center">
          <h3 className="font-['Krona_One:Regular',sans-serif] mb-4" style={{ fontSize: '24px' }}>
            Bereit für Ihr Winterabenteuer?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: '1.8' }}>
            Planen Sie Ihren Besuch auf der Bannalp und erleben Sie unvergessliche Wintermomente in den Schweizer Alpen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide" style={{ fontSize: '13px' }}>
              Liftpreise ansehen
            </button>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors uppercase tracking-wide border border-white" style={{ fontSize: '13px' }}>
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}