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
    <section className="bg-base-surface/80 border-b border-white/10 py-6">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
          <span>Especialista Multimarcas em SP:</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-slate-300 hover:text-white font-heading font-extrabold text-sm sm:text-base tracking-wider transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>

        <div className="text-[11px] font-mono text-slate-400 text-center md:text-right">
          Peças originais e garantia de 90 dias
        </div>
      </div>
    </section>
  );
};
