import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import {
  OFFICIAL_WHATSAPP_LINK,
  OFFICIAL_PHONE_LINK,
  OFFICIAL_PHONE_DISPLAY,
  reportarConversaoWhatsApp,
  reportarConversaoTelefone,
} from '../lib/conversions';

interface HeaderProps {
  currentRoute?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute = '/' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Geladeiras & Freezers', href: '/conserto-geladeira' },
    { label: 'Máquinas de Lavar', href: '/conserto-maquina-de-lavar' },
    { label: 'Micro-ondas', href: '/conserto-microondas' },
    { label: 'Onde Atendemos', href: '#onde' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-base/95 backdrop-blur-md border-b border-white/10 transition-all">
      {/* Top Banner Credencial */}
      <div className="bg-base-surface border-b border-white/5 py-1.5 px-4 text-center">
        <p className="text-xs font-mono text-slate-300 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
          <span>Atendimento em domicílio em São Paulo / SP — Garantia de 90 dias por escrito</span>
        </p>
      </div>

      <div className="container-max flex items-center justify-between h-20">
        {/* Brand Logo */}
        <a href="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse"></span>
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-cyan transition-colors">
              SEB REFRIGERAÇÃO
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 pl-4">
            Especialista Multimarcas · São Paulo
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                currentRoute === item.href ? 'text-cyan font-bold' : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Segregated Contacts) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Phone Call Link */}
          <a
            href={OFFICIAL_PHONE_LINK}
            onClick={() => reportarConversaoTelefone()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 text-white font-mono font-semibold text-xs whitespace-nowrap flex-shrink-0 transition-colors shadow-sm"
            title="Ligar para a SEB Refrigeração"
          >
            <Phone className="w-3.5 h-3.5 text-cyan" />
            <span className="text-white font-bold">{OFFICIAL_PHONE_DISPLAY}</span>
          </a>

          {/* WhatsApp Primary CTA */}
          <a
            href={OFFICIAL_WHATSAPP_LINK}
            onClick={() => reportarConversaoWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={OFFICIAL_PHONE_LINK}
            onClick={() => reportarConversaoTelefone()}
            className="p-2.5 rounded-lg border border-white/15 bg-white/5 text-white"
            aria-label="Ligar por telefone"
          >
            <Phone className="w-4 h-4 text-cyan" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 border border-white/10"
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-base-surface px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-md transition-colors ${
                  currentRoute === item.href
                    ? 'bg-cyan/10 text-cyan font-bold'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={OFFICIAL_PHONE_LINK}
              onClick={() => {
                reportarConversaoTelefone();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-lg border border-white/30 text-white font-mono font-bold text-sm bg-white/10 hover:bg-white/15"
            >
              <Phone className="w-4 h-4 text-cyan" />
              <span className="text-white font-bold">Ligar: {OFFICIAL_PHONE_DISPLAY}</span>
            </a>

            <a
              href={OFFICIAL_WHATSAPP_LINK}
              onClick={() => {
                reportarConversaoWhatsApp();
                setIsMenuOpen(false);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-whatsapp text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
