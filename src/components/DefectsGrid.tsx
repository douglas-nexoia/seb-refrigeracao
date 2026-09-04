import React from 'react';
import { AlertTriangle, LucideIcon, ArrowRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, reportarConversaoWhatsApp } from '../lib/conversions';

export interface DefectItem {
  icon: LucideIcon;
  title: string;
  cause: string;
  solution: string;
}

interface DefectsGridProps {
  kicker?: string;
  title: string;
  subtitle: string;
  defects: DefectItem[];
}

export const DefectsGrid: React.FC<DefectsGridProps> = ({
  kicker = 'Diagnóstico Técnico Especializado',
  title,
  subtitle,
  defects,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-base-surface border-b border-white/10">
      <div className="container-max">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider font-semibold mb-3">
            <AlertTriangle className="w-4 h-4 text-cyan" />
            <span>{kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Defects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {defects.map((d, index) => {
            const Icon = d.icon;
            return (
              <div
                key={index}
                className="bg-base border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan/30 transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-black text-lg text-white mb-3">
                    {d.title}
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-300 mb-6 font-sans">
                    <p>
                      <strong className="text-cyan font-mono uppercase">Causa provável:</strong>{' '}
                      {d.cause}
                    </p>
                    <p>
                      <strong className="text-slate-200 font-mono uppercase">Como resolvemos:</strong>{' '}
                      {d.solution}
                    </p>
                  </div>
                </div>

                <a
                  href={OFFICIAL_WHATSAPP_LINK}
                  onClick={() => reportarConversaoWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-mono font-bold text-cyan hover:text-white pt-4 border-t border-white/10 transition-colors"
                >
                  <span>Agendar visita técnica</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
