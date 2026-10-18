import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ESSENTIAL_CHECKOUT_URL, PERSONALIZED_CHECKOUT_URL } from '../config/links';

export const PricingSection: React.FC = () => {
  const essentialItems = [
    '30 áudios prontos',
    'Jingles',
    'Vinhetas',
    'Chamadas por setor',
    'Avisos',
    'Sons ambiente',
    '3 bônus',
    'Acesso pelo Google Drive',
    'Garantia de 7 dias',
  ];

  const handleCheckout = (url: string, planName: string) => {
    if (url === '#' || !url) {
      alert(`Você selecionou: ${planName}.\nDefina seu link de checkout real em "src/config/links.ts".`);
    } else {
      window.location.href = url;
    }
  };

  return (
    <section id="ofertas" className="py-14 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Headline & Subheadline */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-bold text-[#D51F2B] uppercase tracking-wider bg-red-50 border border-red-200/80 px-3 py-1 rounded-full">
            Planos & Preços
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight mt-3">
            Escolha como você quer começar.
          </h2>
          <p className="mt-2 text-fluid-body text-[#5B616B]">
            Pronto para usar ou personalizado com o nome do seu mercado.
          </p>
        </div>

        {/* 2 Plan Cards: Side-by-side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Essencial */}
          <div className="bg-[#F5F6F7]/60 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Entrada Imediata
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  PAGAMENTO ÚNICO
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#171717] mt-3">
                ESSENCIAL
              </h3>
              <p className="text-sm text-[#5B616B] mt-1 font-medium">
                Tudo pronto para baixar e usar.
              </p>

              {/* Preço */}
              <div className="mt-5 pb-5 border-b border-slate-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
                    R$ 27,90
                  </span>
                  <span className="text-xs font-bold text-[#5B616B]">
                    pagamento único
                  </span>
                </div>
              </div>

              {/* Items */}
              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#171717] font-medium">
                {essentialItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-5 border-t border-slate-200/80">
              <a
                href={ESSENTIAL_CHECKOUT_URL}
                onClick={(e) => {
                  if (ESSENTIAL_CHECKOUT_URL === '#') {
                    e.preventDefault();
                    handleCheckout(ESSENTIAL_CHECKOUT_URL, 'Pacote Essencial (R$ 27,90)');
                  }
                }}
                className="w-full min-h-[50px] py-3.5 px-6 rounded-xl font-black text-sm sm:text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span>QUERO O PACOTE ESSENCIAL</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-[#5B616B]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          {/* Card 2: Personalizado (Destaque) */}
          <div className="bg-[#171717] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFC928] shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Badge MAIS COMPLETO */}
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <span className="bg-[#FFC928] text-[#171717] text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-[#171717]" />
                MAIS COMPLETO
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-xs font-bold text-[#FFC928] uppercase tracking-wider">
                  Com o Nome da Sua Loja
                </span>
                <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-md">
                  PAGAMENTO ÚNICO
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                PERSONALIZADO
              </h3>
              <p className="text-sm text-slate-300 mt-1 font-medium">
                Tudo do Essencial + sua marca dentro dos áudios.
              </p>

              {/* Preço */}
              <div className="mt-5 pb-5 border-b border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#FFC928] tracking-tight">
                    R$ 97,90
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    pagamento único
                  </span>
                </div>
              </div>

              {/* Inclusos */}
              <div className="mt-5 space-y-3">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Todo o Pacote Essencial incluso</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <span className="text-[11px] font-bold text-[#FFC928] uppercase tracking-wider block">
                    + 10 peças personalizadas:
                  </span>
                  <ul className="text-xs text-slate-200 space-y-1">
                    <li>• 3 Jingles Personalizados</li>
                    <li>• 3 Vinhetas Personalizadas</li>
                    <li>• 3 Chamadas Personalizadas</li>
                    <li>• 1 Aviso Institucional Personalizado</li>
                  </ul>
                </div>

                {/* Caixa simples: Depois da compra você envia */}
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/80 text-xs text-slate-300">
                  <span className="font-bold text-white block mb-1">
                    Depois da compra você envia:
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300">
                    <span>• Nome do supermercado</span>
                    <span>• Pronúncia correta</span>
                    <span>• Cidade</span>
                    <span>• Slogan, se possuir</span>
                    <span className="col-span-2">• Estilo desejado</span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-700 text-[10px] text-slate-400 flex flex-wrap gap-x-3">
                    <span>Personalização para 1 estabelecimento.</span>
                    <span>1 rodada de ajustes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-5 border-t border-slate-800">
              <a
                href={PERSONALIZED_CHECKOUT_URL}
                onClick={(e) => {
                  if (PERSONALIZED_CHECKOUT_URL === '#') {
                    e.preventDefault();
                    handleCheckout(PERSONALIZED_CHECKOUT_URL, 'Pacote Personalizado (R$ 97,90)');
                  }
                }}
                className="w-full min-h-[50px] py-3.5 px-6 rounded-xl font-black text-sm sm:text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-md shadow-amber-400/25 flex items-center justify-center gap-2 text-center cursor-pointer"
              >
                <span>QUERO MEU PACOTE PERSONALIZADO</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 19. COMPARAÇÃO SIMPLES (Em menos de 5 segundos) */}
        {/* ========================================================= */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#F5F6F7] border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center items-center">
            <div className="p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="text-xs font-black text-slate-500 uppercase tracking-wider block">
                ESSENCIAL
              </span>
              <span className="text-lg font-black text-[#171717] block mt-0.5">
                R$ 27,90
              </span>
              <p className="text-xs text-[#5B616B] mt-1 font-semibold">
                “Quero tudo pronto.”
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200/80">
              <span className="text-xs font-black text-[#D51F2B] uppercase tracking-wider block">
                PERSONALIZADO
              </span>
              <span className="text-lg font-black text-[#171717] block mt-0.5">
                R$ 97,90
              </span>
              <p className="text-xs text-[#5B616B] mt-1 font-semibold">
                “Quero ouvir o nome do meu mercado.”
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 20. CTA FINAL & FECHAMENTO */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200 text-center max-w-3xl mx-auto">
          <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
            Seu mercado não precisa ser uma grande rede para transmitir profissionalismo.
          </h2>
          <p className="mt-3 text-fluid-body text-[#5B616B]">
            Comece com os áudios prontos ou crie uma programação com a identidade do seu negócio.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <a
              href={ESSENTIAL_CHECKOUT_URL}
              onClick={(e) => {
                if (ESSENTIAL_CHECKOUT_URL === '#') {
                  e.preventDefault();
                  handleCheckout(ESSENTIAL_CHECKOUT_URL, 'Pacote Essencial — R$ 27,90');
                }
              }}
              className="w-full sm:w-auto flex-1 min-h-[48px] py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-[#171717] bg-[#F5F6F7] hover:bg-slate-200 border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>PACOTE ESSENCIAL — R$ 27,90</span>
            </a>

            <a
              href={PERSONALIZED_CHECKOUT_URL}
              onClick={(e) => {
                if (PERSONALIZED_CHECKOUT_URL === '#') {
                  e.preventDefault();
                  handleCheckout(PERSONALIZED_CHECKOUT_URL, 'Pacote Personalizado — R$ 97,90');
                }
              }}
              className="w-full sm:w-auto flex-1 min-h-[48px] py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>PACOTE PERSONALIZADO — R$ 97,90</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
