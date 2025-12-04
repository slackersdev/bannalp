import imgLogo from "figma:asset/ffb797a5013414fb5ec5ef7942c0d0d67acbb767.png";
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-600">
          <div>
            <img src={imgLogo} alt="Bannalp Logo" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="text-slate-300" style={{ fontSize: '13px' }}>
              Ihr Winterparadies in den Schweizer Alpen
            </p>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-wider border-b border-slate-600 pb-2" style={{ fontSize: '12px' }}>Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Über uns</a></li>
              <li><a href="#lifts" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Lifte</a></li>
              <li><a href="#news" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Aktuelles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-wider border-b border-slate-600 pb-2" style={{ fontSize: '12px' }}>Information</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Preise</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Anfahrt</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>Webcams</a></li>
              <li><a href="#" className="hover:text-white transition-colors uppercase tracking-wide" style={{ fontSize: '11px' }}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 uppercase tracking-wider border-b border-slate-600 pb-2" style={{ fontSize: '12px' }}>Folgen Sie uns</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-600 rounded-md flex items-center justify-center hover:bg-slate-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-600 rounded-md flex items-center justify-center hover:bg-slate-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-600 rounded-md flex items-center justify-center hover:bg-slate-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
          <div className="uppercase tracking-wider" style={{ fontSize: '10px' }}>© 2024 Bannalp Bergbahnen AG. Alle Rechte vorbehalten.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-wider" style={{ fontSize: '10px' }}>Impressum</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-wider" style={{ fontSize: '10px' }}>Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-wider" style={{ fontSize: '10px' }}>AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}