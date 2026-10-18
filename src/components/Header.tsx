import React, { useState, useEffect } from 'react';
import { Radio } from 'lucide-react';
import { scrollToOffers } from '../utils/scroll';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo Textual */}
        <a
          href="#"
          className="flex items-center gap-2 text-[#171717] font-extrabold text-base sm:text-lg tracking-tight whitespace-nowrap"
        >
          <div className="w-8 h-8 rounded-lg bg-[#D51F2B] text-white flex items-center justify-center shrink-0">
            <Radio className="w-4 h-4 text-[#FFC928]" />
          </div>
          <span>
            Rádio <span className="text-[#D51F2B]">do Mercado</span>
          </span>
        </a>

        {/* CTA Minimalista */}
        <button
          onClick={scrollToOffers}
          className="min-h-[40px] px-4 sm:px-5 py-2 text-xs sm:text-sm font-black text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all rounded-xl shadow-2xs cursor-pointer whitespace-nowrap"
        >
          VER PACOTES
        </button>
      </div>
    </header>
  );
};
