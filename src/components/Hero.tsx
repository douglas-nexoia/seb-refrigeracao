import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Wrench, Clock, CheckCircle2, MapPin, Check } from 'lucide-react';
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
  const brandsList = ['Brastemp', 'Consul', 'Electrolux', 'Samsung', 'LG', 'Panasonic'];

  return (
    <section className="relative bg-base overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-white/10">
      <div className="container-max relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 cols): Main Value Proposition & CTAs */}
          <div className="lg:col-span-7">
            {/* 2 Canonical Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-heading font-black tracking-tight leading-[1.14] text-white mb-5">
              {title}
            </h1>

            {/* Subtitle / Promise */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>

            {/* 2 Segregated Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary: WhatsApp */}
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                onClick={() => reportarConversaoWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base px-7 py-4 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] text-center whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>

              {/* Secondary: Direct Phone Call (High Contrast, Bold White Text) */}
              <a
                href={OFFICIAL_PHONE_LINK}
                onClick={() => reportarConversaoTelefone()}
                className="inline-flex items-center justify-center gap-2.5 bg-[#16283D] hover:bg-[#1E3652] text-white font-bold font-mono text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-cyan/50 hover:border-cyan transition-all text-center whitespace-nowrap shadow-md"
              >
                <Phone className="w-5 h-5 text-cyan fill-cyan/20 flex-shrink-0" />
                <span className="text-white font-bold tracking-tight">Ligar: {OFFICIAL_PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* 3 Verifiable Numeric Proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-black text-xl text-white">90 Dias</p>
                  <p className="text-xs text-slate-400 font-mono">Garantia formal (CDC)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-black text-xl text-white">100%</p>
                  <p className="text-xs text-slate-400 font-mono">Peças originais</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-black text-xl text-white">No Local</p>
                  <p className="text-xs text-slate-400 font-mono">Atendimento domiciliar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Technical Service Card (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-[#101E2E] border border-white/20 rounded-2xl p-6 lg:p-7 shadow-2xl relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-cyan/15 text-cyan border border-cyan/30 font-bold">
                    ORDEM DE SERVIÇO FORMAL
                  </span>
                  <h3 className="font-heading font-black text-xl text-white mt-2">
                    Técnicos em Rota em SP
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    Geladeiras, Lavadoras e Micro-ondas
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              {/* Technical Checklist */}
              <div className="space-y-3 mb-6 font-sans">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>Diagnóstico transparente no local com peças originais</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>Taxa de avaliação abatida na aprovação do serviço</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>Técnicos equipados nas 5 zonas da capital paulista</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>Garantia de 90 dias com certificado formal por escrito</span>
                </div>
              </div>

              {/* Brands Chips (High Contrast) */}
              <div className="pt-4 border-t border-white/10 mb-6">
                <p className="text-[11px] font-mono uppercase text-cyan mb-2.5 font-bold">
                  Especialista nas marcas:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {brandsList.map((brand) => (
                    <span
                      key={brand}
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Quick WhatsApp Trigger */}
              <a
                href={OFFICIAL_WHATSAPP_LINK}
                onClick={() => reportarConversaoWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar Disponibilidade de Rota</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
