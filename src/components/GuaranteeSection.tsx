import React from 'react';
import { ShieldCheck, CheckCircle2, Wrench, Eye, FileText, ArrowRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, reportarConversaoWhatsApp } from '../lib/conversions';

export const GuaranteeSection: React.FC = () => {
  const points = [
    {
      icon: ShieldCheck,
      badge: '90 DIAS',
      title: 'Garantia Formal por Escrito',
      desc: 'Ordem de serviço detalhada com cobertura legal de 90 dias em peças e mão de obra, em total conformidade com o Artigo 26 do Código de Defesa do Consumidor.',
    },
    {
      icon: Wrench,
      badge: 'ORIGINAIS',
      title: 'Peças com Procedência de Fábrica',
      desc: 'Utilizamos apenas componentes originais e de primeira linha. Aumenta a vida útil do seu eletrodoméstico e mantém os parâmetros do fabricante.',
    },
    {
      icon: Eye,
      badge: 'TRANSPARÊNCIA',
      title: 'Você Acompanha o Diagnóstico',
      desc: 'O técnico mostra o componente com defeito e explica o motivo da falha. Nada é trocado ou executado sem a sua prévia autorização.',
    },
    {
      icon: FileText,
      badge: 'CLAREZA',
      title: 'Avaliação no Local com Valor Justo',
      desc: 'Atendimento domiciliar transparente: a taxa de avaliação técnica realizada na sua residência é abatida integralmente na aprovação do serviço.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-base-surface border-b border-white/10">
      <div className="container-max">
        <div className="max-w-4xl mx-auto bg-base border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-cyan tracking-wider font-semibold">
              Compromisso e Segurança
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mt-2 mb-4">
              Garantia e Respeito ao Seu Patrimônio
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Sabemos o quanto um eletrodoméstico parado gera transtorno na rotina familiar. Nosso padrão
              de trabalho foi estruturado para você ter certeza de que contratou um profissional sério.
            </p>
          </div>

          {/* Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.badge}
                  className="bg-base-surface border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20 font-bold">
                        {p.badge}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-heading font-black text-lg text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Card Action */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm">
              <CheckCircle2 className="w-5 h-5 text-whatsapp flex-shrink-0" />
              <span>Precisa de atendimento hoje no seu bairro? Fale direto com nossa equipe.</span>
            </div>

            <a
              href={OFFICIAL_WHATSAPP_LINK}
              onClick={() => reportarConversaoWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex-shrink-0"
            >
              <span>Solicitar Técnico no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
