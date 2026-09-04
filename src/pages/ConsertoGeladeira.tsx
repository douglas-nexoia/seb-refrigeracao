import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Brands } from '../components/Brands';
import { DefectsGrid, DefectItem } from '../components/DefectsGrid';
import { HowItWorks } from '../components/HowItWorks';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { Coverage } from '../components/Coverage';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { WhatsAppFloat } from '../components/WhatsAppFloat';
import { AlertTriangle, Droplets, Zap, Wrench, Snowflake, ShieldAlert } from 'lucide-react';

const fridgeDefects: DefectItem[] = [
  {
    icon: AlertTriangle,
    title: 'Parte de baixo não gela ou freezer bloqueando de gelo',
    cause: 'Defeito clássico em Frost Free: falha no sensor de degelo, termofusível rompido ou resistência queimada bloqueando a passagem do ar frio.',
    solution: 'Medição da resistência ôhmica e substituição dos sensores com peças originais do modelo.',
  },
  {
    icon: Droplets,
    title: 'Vazamento de água dentro da gaveta de legumes ou no chão',
    cause: 'Dreno de degelo entupido com limo/sujeira ou calha de escoamento desnivelada, fazendo a água transbordar para a cozinha.',
    solution: 'Desobstrução térmica do dreno, higienização da calha e alinhamento do reservatório evaporador.',
  },
  {
    icon: Zap,
    title: 'Motor (compressor) estala, tenta partir e desliga',
    cause: 'Falha no relé de partida PTC, protetor térmico desarmando por sobrecarga ou queima interna dos enrolamentos do compressor.',
    solution: 'Substituição do relé/protetor ou troca completa do compressor com pressurização e carga de gás com balança digital.',
  },
  {
    icon: Snowflake,
    title: 'Congelando alimentos na parte do refrigerador',
    cause: 'Dâmper termostático travado aberto, sensor de temperatura com leitura incorreta ou placa eletrônica travada.',
    solution: 'Calibração do fluxo de ar, troca do dâmper ou regulação dos parâmetros do termostato eletrônico.',
  },
  {
    icon: ShieldAlert,
    title: 'Geladeira Inverter apitando ou com led piscando',
    cause: 'Oscilações de energia que danificam o módulo inversor de frequência (placa inverter) ou perda de comunicação com o motor BLDC.',
    solution: 'Diagnóstico eletrônico na placa inversora, recuperação de trilhas ou substituição da placa original.',
  },
  {
    icon: Wrench,
    title: 'Geladeira esquentando excessivamente nas laterais e borracha frouxa',
    cause: 'Condensador com acúmulo de poeira impedindo a dissipação de calor, motor de ventilação parado ou gaxeta desmagnetizada.',
    solution: 'Limpeza técnica do condensador, teste do motoventilador e ajuste ou troca da borracha da porta.',
  },
];

export const ConsertoGeladeira: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-slate-100">
      <Header currentRoute="/conserto-geladeira" />

      <main>
        <Hero
          badgeService="Refrigeração & Freezers"
          title={
            <>
              Conserto de Geladeiras e <span className="text-cyan">Freezers em São Paulo</span>
            </>
          }
          description="Atendimento de emergência no seu endereço para evitar perda de alimentos. Especialistas em Frost Free, Inverter, Duplex e Freezers das marcas Brastemp, Consul, Electrolux, Samsung, LG e Panasonic. Garantia de 90 dias por escrito."
        />

        <Brands />

        <DefectsGrid
          kicker="Diagnóstico Especializado de Refrigeração"
          title="Qual é o Defeito da Sua Geladeira ou Freezer?"
          subtitle="Equipamentos de alta precisão para diagnosticar e resolver falhas de temperatura, gás e motor no mesmo dia em São Paulo."
          defects={fridgeDefects}
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

export default ConsertoGeladeira;
