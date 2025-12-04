import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import imgLogo from "figma:asset/ffb797a5013414fb5ec5ef7942c0d0d67acbb767.png";

type Page = 'home' | 'gastronomie' | 'winter' | 'sommer' | 'preise' | 'info';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlaceholderClick = (pageName: string) => {
    alert(`${pageName} Seite - Coming Soon!`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src={imgLogo} alt="Bannalp Logo" className="h-16 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('news')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Aktuelles
          </button>
          <button
            onClick={() => scrollToSection('lifts')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Lifte
          </button>
          <button
            onClick={() => onNavigate('winter')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Winter
          </button>
          <button
            onClick={() => onNavigate('sommer')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Sommer
          </button>
          <button
            onClick={() => onNavigate('gastronomie')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Gastro / Unterkünfte
          </button>
          <div className="relative">
            <button
              onClick={() => setIsInfoOpen(!isInfoOpen)}
              className={`flex items-center gap-1 transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
            >
              Info
              <ChevronDown size={16} className={`transition-transform ${isInfoOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isInfoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      scrollToSection('livecam');
                      setIsInfoOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium border-b border-gray-50"
                  >
                    Livecam
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('preise');
                      setIsInfoOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium border-b border-gray-50"
                  >
                    Preise
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('contact');
                      setIsInfoOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    Kontakt
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
}