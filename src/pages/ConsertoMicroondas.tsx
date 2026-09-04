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
import { Radio, Zap, AlertTriangle, RotateCw, Power, ShieldCheck } from 'lucide-react';

const microwaveDefects: DefectItem[] = [
  {
    icon: Radio,
    title: 'Micro-ondas liga, funciona o tempo mas não esquenta',
    cause: 'Falha no emissor de ondas (magnetron queimado), diodo de alta tensão rompido ou capacitor descarregado/em curto.',
    solution: 'Substituição do conjunto de alta tensão por peças novas e teste com carga de água para aferir potência real.',
  },
  {
    icon: Zap,
    title: 'Faiscando ou dando estalos elétricos no interior',
    cause: 'Placa de mica (guia de onda) carbonizada por respingos de gordura ou descascamento da tinta epóxi interna.',
    solution: 'Troca da placa de mica guia de onda e isolamento térmico contra arco voltaico.',
  },
  {
    icon: RotateCw,
    title: 'Prato de vidro não gira ou gira dando trancos',
    cause: 'Queima do micro-motor síncrono inferior de tração do prato ou dentes do acoplador plástico trincados.',
    solution: 'Substituição do motor síncrono e acoplador central de giro com teste de carga.',
  },
  {
    icon: AlertTriangle,
    title: 'Teclado de membrana não aceita os comandos',
    cause: 'Pistas de prata condutiva da membrana de toque rompidas por umidade, calor ou desgaste natural do botão Iniciar.',
    solution: 'Instalação de nova membrana flexível compatível com o painel frontal.',
  },
  {
    icon: Power,
    title: 'Micro-ondas totalmente apagado ou desarmando o disjuntor',
    cause: 'Fusível cerâmico de proteção aberto devido a curto nas microchaves da porta ou transformador em sobrecarga.',
    solution: 'Troca das microchaves de monitoramento de abertura de porta e teste elétrico de fuga de corrente.',
  },
  {
    icon: ShieldCheck,
    title: 'Cheiro forte de queimado ou barulho tipo transformador vibrando',
    cause: 'Superaquecimento do transformador de alta ou motoventilador de refrigeração travado com fuligem.',
    solution: 'Revisão do sistema de exaustão, troca de conectores chamuscados e blindagem de segurança.',
  },
];

export const ConsertoMicroondas: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-slate-100">
      <Header currentRoute="/conserto-microondas" />

      <main>
        <Hero
          badgeService="Micro-ondas Convencionais & Embutir"
          title={
            <>
              Conserto e Manutenção de <span className="text-cyan">Micro-ondas em SP</span>
            </>
          }
          description="Conserto seguro de micro-ondas de bancada e de embutir em São Paulo. Especialistas em Electrolux, Brastemp, Consul, Panasonic, LG e Midea. Diagnóstico rápido, peças com garantia e atendimento na sua residência ou condomínio."
        />

        <Brands />

        <DefectsGrid
          kicker="Diagnóstico Especializado de Micro-ondas"
          title="Qual é a Falha Apresentada pelo Seu Micro-ondas?"
          subtitle="Manutenção segura com profissionais preparados para manusear circuitos de alta tensão e devolver o funcionamento perfeito do seu eletrodoméstico."
          defects={microwaveDefects}
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

export default ConsertoMicroondas;
