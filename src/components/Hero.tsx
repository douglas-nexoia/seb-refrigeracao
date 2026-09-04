import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Wrench, Clock, CheckCircle2 } from 'lucide-react';
import {
  OFFICIAL_WHATSAPP_LINK,
  OFFICIAL_PHONE_LINK,
  OFFICIAL_PHONE_DISPLAY,
  reportarConversaoWhatsApp,
  reportarConversaoTelefone,
} from '../lib/conversions';

interface HeroProps {
  badgeService?: string;
  title: React.ReactNode;
  description: string;
}

export const Hero: React.FC<HeroProps> = ({
  badgeService = 'Refrigeração e Lavadoras',
  title,
  description,
}) => {
  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center bg-base overflow-hidden py-14 lg:py-20 border-b border-white/10">
      {/* Subtle Technical Mesh Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none"></div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          {/* 2 Canonical Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-slate-200 border border-white/15">
              <span className="w-2 h-2 rounded-full bg-cyan"></span>
              São Paulo / SP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan/10 text-cyan border border-cyan/25">
              <Wrench className="w-3.5 h-3.5" />
              {badgeService}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] text-white mb-6">
            {title}
          </h1>

          {/* Subtitle / Promise */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          {/* 2 Segregated Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            {/* Primary: WhatsApp */}
            <a
              href={OFFICIAL_WHATSAPP_LINK}
              onClick={() => reportarConversaoWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base px-7 py-4 rounded-xl shadow-whatsapp transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Secondary: Direct Phone Call */}
            <a
              href={OFFICIAL_PHONE_LINK}
              onClick={() => reportarConversaoTelefone()}
              className="inline-flex items-center justify-center gap-2.5 bg-white/5 hover:bg-white/10 text-white font-mono text-sm sm:text-base px-6 py-4 rounded-xl border border-white/20 transition-all text-center"
            >
              <Phone className="w-4 h-4 text-cyan" />
              <span>Ligar: {OFFICIAL_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* 3 Verifiable Numeric Proofs (No Fake Template Ratings) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-white">90 Dias</p>
                <p className="text-xs text-slate-400 font-mono">Garantia formal (CDC Art. 26)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-white">100%</p>
                <p className="text-xs text-slate-400 font-mono">Peças originais de fábrica</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-black text-xl text-white">No Local</p>
                <p className="text-xs text-slate-400 font-mono">Atendimento no seu domicílio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
