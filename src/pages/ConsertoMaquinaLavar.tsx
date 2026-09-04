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
import { Disc3, Droplets, Zap, Wrench, AlertCircle, Gauge } from 'lucide-react';

const washerDefects: DefectItem[] = [
  {
    icon: Disc3,
    title: 'Não centrifuga e a roupa sai pesada e encharcada',
    cause: 'Falha no atuador de freio, eletrobomba não esvaziando a água no tempo limite ou capacitor com perda de capacitância.',
    solution: 'Substituição do atuador de acoplamento ou teste de vazão da bomba com peças originais.',
  },
  {
    icon: Droplets,
    title: 'Vazamento de água por baixo durante o enchimento ou lavagem',
    cause: 'Mangueira de nível ressecada, retentor do tanque estourado ou gaxeta de vedação da porta (em Lava e Seca) rasgada.',
    solution: 'Troca do retentor com selo mecânico novo ou substituição da mangueira com teste hidrostático no local.',
  },
  {
    icon: Wrench,
    title: 'Barulho muito alto e violento na centrifugação parecendo avião',
    cause: 'Desgaste dos rolamentos blindados do cesto e oxidação do eixo do câmbio mecânico devido à infiltração de água.',
    solution: 'Troca completa do kit mecânico (eixo, rolamentos e retentor) garantindo silêncio e rotação suave.',
  },
  {
    icon: AlertCircle,
    title: 'Não agita / não bate a roupa e o motor fica roncando',
    cause: 'Correia de transmissão frouxa ou arrebentada, trava do agitador gasta ou estrias do agitador espanadas.',
    solution: 'Revisão da correia automotiva, substituição do kit de cunha/agitador e teste de torque.',
  },
  {
    icon: Zap,
    title: 'Painel digital pisca, trava ou apresenta código de erro',
    cause: 'Placa de interface ou placa de potência danificada por picos de voltagem ou trava da porta (trava de segurança) inoperante.',
    solution: 'Troca da trava da tampa com chicote original ou reprogramação/substituição da placa eletrônica.',
  },
  {
    icon: Gauge,
    title: 'Enche de água sem parar até transbordar no chão',
    cause: 'Defeito na válvula dupla/tripla de entrada de água (travada aberta) ou mangueira do pressostato entupida.',
    solution: 'Substituição da válvula solenoide por componente com vazão calibrada e limpeza do duto de ar do nível.',
  },
];

export const ConsertoMaquinaLavar: React.FC = () => {
  return (
    <div className="min-h-screen bg-base text-slate-100">
      <Header currentRoute="/conserto-maquina-de-lavar" />

      <main>
        <Hero
          badgeService="Lavadoras & Lava e Seca"
          title={
            <>
              Conserto de Máquinas de Lavar e <span className="text-cyan">Lava e Seca em SP</span>
            </>
          }
          description="Conserto ágil de máquinas de lavar roupas, lava e seca e tanquinhos no seu endereço. Especialistas em Brastemp, Consul, Electrolux, Samsung, LG e Panasonic. Técnicos com peças originais e garantia de 90 dias por escrito."
        />

        <Brands />

        <DefectsGrid
          kicker="Diagnóstico Especializado de Lavanderia"
          title="Qual é o Defeito da Sua Máquina de Lavar?"
          subtitle="Identificamos o problema na hora. Consertos executados na sua residência sem necessidade de retirar a máquina na grande maioria dos casos."
          defects={washerDefects}
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

export default ConsertoMaquinaLavar;
