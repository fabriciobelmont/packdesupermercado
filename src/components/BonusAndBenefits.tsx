import React from 'react';
import { Gift, Headphones, Store, Megaphone, Music, Zap, Coins, ArrowRight } from 'lucide-react';
import { scrollToOffers } from '../utils/scroll';

export const BonusAndBenefits: React.FC = () => {
  const bonuses = [
    {
      num: '01',
      title: 'Guia Prático — Como Montar a Rádio do Seu Supermercado',
      text: 'Organize, configure e coloque sua programação para funcionar.',
      image: 'https://i.ibb.co/KjV8b03r/bonus-guia-pratico.webp',
      alt: 'Bônus 01: Guia Prático para Montar a Rádio do Seu Supermercado',
    },
    {
      num: '02',
      title: 'Programações Prontas',
      text: 'Modelos para dia normal, promoção, horário de pico e fechamento.',
      image: 'https://i.ibb.co/N2Txr0bm/bonus-programacoes.webp',
      alt: 'Bônus 02: Programações Prontas para Supermercados',
    },
    {
      num: '03',
      title: 'Checklist de Instalação e Uso',
      text: 'Um passo a passo rápido para não ficar perdido.',
      image: 'https://i.ibb.co/spM7HrKz/bonus-checklist.webp',
      alt: 'Bônus 03: Checklist de Instalação e Uso Rápido',
    },
  ];

  const benefits = [
    {
      icon: Headphones,
      title: 'AMBIENTE MAIS VIVO',
      desc: 'Evite aquela sensação de mercado silencioso ou sem identidade.',
    },
    {
      icon: Store,
      title: 'MAIS PROFISSIONALISMO',
      desc: 'Uma comunicação organizada transmite mais cuidado.',
    },
    {
      icon: Megaphone,
      title: 'DESTAQUE PARA SETORES',
      desc: 'Padaria, açougue, bebidas e outras áreas passam a fazer parte da programação.',
    },
    {
      icon: Music,
      title: 'EXPERIÊNCIA MAIS AGRADÁVEL',
      desc: 'Crie ritmo e ambientação durante a jornada de compra.',
    },
    {
      icon: Zap,
      title: 'PRONTO PARA USAR',
      desc: 'Não grave, não edite e não produza nada do zero.',
    },
    {
      icon: Coins,
      title: 'SEM MENSALIDADE',
      desc: 'Pagamento único.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* ========================================================= */}
        {/* PARTE A: BÔNUS VISUAIS */}
        {/* ========================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Materiais Inclusos</span>
          </div>
          <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
            Você recebe os áudios. E também aprende exatamente como usar.
          </h2>
        </div>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-[#F5F6F7] rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs group"
            >
              <div className="p-4 sm:p-5 flex items-center justify-center bg-white border-b border-slate-200/70">
                <img
                  src={bonus.image}
                  alt={bonus.alt}
                  width={360}
                  height={240}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 sm:h-48 object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-200"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#D51F2B] bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    BÔNUS {bonus.num}
                  </span>
                  <h3 className="text-base font-bold text-[#171717] mt-2 leading-snug">
                    {bonus.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#5B616B] leading-relaxed">
                    {bonus.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* PARTE B: BENEFÍCIOS COMPACTOS */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200/80">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
              Pequenos detalhes mudam a percepção do ambiente.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F5F6F7]/70 border border-slate-200/80 flex items-start gap-3.5 hover:bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#D51F2B] flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#171717] uppercase tracking-wide">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#5B616B] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* PARTE C: BLOCO DE IMPACTO (Grafite elegante) */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-20 rounded-3xl bg-[#171717] text-white p-6 sm:p-10 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-fluid-h3 font-black text-white tracking-tight leading-snug">
              Você já investiu no espaço, no estoque e no cliente.{' '}
              <span className="text-[#FFC928]">Não deixe o ambiente no improviso.</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Você não precisa contratar estúdio, locutor ou produtor. Os áudios já estão prontos.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToOffers}
                className="w-full sm:w-auto min-h-[50px] py-3.5 px-8 rounded-xl font-black text-sm sm:text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VER OS PACOTES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
