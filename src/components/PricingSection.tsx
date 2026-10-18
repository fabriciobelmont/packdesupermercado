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
                    R$ 27,00
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
                    handleCheckout(ESSENTIAL_CHECKOUT_URL, 'Pacote Essencial (R$ 27,00)');
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

          {/* Card 2: Personalizado (Destaque Premium) */}
          <div className="bg-[#171717] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFC928] shadow-xl flex flex-col justify-between relative">
            <div>
              {/* 1. Badge superior "MAIS COMPLETO" */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC928] text-[#171717] text-[11px] font-black uppercase tracking-wider shadow-xs">
                  <Sparkles className="w-3 h-3 fill-[#171717]" />
                  MAIS COMPLETO
                </span>

                {/* Selo Pagamento Único no Topo */}
                <span className="text-[11px] font-bold text-slate-300 bg-white/10 border border-white/10 px-2.5 py-1 rounded-md tracking-wider uppercase">
                  PAGAMENTO ÚNICO
                </span>
              </div>

              {/* 2. Linha de contexto */}
              <div className="mb-2">
                <span className="text-xs font-extrabold text-[#FFC928] uppercase tracking-wider block">
                  Com o nome da sua loja
                </span>
              </div>

              {/* 3. Título Principal */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                PERSONALIZADO
              </h3>

              {/* 4. Subtexto Curto */}
              <p className="text-sm text-slate-300 mt-1.5 font-medium leading-relaxed">
                Tudo do Essencial + sua marca dentro dos áudios.
              </p>

              {/* 5. Bloco do Preço & 6. Texto de Apoio Estratégico */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl sm:text-4xl font-black text-[#FFC928] tracking-tight">
                    R$ 47,00
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    pagamento único
                  </span>
                </div>

                {/* Texto de apoio com destaque suave */}
                <p className="mt-2.5 pt-2.5 border-t border-white/10 text-xs sm:text-[13px] text-amber-100/90 font-medium leading-relaxed">
                  Por apenas <strong className="text-[#FFC928] font-bold">R$ 20 a mais</strong>, leve também áudios personalizados com o nome do seu mercado.
                </p>
              </div>

              {/* 7. Divisor */}
              <div className="w-full h-px bg-slate-800 my-5"></div>

              {/* 8. Benefício: Todo o Pacote Essencial incluso */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-emerald-400">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>Todo o Pacote Essencial incluso</span>
                </div>

                {/* 9. Box das Peças Personalizadas */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-[#FFC928]/30 space-y-2.5">
                  <span className="text-xs font-black text-[#FFC928] uppercase tracking-wider block">
                    + 10 peças personalizadas:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-200 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] shrink-0"></span>
                      <span>3 Jingles Personalizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] shrink-0"></span>
                      <span>3 Vinhetas Personalizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] shrink-0"></span>
                      <span>3 Chamadas Personalizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] shrink-0"></span>
                      <span>1 Aviso Institucional Personalizado</span>
                    </li>
                  </ul>
                </div>

                {/* 10. Box "Depois da compra você envia" */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-white text-xs block mb-2.5">
                    Depois da compra você envia:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">•</span>
                      <span>Nome do supermercado</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">•</span>
                      <span>Pronúncia correta</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">•</span>
                      <span>Cidade</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500">•</span>
                      <span>Slogan, se possuir</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2">
                      <span className="text-slate-500">•</span>
                      <span>Estilo desejado</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span>Personalização para 1 estabelecimento.</span>
                    <span className="text-slate-600 hidden sm:inline">•</span>
                    <span>1 rodada de ajustes inclusa.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. CTA */}
            <div className="mt-8 pt-5 border-t border-slate-800">
              <a
                href={PERSONALIZED_CHECKOUT_URL}
                onClick={(e) => {
                  if (PERSONALIZED_CHECKOUT_URL === '#') {
                    e.preventDefault();
                    handleCheckout(PERSONALIZED_CHECKOUT_URL, 'Pacote Personalizado (R$ 47,00)');
                  }
                }}
                className="w-full min-h-[52px] py-4 px-6 rounded-xl font-black text-sm sm:text-base text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] active:scale-[0.98] transition-all shadow-md shadow-amber-400/25 flex items-center justify-center gap-2 text-center cursor-pointer"
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
                R$ 27,00
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
                R$ 47,00
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
                  handleCheckout(ESSENTIAL_CHECKOUT_URL, 'Pacote Essencial — R$ 27,00');
                }
              }}
              className="w-full sm:w-auto flex-1 min-h-[48px] py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-[#171717] bg-[#F5F6F7] hover:bg-slate-200 border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>QUERO O PACOTE ESSENCIAL — R$ 27</span>
            </a>

            <a
              href={PERSONALIZED_CHECKOUT_URL}
              onClick={(e) => {
                if (PERSONALIZED_CHECKOUT_URL === '#') {
                  e.preventDefault();
                  handleCheckout(PERSONALIZED_CHECKOUT_URL, 'Pacote Personalizado — R$ 47,00');
                }
              }}
              className="w-full sm:w-auto flex-1 min-h-[48px] py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm text-[#171717] bg-[#FFC928] hover:bg-[#F2BD1C] transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>QUERO MEU PACOTE PERSONALIZADO — R$ 47</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
