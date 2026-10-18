import React from 'react';
import { Check, ShieldCheck, Zap, Lock, ArrowRight } from 'lucide-react';
import { scrollToOffers } from '../utils/scroll';

export const Hero: React.FC = () => {
  const bullets = [
    '30 áudios prontos',
    'Sem contratar locutor',
    'Sem mensalidade',
    'Baixe e comece a usar',
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 border-b border-slate-200/80">
      {/* Background subtle soundwave decorative pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 C150,400 350,600 500,500 C650,400 850,600 1000,500" stroke="#D51F2B" strokeWidth="8" fill="none" />
          <path d="M0,550 C150,450 350,650 500,550 C650,450 850,650 1000,550" stroke="#171717" strokeWidth="6" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ========================================================= */}
        {/* MOBILE VIEW: copy -> mockup -> CTA */}
        {/* ========================================================= */}
        <div className="lg:hidden flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F5F6F7] border border-slate-200/90 text-slate-800 text-xs font-semibold mb-4">
            <span className="text-sm">🎧</span>
            <span>Áudios profissionais prontos para supermercados</span>
          </div>

          {/* Headline */}
          <h1 className="text-fluid-hero font-extrabold text-[#171717] tracking-tight leading-[1.15]">
            Grandes mercados não deixam o ambiente sonoro por acaso.{' '}
            <span className="block mt-1 text-[#D51F2B]">
              O seu também não deveria.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-fluid-body text-[#5B616B] leading-relaxed">
            Transforme o sistema de som do seu mercado em uma rádio interna com jingles, chamadas, vinhetas, avisos e sons ambiente prontos para usar.
          </p>

          {/* Bullets Mobile */}
          <div className="grid grid-cols-2 gap-2.5 my-5">
            {bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#171717]">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          {/* Large Mockup Mobile */}
          <div className="my-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/20 via-red-500/20 to-transparent rounded-3xl blur-xl opacity-80"></div>
              <img
                src="https://i.ibb.co/678fDGfQ/mockup-principal.webp"
                alt="Mockup Principal da Biblioteca de Áudios para Supermercados"
                width={700}
                height={500}
                fetchPriority="high"
                loading="eager"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* CTA Mobile */}
          <div className="flex flex-col items-stretch mt-2">
            <button
              onClick={scrollToOffers}
              className="w-full min-h-[52px] py-4 px-6 rounded-xl font-black text-sm sm:text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>QUERO PROFISSIONALIZAR MEU MERCADO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#5B616B] font-medium">
              <span>Pagamento único</span>
              <span>•</span>
              <span>Acesso rápido</span>
              <span>•</span>
              <span>7 dias de garantia</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW: 2 columns (Left: copy + CTA, Right: mockup) */}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 lg:items-center">
          
          {/* Left Column: Copy + Bullets + CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F5F6F7] border border-slate-200 text-slate-800 text-xs font-bold mb-5 shadow-2xs">
              <span className="text-sm">🎧</span>
              <span>Áudios profissionais prontos para supermercados</span>
            </div>

            {/* Headline */}
            <h1 className="text-fluid-hero font-extrabold text-[#171717] tracking-tight leading-[1.12]">
              Grandes mercados não deixam o ambiente sonoro por acaso.{' '}
              <span className="block mt-2 text-[#D51F2B]">
                O seu também não deveria.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-fluid-body text-[#5B616B] leading-relaxed max-w-xl">
              Transforme o sistema de som do seu mercado em uma rádio interna com jingles, chamadas, vinhetas, avisos e sons ambiente prontos para usar.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-2 gap-3.5 my-6 max-w-lg">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-[#171717]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="flex flex-col items-start pt-2">
              <button
                onClick={scrollToOffers}
                className="min-h-[56px] py-4 px-8 rounded-xl font-extrabold text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-lg shadow-amber-400/25 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>QUERO PROFISSIONALIZAR MEU MERCADO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-3.5 flex items-center gap-3 text-xs text-[#5B616B] font-medium">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" /> Pagamento único
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Acesso rápido
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 7 dias de garantia
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md xl:max-w-none">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFC928]/25 via-[#D51F2B]/15 to-transparent rounded-3xl blur-2xl opacity-70"></div>
              
              <img
                src="https://i.ibb.co/678fDGfQ/mockup-principal.webp"
                alt="Mockup Principal do Pacote de Áudios para Supermercados"
                width={650}
                height={520}
                fetchPriority="high"
                loading="eager"
                referrerPolicy="no-referrer"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
