import React from 'react';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';
import { OFFICIAL_WHATSAPP_LINK, reportarConversaoWhatsApp } from '../lib/conversions';

export const Coverage: React.FC = () => {
  const regions = [
    {
      zone: 'Zona Leste',
      bairros: [
        'Tatuapé',
        'Mooca',
        'Anália Franco',
        'Belém',
        'Vila Prudente',
        'Penha',
        'Itaquera',
        'Vila Formosa',
        'Aricanduva',
      ],
    },
    {
      zone: 'Zona Sul',
      bairros: [
        'Vila Mariana',
        'Moema',
        'Brooklin',
        'Saúde',
        'Ipiranga',
        'Santo Amaro',
        'Campo Belo',
        'Jabaquara',
        'Morumbi',
      ],
    },
    {
      zone: 'Zona Oeste',
      bairros: [
        'Pinheiros',
        'Perdizes',
        'Lapa',
        'Pompeia',
        'Vila Madalena',
        'Butantã',
        'Barra Funda',
        'Jaguaré',
        'Alto de Pinheiros',
      ],
    },
    {
      zone: 'Zona Norte',
      bairros: [
        'Santana',
        'Tucuruvi',
        'Casa Verde',
        'Mandaqui',
        'Vila Guilherme',
        'Imirim',
        'Jaçanã',
        'Tremembé',
      ],
    },
    {
      zone: 'Centro',
      bairros: [
        'Bela Vista',
        'Consolação',
        'Higienópolis',
        'Santa Cecília',
        'Liberdade',
        'Aclimação',
        'Cambuci',
      ],
    },
  ];

  return (
    <section id="onde" className="py-16 sm:py-24 bg-base border-b border-white/10">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider font-semibold mb-3">
            <MapPin className="w-4 h-4 text-cyan" />
            <span>Raio de Atendimento Domiciliar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
            Atendimento em Todas as Regiões de São Paulo
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Equipes técnicas com rotas estratégicas nas principais zonas da capital paulista para garantir
            deslocamento ágil até a sua residência ou empresa.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {regions.map((reg) => (
            <div
              key={reg.zone}
              className="bg-base-surface border border-white/10 rounded-2xl p-6 hover:border-cyan/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-4 h-4 text-cyan" />
                <h3 className="font-heading font-black text-lg text-white">
                  {reg.zone}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {reg.bairros.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Quick CTA Box */}
          <div className="bg-gradient-to-br from-cyan/20 to-base-surface border border-cyan/30 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase text-cyan font-bold tracking-wider mb-2 block">
                Seu Bairro Não Está na Lista?
              </span>
              <h3 className="font-heading font-black text-lg text-white mb-2">
                Consulte Nossa Rota de Hoje
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                Atendemos bairros vizinhos e adjacências em toda a capital de São Paulo. Mande sua localização no WhatsApp.
              </p>
            </div>

            <a
              href={OFFICIAL_WHATSAPP_LINK}
              onClick={() => reportarConversaoWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold px-4 py-3 rounded-xl shadow-md transition-all text-center"
            >
              <span>Verificar disponibilidade no meu CEP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
