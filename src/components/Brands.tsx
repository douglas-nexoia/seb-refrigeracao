import React from 'react';

export const Brands: React.FC = () => {
  const brands = [
    'Brastemp',
    'Consul',
    'Electrolux',
    'Samsung',
    'LG',
    'Panasonic',
    'Midea',
  ];

  return (
    <section className="bg-[#101E2E] border-y border-white/15 py-5">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
          <span>Especialista Multimarcas em SP:</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-white font-heading font-black text-xs sm:text-sm tracking-wide px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 hover:border-cyan hover:text-cyan transition-all shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="text-xs font-mono text-slate-300 text-center md:text-right font-medium">
          Peças originais · Garantia 90 dias
        </div>
      </div>
    </section>
  );
};
