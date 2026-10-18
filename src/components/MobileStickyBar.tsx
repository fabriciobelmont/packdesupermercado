import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToOffers } from '../utils/scroll';

export const MobileStickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offersEl = document.getElementById('ofertas');

      // Check if user scrolled past Hero (~350px)
      const pastHero = scrollY > 350;

      // Check if offers section is already in viewport
      let offersInView = false;
      if (offersEl) {
        const rect = offersEl.getBoundingClientRect();
        // If the top of offers section is above bottom of screen and bottom of offers is still below top
        offersInView = rect.top <= window.innerHeight * 0.7 && rect.bottom >= 100;
      }

      setIsVisible(pastHero && !offersInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Ação rápida móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-4 py-2.5 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Rádio Profissional
          </span>
          <span className="text-xs font-black text-[#171717] leading-tight">
            A partir de <strong className="text-[#D51F2B] text-sm">R$ 27,90</strong>
          </span>
        </div>

        <button
          onClick={scrollToOffers}
          className="min-h-[42px] px-4 py-2 rounded-xl font-black text-xs text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>VER PACOTES</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
