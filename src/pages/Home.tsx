import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { ServicesGrid } from '../components/ServicesGrid';
import { DefectsGrid, DefectItem } from '../components/DefectsGrid';
import { HowItWorks } from '../components/HowItWorks';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { Coverage } from '../components/Coverage';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { AlertCircle, Droplets, Zap, Wrench, Disc3, Radio } from 'lucide-react';

const homeCommonDefects: DefectItem[] = [
  {
    icon: AlertCircle,
    title: 'Geladeira Frost Free não gela a parte de baixo',
    cause: 'Falha no sensor de temperatura, resistência de degelo queimada ou dreno bloqueado por gelo.',
    solution: 'Testamos os componentes elétricos no local e substituímos a peça danificada por original.',
  },
  {
    icon: Zap,
    title: 'Motor do refrigerador estala e desliga em seguida',
    cause: 'Relé de partida em curto, protetor térmico desarmando ou queima do compressor.',
    solution: 'Diagnóstico elétrico imediato com manômetro e troca por motor compatível com gás ecológico.',
  },
  {
    icon: Disc3,
    title: 'Máquina de lavar não centrifuga a roupa',
    cause: 'Atuador de freio travado, bomba de drenagem sem força ou placa de potência com falha.',
    solution: 'Inspeção do conjunto mecânico e eletrônico sem retirar o aparelho da sua residência.',
  },
  {
    icon: Droplets,
    title: 'Vazamento de água por baixo do aparelho',
    cause: 'Dreno de geladeira obstruído ou mangueiras e retentores de lavadora rompidos.',
    solution: 'Desobstrução técnica e vedação completa com componentes resistentes à pressão.',
  },
  {
    icon: Radio,
    title: 'Micro-ondas liga mas não esquenta os alimentos',
    cause: 'Queima do magnetron, capacitor de alta em curto ou diodo retificador rompido.',
    solution: 'Substituição com peças testadas e verificação de estanqueidade eletromagnética.',
  },
  {
    icon: Wrench,
    title: 'Barulho excessivo de ferro batendo na lavadora',
    cause: 'Desgaste severo do conjunto de rolamentos e eixo do cesto de centrifugação.',
    solution: 'Revisão mecânica completa com lubrificação e troca do kit mecânico.',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-slate-100">
      <Header currentRoute="/" />

      <main>
        <Hero
          badgeService="Refrigeração e Lavadoras"
          title={
            <>
              Assistência Técnica em São Paulo — <span className="text-cyan">Refrigeração e Lavadoras</span>
            </>
          }
          description="Conserto especializado de geladeiras Frost Free, freezers, máquinas de lavar, lava e seca e micro-ondas no seu endereço. Atendimento em todas as regiões de SP com peças originais e garantia formal de 90 dias."
        />

        <Brands />
        <ServicesGrid />

        <DefectsGrid
          kicker="Diagnóstico Rápido de Falhas"
          title="Seu Aparelho Apresenta Algum Desses Sintomas?"
          subtitle="Identifique o defeito mais comum. Nossos técnicos contam com equipamentos de teste para identificar a causa exata na primeira visita."
          defects={homeCommonDefects}
        />

        <HowItWorks />
        <GuaranteeSection />
        <Coverage />
        <SocialProof />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
