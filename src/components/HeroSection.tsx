import { motion } from 'motion/react';
import imgBannalpWinter from "figma:asset/65708ab69da50f32e7792a962a692bc5962fed60.png";
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="Bannalp Winter" 
          className="absolute inset-0 w-full h-full object-cover" 
          src={imgBannalpWinter} 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex flex-col items-start justify-center px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Krona_One:Regular',sans-serif] text-white mb-6" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', lineHeight: '1.1' }}>
            Bannalp
          </h1>
          <p className="text-white max-w-xl mb-8" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
            Erleben Sie unvergessliche Momente in der verschneiten Bergwelt
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('lifts')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black rounded-md hover:bg-gray-100 transition-all"
            >
              Lift Status
            </button>
            <button 
              onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-all"
            >
              Neuigkeiten
            </button>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}