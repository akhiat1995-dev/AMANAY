import ScrollAnimation from './ScrollAnimation';

export default function Collections() {
  return (
    <section>
      <ScrollAnimation animation="fade-up">
      <div className="text-center py-10 bg-[#050505]">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
          <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Collection Signature</span>
          <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
        </div>
        <h2 className="serif-font text-4xl md:text-5xl text-white tracking-[0.15em] font-light">
          <span className="text-[#D4AF37]">T H E</span>{" "}
          <span className="text-white">D U A L</span>{" "}
          <span className="text-[#D4AF37]">S I G N A T U R E S</span>
        </h2>
        <p className="arabic-font text-lg text-gray-400 mt-2">الثنائية المميزة</p>
      </div>
      </ScrollAnimation>
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <ScrollAnimation animation="fade-left">
      {/* Pour Lui */}
      <div className="group relative h-[500px] overflow-hidden flex items-center justify-center p-4">
        {/* Ambient silver glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0]/0 via-[#C0C0C0]/15 to-[#C0C0C0]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
        <div className="absolute inset-0 shadow-[0_0_50px_rgba(192,192,192,0.05)] group-hover:shadow-[0_0_80px_rgba(192,192,192,0.2)] transition-all duration-700"></div>

        {/* Outer frame */}
        <div className="absolute inset-3 border border-[#C0C0C0]/50 group-hover:border-[#C0C0C0]/80 transition-all duration-500"></div>

        {/* Inner frame */}
        <div className="absolute inset-5 border border-white/[0.15] group-hover:border-[#C0C0C0]/40 transition-all duration-500"></div>

        {/* Corner ornaments - top left */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C0C0C0]/60 group-hover:border-[#C0C0C0]/90 transition-all duration-500 z-10"></div>
        <div className="absolute top-5 left-5 w-3 h-3 border-t border-l border-white/25 group-hover:border-[#C0C0C0]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - top right */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C0C0C0]/60 group-hover:border-[#C0C0C0]/90 transition-all duration-500 z-10"></div>
        <div className="absolute top-5 right-5 w-3 h-3 border-t border-r border-white/25 group-hover:border-[#C0C0C0]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - bottom left */}
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C0C0C0]/60 group-hover:border-[#C0C0C0]/90 transition-all duration-500 z-10"></div>
        <div className="absolute bottom-5 left-5 w-3 h-3 border-b border-l border-white/25 group-hover:border-[#C0C0C0]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - bottom right */}
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C0C0C0]/60 group-hover:border-[#C0C0C0]/90 transition-all duration-500 z-10"></div>
        <div className="absolute bottom-5 right-5 w-3 h-3 border-b border-r border-white/25 group-hover:border-[#C0C0C0]/70 transition-all duration-500 z-10"></div>

        {/* Sparkle particles on borders */}
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C0C0C0] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-125 group-hover:rotate-45" style={{marginTop: '-130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C0C0C0] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 group-hover:scale-125 group-hover:-rotate-45" style={{marginLeft: '130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C0C0C0] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 group-hover:scale-125 group-hover:-rotate-45" style={{marginTop: '130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C0C0C0] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[400ms] group-hover:scale-125 group-hover:rotate-45" style={{marginLeft: '-130px'}}></iconify-icon>

        {/* Mid-border accent lines */}
        <div className="absolute top-1/2 left-3 w-[1px] h-6 bg-[#C0C0C0]/10 group-hover:bg-[#C0C0C0]/40 transition-all duration-500 -translate-y-1/2 z-10"></div>
        <div className="absolute top-1/2 right-3 w-[1px] h-6 bg-[#C0C0C0]/10 group-hover:bg-[#C0C0C0]/40 transition-all duration-500 -translate-y-1/2 z-10"></div>

        <div className="absolute inset-5 overflow-hidden group-hover:scale-105 transition-transform duration-700">
          <img
            src="/parfum2.png"
            className="w-full h-full object-cover opacity-100 hover:opacity-100 transition-opacity duration-500 brightness-150 contrast-110"
            alt="Pour Lui"
          />
        </div>
        {/* Découvrir overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div className="flex flex-col items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Collection</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase font-bold px-6 py-2.5 border border-[#D4AF37] bg-black/50 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer">
              Découvrir
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A5A5A]/40 via-[#C0C0C0]/20 to-transparent pointer-events-none"></div>

        {/* Horizontal accent line through center area */}
        <div className="absolute top-1/2 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-[#C0C0C0]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10"></div>

        <div className="absolute top-8 right-8 z-20 flex flex-col items-end">
          <h3 className="serif-font text-5xl text-[#0A0A0A] uppercase tracking-tighter">POUR LUI</h3>
          <p className="arabic-font text-2xl text-[#0A0A0A]">للرجال</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a href="#" className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#5A5A5A] to-[#A0A0A0] text-black text-xs tracking-[0.2em] font-bold uppercase hover:from-white hover:to-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(160,160,160,0.3)] hover:shadow-[0_0_40px_rgba(160,160,160,0.6)]">
            Explore Silver
            <iconify-icon icon="lucide:sparkles" class="text-sm opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500"></iconify-icon>
          </a>
        </div>
      </div>
      </ScrollAnimation>

      {/* Animated center divider */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>
        <div className="w-3 h-3 rotate-45 border border-[#D4AF37] my-3"></div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent animate-pulse"></div>
      </div>

      <ScrollAnimation animation="fade-right">
      {/* Pour Elle */}
      <div className="group relative h-[500px] overflow-hidden flex items-center justify-center p-4">
        {/* Ambient gold glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
        <div className="absolute inset-0 shadow-[0_0_50px_rgba(212,175,55,0.02)] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.08)] transition-all duration-700"></div>

        {/* Outer frame */}
        <div className="absolute inset-3 border border-[#D4AF37]/50 group-hover:border-[#D4AF37]/80 transition-all duration-500"></div>

        {/* Inner frame */}
        <div className="absolute inset-5 border border-white/[0.15] group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>

        {/* Corner ornaments - top left */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]/90 transition-all duration-500 z-10"></div>
        <div className="absolute top-5 left-5 w-3 h-3 border-t border-l border-white/25 group-hover:border-[#D4AF37]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - top right */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]/90 transition-all duration-500 z-10"></div>
        <div className="absolute top-5 right-5 w-3 h-3 border-t border-r border-white/25 group-hover:border-[#D4AF37]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - bottom left */}
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]/90 transition-all duration-500 z-10"></div>
        <div className="absolute bottom-5 left-5 w-3 h-3 border-b border-l border-white/25 group-hover:border-[#D4AF37]/70 transition-all duration-500 z-10"></div>

        {/* Corner ornaments - bottom right */}
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37]/90 transition-all duration-500 z-10"></div>
        <div className="absolute bottom-5 right-5 w-3 h-3 border-b border-r border-white/25 group-hover:border-[#D4AF37]/70 transition-all duration-500 z-10"></div>

        {/* Sparkle particles on borders */}
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-125 group-hover:rotate-45" style={{marginTop: '-130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 group-hover:scale-125 group-hover:-rotate-45" style={{marginLeft: '130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 group-hover:scale-125 group-hover:-rotate-45" style={{marginTop: '130px'}}></iconify-icon>
        <iconify-icon icon="lucide:sparkle" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#D4AF37] text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[400ms] group-hover:scale-125 group-hover:rotate-45" style={{marginLeft: '-130px'}}></iconify-icon>

        {/* Mid-border accent lines */}
        <div className="absolute top-1/2 left-3 w-[1px] h-6 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/40 transition-all duration-500 -translate-y-1/2 z-10"></div>
        <div className="absolute top-1/2 right-3 w-[1px] h-6 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/40 transition-all duration-500 -translate-y-1/2 z-10"></div>

        <div className="absolute inset-5 overflow-hidden group-hover:scale-105 transition-transform duration-700">
          <img
            src="/parfum1.jpg"
            className="w-full h-full object-cover opacity-100 hover:opacity-100 transition-opacity duration-500 brightness-110 contrast-110"
            alt="Pour Elle"
          />
        </div>
        {/* Découvrir overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div className="flex flex-col items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold">Collection</span>
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            <span className="text-[#D4AF37] text-[11px] tracking-[0.2em] uppercase font-bold px-6 py-2.5 border border-[#D4AF37] bg-black/50 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black transition-all duration-300 cursor-pointer">
              Découvrir
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#8B6914]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>

        {/* Horizontal accent line through center area */}
        <div className="absolute top-1/2 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-10"></div>

        <div className="absolute top-8 right-8 z-20 flex flex-col items-end">
          <h3 className="serif-font text-5xl text-[#0A0A0A] uppercase tracking-tighter">POUR ELLE</h3>
          <p className="arabic-font text-2xl text-[#0A0A0A]">للنساء</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a href="#" className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#8B6914] to-[#C9A832] text-black text-xs tracking-[0.2em] font-bold uppercase hover:from-white hover:to-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(201,168,50,0.3)] hover:shadow-[0_0_40px_rgba(201,168,50,0.6)]">
            Explore Gold
            <iconify-icon icon="lucide:sparkles" class="text-sm opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500"></iconify-icon>
          </a>
        </div>
      </div>
      </ScrollAnimation>
      </div>
    </section>
  );
}
