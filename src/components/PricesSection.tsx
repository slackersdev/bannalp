import { motion } from 'motion/react';
import { ArrowLeft, Info } from 'lucide-react';

interface PricesSectionProps {
    onBack: () => void;
}

export default function PricesSection({ onBack }: PricesSectionProps) {
    return (
        <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Zurück zur Startseite
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarife</h1>
                    <p className="text-xl text-gray-600 mb-12">
                        Luftseilbahnen Fell-Chrüzhütte und Skilifte Bannalp
                    </p>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Kategorie</th>
                                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Tageskarte</th>
                                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Halb-Tageskarte <span className="text-sm font-normal text-gray-500 block">(ab 12.00 Uhr)</span></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {/* Standard */}
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Erwachsene <span className="text-gray-500 font-normal text-sm">(ab 16 Jahren)</span></td>
                                        <td className="py-4 px-6 text-gray-600">CHF 34.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 25.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Kinder <span className="text-gray-500 font-normal text-sm">(ab 6 Jahren)</span></td>
                                        <td className="py-4 px-6 text-gray-600">CHF 24.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 18.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Senioren <span className="text-gray-500 font-normal text-sm">(ab AHV-Alter)</span></td>
                                        <td className="py-4 px-6 text-gray-600">CHF 31.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 23.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Lehrling / Studenten <span className="text-gray-500 font-normal text-sm">(mit Ausweis)</span></td>
                                        <td className="py-4 px-6 text-gray-600">CHF 31.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 23.00</td>
                                    </tr>

                                    {/* Groups Header */}
                                    <tr className="bg-gray-50/30">
                                        <td colSpan={3} className="py-3 px-6 text-gray-900 font-semibold border-t border-gray-100 mt-4">Gruppen ab 15 Personen</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Erwachsene</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 31.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 23.00</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Kinder</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 22.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 17.00</td>
                                    </tr>

                                    {/* Family Header */}
                                    <tr className="bg-gray-50/30">
                                        <td colSpan={3} className="py-3 px-6 text-gray-900 font-semibold border-t border-gray-100 mt-4">Familien-Skibillette</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-gray-900 font-medium">Eltern mit eigenen Kindern <span className="text-gray-500 font-normal text-sm">(unter 18 Jahren)</span></td>
                                        <td className="py-4 px-6 text-gray-600">CHF 90.00</td>
                                        <td className="py-4 px-6 text-gray-600">CHF 65.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 flex items-start gap-4 mb-8">
                        <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h4 className="font-semibold text-blue-900 mb-1">Wichtige Information</h4>
                            <p className="text-blue-800 text-sm">
                                GA, Halbtax und Juniorkarte haben bei uns keine Gültigkeit.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
