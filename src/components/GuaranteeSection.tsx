import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F6F7] border-b border-slate-200/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight">
            7 dias para experimentar sem ficar preso à compra.
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-[#5B616B] leading-relaxed max-w-lg mx-auto">
            Conheça o material e veja se ele atende ao seu mercado. Caso não faça sentido para você, solicite o reembolso dentro do prazo da garantia.
          </p>
        </div>

      </div>
    </section>
  );
};
