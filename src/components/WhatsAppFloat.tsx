import React from 'react';
import { MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, reportarConversaoWhatsApp } from '../lib/conversions';

export const WhatsAppFloat: React.FC = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={OFFICIAL_WHATSAPP_LINK}
        onClick={() => reportarConversaoWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-sans font-bold text-sm sm:text-base px-5 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
        title="Falar com a SEB Refrigeração no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Chamar no WhatsApp</span>
      </a>
    </aside>
  );
};
