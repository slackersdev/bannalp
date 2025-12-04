import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Kontakt
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-6 uppercase tracking-wider border-b border-gray-300 pb-3">
                Kontaktieren Sie uns
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
                  <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1 uppercase tracking-wider" style={{ fontSize: '11px' }}>Adresse</div>
                    <div style={{ fontSize: '13px' }}>Luftseilbahnen Bannalp AG<br />Fell3<br />6387 Oberrickenbach<br />Schweiz</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
                  <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1 uppercase tracking-wider" style={{ fontSize: '11px' }}>Telefon</div>
                    <div style={{ fontSize: '13px' }}>+41 41 628 16 33</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
                  <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1 uppercase tracking-wider" style={{ fontSize: '11px' }}>Email</div>
                    <div style={{ fontSize: '13px' }}>mail@bannalp.ch</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
                  <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1 uppercase tracking-wider" style={{ fontSize: '11px' }}>Öffnungszeiten</div>
                    <div style={{ fontSize: '13px' }}>
                      08:00 - 12:00<br />
                      13:00 - 17:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow-lg p-8">
              <h3 className="mb-6 uppercase tracking-wider border-b border-gray-200 pb-3">
                Nachricht senden
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-gray-700 uppercase tracking-wider" style={{ fontSize: '11px' }}>Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-600 bg-white"
                    placeholder="Ihr Name"
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700 uppercase tracking-wider" style={{ fontSize: '11px' }}>Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-600 bg-white"
                    placeholder="ihre@email.ch"
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700 uppercase tracking-wider" style={{ fontSize: '11px' }}>Nachricht</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-gray-600 resize-none bg-white"
                    placeholder="Ihre Nachricht"
                    style={{ fontSize: '13px' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors uppercase tracking-wider"
                  style={{ fontSize: '12px' }}
                >
                  Senden
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}