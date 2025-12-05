import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import imgLogo from "../assets/logo/Bannalp_logo.png";

type Page = 'home' | 'gastronomie' | 'winter' | 'sommer' | 'preise' | 'info';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    // Small timeout to ensure menu closing animation starts/doesn't block scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        } `}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src={imgLogo} alt="Bannalp Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('hero')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('news')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Aktuelles
          </button>
          <button
            onClick={() => scrollToSection('lifts')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Lifte
          </button>
          <button
            onClick={() => onNavigate('winter')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Winter
          </button>
          <button
            onClick={() => onNavigate('sommer')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Sommer
          </button>
          <button
            onClick={() => onNavigate('gastronomie')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
          >
            Gastro / Unterkünfte
          </button>
          <div className="relative">
            <button
              onClick={() => setIsInfoOpen(!isInfoOpen)}
              className={`flex items-center gap-1 transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'} `}
            >
              Info
              <ChevronDown size={16} className={`transition-transform ${isInfoOpen ? 'rotate-180' : ''} `} />
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

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${scrolled || isMenuOpen ? 'text-black' : 'text-white'} `}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('news')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Aktuelles
              </button>
              <button
                onClick={() => scrollToSection('lifts')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Lifte
              </button>
              <button
                onClick={() => handleNavigate('winter')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Winter
              </button>
              <button
                onClick={() => handleNavigate('sommer')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Sommer
              </button>
              <button
                onClick={() => handleNavigate('gastronomie')}
                className="text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              >
                Gastro / Unterkünfte
              </button>
              <div className="border-t border-gray-100 my-2 pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Info</p>
                <button
                  onClick={() => scrollToSection('livecam')}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Livecam
                </button>
                <button
                  onClick={() => handleNavigate('preise')}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Preise
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  Kontakt
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}