import React from 'react';
import { ShieldCheck, MapPin, Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Mariana R.',
      bairro: 'Mooca — Zona Leste',
      appliance: 'Geladeira Brastemp Frost Free',
      text: 'A geladeira parou de gelar embaixo num sábado com compras da semana dentro. Chamei pelo WhatsApp e o técnico veio no mesmo dia, testou o sensor de degelo na minha frente, trocou a peça e resolveu. Muito transparente!',
    },
    {
      name: 'Carlos E.',
      bairro: 'Pinheiros — Zona Oeste',
      appliance: 'Lava e Seca Samsung Inverter',
      text: 'A máquina travou no meio da centrifugação dando código de erro. O profissional identificou que era a bomba de drenagem entupida/travada. Fez o reparo no local sem precisar retirar o aparelho da minha lavanderia.',
    },
    {
      name: 'Renata F.',
      bairro: 'Santana — Zona Norte',
      appliance: 'Micro-ondas Electrolux de Embutir',
      text: 'O micro-ondas ligava a luz e o prato girava, mas não esquentava nada. Em menos de 40 minutos o técnico trocou o magnetron defeituoso por um original e me deu a garantia de 90 dias por escrito.',
    },
    {
      name: 'Fernando S.',
      bairro: 'Vila Mariana — Zona Sul',
      appliance: 'Refrigerador Consul Duplex',
      text: 'Motor começou a estalar e desarmava o protetor térmico. Serviço rápido e preço justo, com a taxa de visita abatida no valor do conserto como haviam combinado no WhatsApp. Recomendo muito!',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-base-surface border-b border-white/10">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan/10 text-cyan border border-cyan/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Atendimento Domiciliar Verificável</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
            Aparelhos Consertados no Endereço do Cliente
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Relatos de clientes atendidos nas diversas regiões de São Paulo com peças originais e garantia formal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-base border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan/30 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan"></span>
                    <span className="font-mono text-xs text-cyan font-bold uppercase tracking-wider">
                      {t.appliance}
                    </span>
                  </div>
                  <Quote className="w-5 h-5 text-white/20" />
                </div>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-sans">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-heading font-black text-sm text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-300 font-mono flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-cyan" />
                    <span>{t.bairro}</span>
                  </p>
                </div>

                <span className="text-[11px] font-mono text-slate-300 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  Garantia 90 dias
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
