import { motion } from 'motion/react';
import { ChevronLeft, Sun, Footprints, Mountain, Heart } from 'lucide-react';

interface SummerSectionProps {
    onBack: () => void;
}

const summerActivities = [
    {
        id: 1,
        title: 'Wandern',
        category: 'Sommeraktivität',
        icon: Mountain,
        description: 'Diverse Wanderrouten in einer einzigartigen Bergwelt.',
        items: [
            'Wandervorschläge verfügbar',
            'Sommerpanoramakarte',
            'Verschiedene Schwierigkeitsgrade'
        ],
        image: 'mountain hiking trails',
        details: 'Entdecken Sie die vielfältigen Wanderwege rund um die Bannalp mit atemberaubenden Ausblicken auf die Urner Alpen.'
    },
    {
        id: 2,
        title: 'Kinderwanderweg Zwärgliweg',
        category: 'Familie',
        icon: Footprints,
        description: 'Das Geheimnis des funkelnden Steins - Kinderwanderweg mit sieben Stationen.',
        items: [
            'Kinderwanderweg mit sieben Stationen',
            'Start bei Bergstation Chrüzhütte',
            'Ende am Bannalpsee',
            'Reine Marschzeit: 1 Stunde',
            'Feuerstellen mit Holzvorrat am Bannalpsee'
        ],
        image: 'children hiking trail',
        details: '"mit em blaiä Bähnli obsi und mim rotä Bähnli nitzi" - Billette gültig auf beiden Bahnen. www.kinderwanderwege.ch'
    },
    {
        id: 3,
        title: 'Höhenwanderweg Walenpfad',
        category: 'Tageswanderung',
        icon: Mountain,
        description: 'Eindrücklicher Höhenwanderweg von der Bannalp zum Brunni (Engelberg).',
        items: [
            'Über das Waleggg - einer der schönsten Aussichtspunkte',
            'Marschzeit ca. 3.5 - 4 Std.',
            'Rundreiseticket verfügbar',
            'Transportpartner: Zentralbahn, Postauto, LSB Bannalp, LSB Engelberg-Ristis'
        ],
        image: 'alpine hiking path',
        details: 'Eindrücklicher Höhenwanderweg über das Waleggg im Engelbergertal. Weitere Informationen auf www.walenpfad.ch'
    },
    {
        id: 4,
        title: 'Geissen-Wandern',
        category: 'Erlebniswanderung',
        icon: Heart,
        description: 'Wandern mit Geissen entschleunigt den Alltag, erfrischt die Seele und wärmt das Herz.',
        items: [
            'Geissen-Wanderung am Bannalpsee',
            'Geeignet für Jung und Alt',
            'Jeweils im Sommer'
        ],
        image: 'goat hiking experience',
        details: 'Kommen Sie mit uns auf eine unvergessliche Geissen-Wanderung mitten in der wunderschönen Berglandschaft. Evelyn Jenzer Scheidegger & Thomas Scheidegger, Tel. 079 324 37 14, www.geissen-wandern.ch'
    }
];

const summerInfo = [
    {
        title: 'Sommersaison',
        description: 'Die Luftseilbahnen und Wanderwege sind von Mitte Mai bis Mitte Oktober geöffnet. Erleben Sie die Bannalp in ihrer ganzen Sommerpracht.'
    },
    {
        title: 'Zwärgliweg Details',
        description: 'Der Kinderwanderweg startet bei der Bergstation Chrüzhütte und endet am Bannalpsee, ca. 10 Min. von der Bergstation Bannalpsee entfernt.'
    },
    {
        title: 'Walenpfad Rundreise',
        description: 'Die Transportpartner des Walenpfads bieten ein Rundreiseticket für die Strecken der Zentralbahn, des Postautos und der Luftseilbahnen an.'
    },
    {
        title: 'Panoramakarten',
        description: 'Sommer- und Wanderpanoramakarten sind verfügbar und zeigen Ihnen die schönsten Routen und Aussichtspunkte.'
    }
];

export default function SummerSection({ onBack }: SummerSectionProps) {
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
                        Sommer
                    </h1>
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[50vh] bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                    <Sun size={64} className="text-blue-600 mx-auto mb-4" />
                    <p className="text-blue-600 uppercase tracking-wide" style={{ fontSize: '11px' }}>
                        summer mountain landscape
                    </p>
                </div>
            </div>

            {/* Summer Activities Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
                <div className="mb-12">
                    <h2 className="mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                        Sommeraktivitäten
                    </h2>
                    <p className="text-gray-600 max-w-3xl" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                        Erleben Sie die Bannalp im Sommer mit vielfältigen Wandermöglichkeiten - vom familienfreundlichen Zwärgliweg über den eindrücklichen Walenpfad bis hin zu unvergesslichen Geissen-Wanderungen.
                    </p>
                </div>

                <div className="space-y-8">
                    {summerActivities.map((activity, index) => (
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
                                    <h3 className="mb-3" style={{ fontSize: '24px' }}>
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

            {/* Summer Information Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-12">
                <h2 className="mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                    Wichtige Informationen
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {summerInfo.map((info, index) => (
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
                    <h3 className="mb-4" style={{ fontSize: '24px' }}>
                        Bereit für Ihr Sommerabenteuer?
                    </h3>
                    <p className="mb-6 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                        Planen Sie Ihren Besuch auf der Bannalp und erleben Sie unvergessliche Sommermomente in den Schweizer Alpen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors uppercase tracking-wide" style={{ fontSize: '13px' }}>
                            Fahrplan ansehen
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
