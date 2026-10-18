import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudioShowcase } from './components/AudioShowcase';
import { PackageContent } from './components/PackageContent';
import { SocialProof } from './components/SocialProof';
import { BonusAndBenefits } from './components/BonusAndBenefits';
import { GuaranteeSection } from './components/GuaranteeSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#FFC928] selection:text-[#171717] flex flex-col">
      {/* Header Minimalista */}
      <Header />

      <main className="flex-1">
        {/* Bloco 1: Hero de Alta Conversão */}
        <Hero />

        {/* Bloco 2: Demonstração dos Áudios ("Ouça antes de comprar") */}
        <AudioShowcase />

        {/* Bloco 3: O que o cliente recebe (30 peças prontas) */}
        <PackageContent />

        {/* Bloco 4: Prova Social (Depoimentos Exclusivos) */}
        <SocialProof />

        {/* Bloco 5: Bônus + Benefícios + Bloco de Impacto */}
        <BonusAndBenefits />

        {/* Bloco 6: Garantia Compacta (7 dias) */}
        <GuaranteeSection />

        {/* Bloco 7: Oferta com 2 Planos + Comparação em 5s + Fechamento */}
        <PricingSection />
      </main>

      {/* Rodapé Minimalista */}
      <Footer />

      {/* CTA Mobile Fixo */}
      <MobileStickyBar />
    </div>
  );
}
