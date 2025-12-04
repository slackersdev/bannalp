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
            <h2 className="mb-6 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Willkommen auf der Bannalp
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Die Bannalp, ein wahrer Kleinod des Kantons Nidwalden, liegt auf 1600 - 2800 m.ü.M. bei Oberrickenbach - Wolfenschiessen im Engelbergertal.
              </p>
              <p>
                Das wunderschöne voralpine Hochtal mit idyllischem Bergsee beeindruckt durch die mächtigen Berge und die einzigartige Natur. Für Gipfelstürmer und Ruhesuchende, für Gross und Klein.
              </p>
              <p>
                Das Erholungsgebiet Bannalp ist im Sommer wie im Winter ein Geheimtipp für unvergessliche Ausflüge
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