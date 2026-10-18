import React from 'react';
import { Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-slate-400 py-10 pb-20 md:pb-10 border-t border-slate-800 text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-extrabold text-sm">
          <div className="w-6 h-6 rounded-md bg-[#D51F2B] text-white flex items-center justify-center">
            <Radio className="w-3.5 h-3.5 text-[#FFC928]" />
          </div>
          <span>
            Rádio <span className="text-[#D51F2B]">do Mercado</span>
          </span>
        </div>

        {/* Direitos */}
        <p className="text-slate-400 text-[11px]">
          © {new Date().getFullYear()} Rádio do Mercado. Todos os direitos reservados. Sem mensalidade.
        </p>

      </div>
    </footer>
  );
};
