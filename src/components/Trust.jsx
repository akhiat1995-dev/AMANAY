import AnimatedCounter from './AnimatedCounter';

const features = [
  {
    icon: 'lucide:truck',
    color: '#D4AF37',
    title: 'Livraison Rapide',
    desc: 'Expédition express',
    arabic: 'توصيل سريع',
  },
  {
    icon: 'lucide:clock-4',
    color: '#C0C0C0',
    title: 'Longue Tenue',
    desc: 'Efficacité 24h+',
    arabic: 'ثبات طويل',
  },
  {
    icon: 'lucide:award',
    color: '#D4AF37',
    title: 'Qualité Premium',
    desc: 'Composants nobles',
    arabic: 'جودة عالية',
  },
  {
    icon: 'lucide:banknote',
    color: '#C0C0C0',
    title: 'Prix Accessible',
    desc: 'Luxe sans compromis',
    arabic: 'سعر مناسب',
  },
  {
    icon: 'lucide:shield-check',
    color: '#D4AF37',
    title: 'Paiement Cash',
    desc: 'Payez à la livraison',
    arabic: 'دفع عند الاستلام',
  },
];

export default function Trust() {
  return (
    <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Pourquoi Nous</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
          </div>
          <h2 className="serif-font text-3xl lg:text-4xl text-white tracking-[0.15em] font-light">
            <span className="text-[#D4AF37]">C O N F I A N C E</span>
          </h2>
          <p className="arabic-font text-lg text-gray-400 mt-2">لماذا تختار أماناي؟</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-6 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-300 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-300 rounded-br-lg"></div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center border border-white/10 bg-black/50 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                    <iconify-icon
                      icon={f.icon}
                      className="text-2xl transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                      style={{ color: f.color }}
                    ></iconify-icon>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] text-white font-bold uppercase mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {f.title}
                </p>
                <p className="text-[9px] text-gray-500 mb-2">{f.desc}</p>
                <p className="text-xs text-[#D4AF37]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  {f.arabic}
                </p>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 rounded-lg transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 flex justify-center items-center gap-8 lg:gap-12">
          <div className="text-center">
            <span className="serif-font text-2xl lg:text-3xl text-[#D4AF37]">
              <AnimatedCounter value={50} suffix="K+" duration={2000} />
            </span>
            <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Clients Satisfaits</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <span className="serif-font text-2xl lg:text-3xl text-[#D4AF37]">
              <AnimatedCounter value={4.9} decimals={1} duration={1800} />
            </span>
            <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Note Moyenne</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <span className="serif-font text-2xl lg:text-3xl text-[#D4AF37]">
              <AnimatedCounter value={24} suffix="h" duration={1500} />
            </span>
            <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-1">Délai Moyen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
