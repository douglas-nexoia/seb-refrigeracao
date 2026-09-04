import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, MapPin, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import {
  OFFICIAL_WHATSAPP_LINK,
  OFFICIAL_PHONE_LINK,
  OFFICIAL_PHONE_DISPLAY,
  reportarConversaoWhatsApp,
  reportarConversaoTelefone,
} from '../lib/conversions';

export const ContactSection: React.FC = () => {
  const [bairro, setBairro] = useState('');
  const [aparelho, setAparelho] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reportarConversaoWhatsApp(() => {
      window.open(OFFICIAL_WHATSAPP_LINK, '_blank');
    });
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-base relative overflow-hidden border-b border-white/10">
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto bg-base-surface border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan/10 text-cyan border border-cyan/20 mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>PLANTÃO TÉCNICO SÃO PAULO</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-3">
              Solicite Seu Técnico em Domicílio
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atendimento em todas as zonas de São Paulo. Resposta ágil pelo WhatsApp ou ligação direta:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Direct Action Cards (5 cols) */}
            <div className="md:col-span-5 bg-base border border-white/10 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Direct WhatsApp Box */}
                <a
                  href={OFFICIAL_WHATSAPP_LINK}
                  onClick={() => reportarConversaoWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl bg-whatsapp/10 border border-whatsapp/30 hover:bg-whatsapp/20 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-whatsapp font-bold mb-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direto</span>
                  </div>
                  <p className="text-base font-heading font-black text-white group-hover:text-whatsapp transition-colors">
                    (11) 94142-8160
                  </p>
                  <p className="text-[11px] text-slate-300 font-sans mt-1">
                    Clique para iniciar a conversa com a equipe
                  </p>
                </a>

                {/* Direct Phone Call Box */}
                <a
                  href={OFFICIAL_PHONE_LINK}
                  onClick={() => reportarConversaoTelefone()}
                  className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan font-bold mb-1">
                    <Phone className="w-4 h-4" />
                    <span>Telefone para Ligação</span>
                  </div>
                  <p className="text-base font-mono font-bold text-white group-hover:text-cyan transition-colors">
                    {OFFICIAL_PHONE_DISPLAY}
                  </p>
                  <p className="text-[11px] text-slate-300 font-sans mt-1">
                    Ligue agora se preferir falar por voz
                  </p>
                </a>

                {/* Location Badge */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <MapPin className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-mono uppercase text-slate-300 font-bold">Base Operacional</p>
                    <p className="text-xs text-slate-300 font-sans">São Paulo / SP — Atendimento nas 5 zonas</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300 font-mono">
                <ShieldCheck className="w-4 h-4 text-cyan" />
                <span>Garantia de 90 dias em peças e reparos</span>
              </div>
            </div>

            {/* Right Box: Quick WhatsApp Dispatcher Form (7 cols) */}
            <div className="md:col-span-7 bg-base border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="bairro-input"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold"
                  >
                    Seu Bairro / Região em São Paulo:
                  </label>
                  <input
                    id="bairro-input"
                    type="text"
                    required
                    placeholder="Ex: Tatuapé, Moema, Santana, Pinheiros..."
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    className="w-full bg-base-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan transition-colors font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="aparelho-input"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold"
                  >
                    Aparelho e Defeito Apresentado:
                  </label>
                  <textarea
                    id="aparelho-input"
                    required
                    rows={3}
                    placeholder="Ex: Geladeira Frost Free parou de gelar embaixo / Lava e Seca não centrifuga..."
                    value={aparelho}
                    onChange={(e) => setAparelho(e.target.value)}
                    className="w-full bg-base-surface border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan transition-colors font-sans resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp" />
                  <span>Sem robôs: atendimento com atendente técnico humano.</span>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-4 px-6 rounded-xl font-bold text-sm sm:text-base shadow-whatsapp transition-all hover:scale-[1.01] active:scale-[0.99] text-center mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar e Conversar no WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
