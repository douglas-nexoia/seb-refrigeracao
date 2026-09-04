import React from 'react';
import { Refrigerator, Disc3, Radio, ArrowRight, Check } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, reportarConversaoWhatsApp } from '../lib/conversions';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      id: 'geladeira',
      badge: 'Carro-Chefe de Emergência',
      kicker: '01 — Refrigeração Doméstica',
      title: 'Conserto de Geladeiras & Freezers',
      route: '/conserto-geladeira',
      icon: Refrigerator,
      symptoms:
        'Não gela a parte de baixo, freezer não congela, vazando água no chão, motor estalando ou placa Inverter travada.',
      chips: [
        'Frost Free & Inverter',
        'Refrigeradores Duplex',
        'Troca de Motor / Compressor',
        'Carga de Gás Ecológico',
        'Sensores & Degelo',
      ],
      description:
        'Atendimento prioritário em domicílio para evitar a perda de alimentos. Técnicos preparados com ferramental e peças originais na van.',
    },
    {
      id: 'lavadora',
      badge: 'Lavanderia Completa',
      kicker: '02 — Lavanderia & Secagem',
      title: 'Máquinas de Lavar & Lava e Seca',
      route: '/conserto-maquina-de-lavar',
      icon: Disc3,
      symptoms:
        'Não centrifuga, não escoa a água, vazando por baixo, barulho forte de rolamento batendo ou parando no meio do ciclo.',
      chips: [
        'Lavadoras Automáticas',
        'Lava e Seca Front Load',
        'Troca de Mecanismo & Câmbio',
        'Bomba de Drenagem',
        'Placa de Potência',
      ],
      description:
        'Diagnóstico no local sem retirar a máquina da sua casa na grande maioria dos casos. Agilidade e garantia formal de 90 dias.',
    },
    {
      id: 'microondas',
      badge: 'Cozinha & Embutir',
      kicker: '03 — Cocção Eletrodoméstica',
      title: 'Conserto de Micro-ondas',
      route: '/conserto-microondas',
      icon: Radio,
      symptoms:
        'Não esquenta os alimentos, faiscando no interior, prato não gira, teclado inoperante ou painel digital apagado.',
      chips: [
        'Modelos Convencionais',
        'Micro-ondas de Embutir',
        'Troca de Magnetron',
        'Capacitor & Diodo de Alta',
        'Membrana & Teclado',
      ],
      description:
        'Reparo elétrico e eletrônico seguro com peças compatíveis e teste de emissão para garantir a segurança da sua família.',
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-base border-b border-white/10">
      <div className="container-max">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
            <span>Especialidades Oficiais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
            Serviços Especializados em Domicílio em São Paulo
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Foco exclusivo nas 3 linhas em que somos especialistas técnicos. Não terceirizamos o serviço:
            atendimento direto com peças originais e garantia formal.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-base-surface border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan/40 hover:bg-base-card transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Top Kicker & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
                      {s.kicker}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/25 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-base transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-cyan border border-white/10 mb-2">
                      {s.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-cyan transition-colors">
                      {s.title}
                    </h3>
                  </div>

                  {/* Real Symptoms Box */}
                  <div className="bg-black/30 rounded-xl p-3.5 border border-white/5 mb-5">
                    <p className="text-xs font-mono text-cyan uppercase tracking-wider mb-1 font-semibold">
                      Sintomas comuns:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {s.symptoms}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-200 mb-6 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Technical Chips */}
                  <div className="space-y-2 mb-8">
                    {s.chips.map((chip) => (
                      <div key={chip} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                        <Check className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                        <span>{chip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTAs */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={OFFICIAL_WHATSAPP_LINK}
                    onClick={() => reportarConversaoWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all text-center"
                  >
                    <span>Chamar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={s.route}
                    className="w-full text-center text-xs font-mono text-slate-300 hover:text-cyan transition-colors py-1"
                  >
                    Ver detalhes do serviço →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
