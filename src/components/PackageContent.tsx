import React from 'react';
import { Check, Library } from 'lucide-react';

export const PackageContent: React.FC = () => {
  const cards = [
    {
      icon: '🎶',
      count: '4',
      name: 'JINGLES',
      items: ['Abertura', 'Economia', 'Qualidade', 'Institucional'],
    },
    {
      icon: '📣',
      count: '6',
      name: 'VINHETAS',
      items: ['Atenção', 'Oferta Especial', 'Preço Baixo', 'Aproveite', 'Só Hoje', 'Não Perca'],
    },
    {
      icon: '🛒',
      count: '10',
      name: 'CHAMADAS POR SETOR',
      items: [
        'Açougue',
        'Hortifruti',
        'Padaria',
        'Frios',
        'Bebidas',
        'Mercearia',
        'Higiene',
        'Limpeza',
        'Congelados',
        'Oferta Relâmpago',
      ],
    },
    {
      icon: '🎙️',
      count: '5',
      name: 'AVISOS',
      items: ['Boas-vindas', 'Agradecimento', 'Fechamento', 'Promoções', 'Boa Compra'],
    },
    {
      icon: '🎵',
      count: '5',
      name: 'SONS AMBIENTE',
      items: ['Leve', 'Animada', 'Familiar', 'Moderna', 'Promocional'],
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Library className="w-3.5 h-3.5 text-[#D51F2B]" />
            <span>Biblioteca Completa</span>
          </div>
          <h2 className="text-fluid-h2 font-extrabold text-[#171717] tracking-tight">
            Uma rádio pronta dentro de uma única biblioteca.
          </h2>
          <p className="mt-3 text-fluid-body text-[#5B616B]">
            30 peças organizadas e prontas para usar.
          </p>
        </div>

        {/* 5 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 border border-slate-200 bg-[#F5F6F7]/50 hover:bg-white hover:border-slate-300 transition-all duration-200 shadow-2xs flex flex-col justify-between ${
                idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-2xl" role="img" aria-label={card.name}>
                    {card.icon}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {card.count} faixas
                  </span>
                </div>

                <h3 className="text-sm font-black text-[#171717] uppercase tracking-wider">
                  {card.count} {card.name}
                </h3>

                <ul className="mt-4 pt-3 border-t border-slate-200/70 space-y-1.5 text-xs text-slate-700 font-medium">
                  {card.items.map((it, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="truncate">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
