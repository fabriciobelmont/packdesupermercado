import React from 'react';
import { MessageSquare } from 'lucide-react';

interface Testimonial {
  id: string;
  src: string;
  alt: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depoimento-01',
    src: 'https://i.ibb.co/kV6MC8Dk/depoimento-01.webp',
    alt: 'Depoimento 01 sobre o Pacote de Áudios para Supermercados',
  },
  {
    id: 'depoimento-02',
    src: 'https://i.ibb.co/6c2KGFwy/depoimento-02.webp',
    alt: 'Depoimento 02 sobre o Pacote de Áudios para Supermercados',
  },
  {
    id: 'depoimento-03',
    src: 'https://i.ibb.co/CxkPy8t/depoimento-03.webp',
    alt: 'Depoimento 03 sobre o Pacote de Áudios para Supermercados',
  },
  {
    id: 'depoimento-04',
    src: 'https://i.ibb.co/Hp4zDPg9/depoimento-04.webp',
    alt: 'Depoimento 04 sobre o Pacote de Áudios para Supermercados',
  },
];

// Duplicamos a lista para criar um loop 100% contínuo e infinito
const CAROUSEL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F6F7] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
        {/* Header da Seção */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Opinião Real</span>
        </div>
        <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
          Veja o que quem já conheceu o material achou.
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#5B616B]">
          Depoimentos reais de quem profissionalizou a ambientação sonora da loja.
        </p>
      </div>

      {/* Trilha do Carrossel Infinito com Fade nas Laterais */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Gradiente de fade lateral esquerdo */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#F5F6F7] to-transparent z-10" />

        {/* Gradiente de fade lateral direito */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#F5F6F7] to-transparent z-10" />

        {/* Faixa Contínua que passa da direita para a esquerda de forma infinita */}
        <div className="animate-infinite-scroll flex gap-4 sm:gap-6 items-center">
          {CAROUSEL_ITEMS.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[380px] md:w-[440px] shrink-0 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow duration-200 select-none flex flex-col items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={500}
                height={350}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-xl max-h-[320px] sm:max-h-[360px] pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
