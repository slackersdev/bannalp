import { useState, useEffect } from 'react';
import imgLogo from "figma:asset/ffb797a5013414fb5ec5ef7942c0d0d67acbb767.png";

type Page = 'home' | 'gastronomie' | 'winter' | 'sommer' | 'info';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

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
            Gastronomie / Unterkünfte
          </button>
          <button
            onClick={() => handlePlaceholderClick('Info')}
            className={`transition-colors hover:opacity-70 ${scrolled ? 'text-black' : 'text-white'}`}
          >
            Info
          </button>
        </nav>
      </div>
    </header>
  );
}