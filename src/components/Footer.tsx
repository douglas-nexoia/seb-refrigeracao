import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck } from 'lucide-react';
import {
  OFFICIAL_WHATSAPP_LINK,
  OFFICIAL_PHONE_LINK,
  OFFICIAL_PHONE_DISPLAY,
  OFFICIAL_WHATSAPP_DISPLAY,
  reportarConversaoWhatsApp,
  reportarConversaoTelefone,
} from '../lib/conversions';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-surface text-slate-300 py-12 sm:py-16 border-t border-white/10 text-xs">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan"></span>
              <span className="font-heading font-black text-lg text-white tracking-tight">
                SEB REFRIGERAÇÃO
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed font-sans">
              Assistência técnica especializada em Geladeiras, Freezers, Máquinas de Lavar e Micro-ondas em São Paulo / SP.
            </p>
            <div className="pt-2 font-mono text-[11px] text-slate-400 space-y-1">
              <p>Resp: Eder de Jesus Santos</p>
              <p>Doc: 301.935.818-33</p>
            </div>
          </div>

          {/* Col 2: Services / Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Especialidades
            </h4>
            <ul className="space-y-2 font-mono text-[11px] text-slate-300">
              <li>
                <a href="/conserto-geladeira" className="hover:text-cyan transition-colors">
                  Conserto de Geladeiras & Freezers
                </a>
              </li>
              <li>
                <a href="/conserto-maquina-de-lavar" className="hover:text-cyan transition-colors">
                  Máquinas de Lavar e Lava e Seca
                </a>
              </li>
              <li>
                <a href="/conserto-microondas" className="hover:text-cyan transition-colors">
                  Conserto de Micro-ondas
                </a>
              </li>
              <li>
                <a href="#onde" className="hover:text-cyan transition-colors">
                  Regiões Atendidas em SP
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Canais Oficiais
            </h4>
            <ul className="space-y-2 font-mono text-[11px]">
              <li>
                <a
                  href={OFFICIAL_WHATSAPP_LINK}
                  onClick={() => reportarConversaoWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-whatsapp hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_PHONE_LINK}
                  onClick={() => reportarConversaoTelefone()}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan" />
                  <span>Ligação: {OFFICIAL_PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-cyan" />
                <span>ederdejesussantos1976@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                <span>São Paulo — SP (Atendimento Domiciliar)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantee */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono">
              Garantia Legal
            </h4>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-cyan font-bold text-[11px] font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>90 Dias de Garantia Formal</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300 font-sans">
                Todos os reparos são acompanhados de ordem de serviço discriminada e garantia por escrito conforme o CDC.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} SEB REFRIGERAÇÃO — Todos os direitos reservados.</p>
          <p>São Paulo / SP · Atendimento em Domicílio</p>
        </div>
      </div>
    </footer>
  );
};
