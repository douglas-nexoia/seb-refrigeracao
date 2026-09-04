import React from 'react';
import { MessageSquare, Calendar, Search, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Relate o defeito',
      desc: 'Envie marca, modelo e sintoma pelo WhatsApp para orientar o técnico.',
    },
    {
      num: '02',
      icon: Calendar,
      title: 'Agendamos a visita',
      desc: 'Combinamos o melhor horário para atendimento direto no seu domicílio em SP.',
    },
    {
      num: '03',
      icon: Search,
      title: 'Diagnóstico no local',
      desc: 'O técnico avalia com transparência e apresenta a solução antes de consertar.',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Conserto com garantia',
      desc: 'Reparo com peças originais e entrega da garantia formal de 90 dias.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-base border-b border-white/10">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase text-cyan tracking-wider font-semibold">
            Transparência Do Início Ao Fim
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mt-2 mb-4">
            Como Funciona o Atendimento em Sua Casa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Processo ágil e sem burocracia para resolver o problema do seu aparelho hoje.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-base-surface border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono font-black text-2xl text-cyan/60">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-lg text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-white/10 z-20 pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
