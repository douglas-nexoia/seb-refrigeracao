import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como funciona a visita técnica e a cobrança da avaliação?',
      a: 'Nossos técnicos se deslocam até o seu endereço com van equipada e ferramental de teste. É realizada a avaliação minuciosa no local e passado o diagnóstico. Havendo a aprovação do conserto, a taxa da visita técnica é integralmente abatida no valor do serviço.',
    },
    {
      q: 'Vocês consertam o aparelho na minha casa ou precisam levar para a oficina?',
      a: 'Em mais de 90% dos casos, o conserto é realizado no próprio local na primeira visita, pois os técnicos já andam com peças originais de alta rotação no veículo. Raramente há necessidade de remoção para bancada.',
    },
    {
      q: 'Qual é o prazo de garantia oferecido?',
      a: 'Oferecemos garantia legal de 90 dias por escrito em todas as ordens de serviço emitidas pela SEB Refrigeração, cobrindo tanto as peças substituídas quanto a mão de obra especializada, conforme o Artigo 26 do Código de Defesa do Consumidor.',
    },
    {
      q: 'Vocês atendem em todas as regiões de São Paulo?',
      a: 'Sim, atendemos com rotas diárias as Zonas Leste, Sul, Oeste, Norte e a região Central de São Paulo. Consulte pelo WhatsApp a previsão de horário para o seu CEP.',
    },
    {
      q: 'Quais marcas vocês consertam?',
      a: 'Somos especialistas multimarcas em Brastemp, Consul, Electrolux, Samsung, LG, Panasonic, Midea, entre outras marcas nacionais e importadas para refrigeração, lavadoras e micro-ondas.',
    },
    {
      q: 'Quais as formas de pagamento aceitas?',
      a: 'Aceitamos Pix, cartões de crédito (com possibilidade de parcelamento) e cartões de débito diretamente na maquininha levada pelo técnico.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-base border-b border-white/10">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan/10 text-cyan border border-cyan/20 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
              Perguntas Frequentes Sobre o Atendimento
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Tudo o que você precisa saber antes de solicitar o seu técnico em domicílio.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-base-surface border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-white pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
