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

            <div className="bg-white rounded-md shadow-lg overflow-hidden h-[400px] lg:h-auto min-h-[400px]">
              <iframe
                width="100%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Luftseilbahnen%20Bannalp%20AG%2C%20Fell3%2C%206387%20Oberrickenbach&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}