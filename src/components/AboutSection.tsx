import { motion } from 'motion/react';
import imgBergwanderung from "figma:asset/d10a0fa8819e47aca3bf5a735f5093a541cfd566.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="rounded-md overflow-hidden shadow-lg">
              <img 
                alt="Bergwanderung" 
                className="w-full h-auto object-cover" 
                src={imgBergwanderung} 
              />
            </div>
          </div>
          
          <div>
            <h2 className="font-['Krona_One:Regular',sans-serif] mb-6 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Willkommen am Bannalp
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Das Bannalp ist ein idyllisches Berggebiet im Herzen der Schweizer Alpen. 
                Mit modernsten Liftanlagen und perfekt präparierten Pisten bieten wir Ihnen 
                ein unvergessliches Wintererlebnis.
              </p>
              <p>
                Unsere Gondelbahn bringt Sie bequem von der Talstation auf über 1.600 Meter Höhe, 
                wo Sie atemberaubende Panoramablicke und vielfältige Wintersportmöglichkeiten erwarten.
              </p>
              <p>
                Ob Skifahrer, Snowboarder oder Winterwanderer – bei uns findet jeder sein 
                persönliches Winterparadies. Moderne Infrastruktur trifft auf unberührte Natur.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div className="text-center">
                <div className="text-black mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  5
                </div>
                <div className="text-gray-600 uppercase tracking-wider">Lifte</div>
              </div>
              <div className="text-center">
                <div className="text-black mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  15km
                </div>
                <div className="text-gray-600 uppercase tracking-wider">Pisten</div>
              </div>
              <div className="text-center">
                <div className="text-black mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  1600m
                </div>
                <div className="text-gray-600 uppercase tracking-wider">Höhe</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}