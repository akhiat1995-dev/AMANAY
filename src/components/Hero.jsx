import { useEffect, useRef } from 'react';
import GoldParticles from './GoldParticles';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(62vh-56px)] w-full flex flex-col overflow-hidden">
      {/* Floating gold particles */}
      <GoldParticles />

      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/hero/HEROSECTION.png')",
          backgroundSize: 'contain',
          backgroundPosition: '55% center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Bottom gradient fading into next section */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>

      {/* Top spacer */}
      <div className="flex-1"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 mt-6">
        <div className="flex justify-between items-start w-full">
          {/* Left Text Content */}
          <div className="flex flex-col items-start max-w-2xl ml-2 md:ml-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40"></div>
              <p className="text-[#D4AF37] text-[10px] md:text-[11px] tracking-[0.3em] font-medium uppercase">
                L'Art du Parfum Marocain
              </p>
              <div className="w-6 h-[1px] bg-gradient-to-l from-[#D4AF37] to-[#D4AF37]/40"></div>
            </div>

            {/* Main Title */}
            <h1 className="serif-font leading-[1.1] mb-1">
              <span className="block text-white text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] font-normal drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)]">
                <TypewriterText text="LE MEILLEUR" speed={60} delay={0} />
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] font-normal mt-1">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent">
                  <TypewriterText text="MIXTE" speed={60} delay={400} />
                </span>
                <span className="text-white">
                  <TypewriterText text=" DES" speed={60} delay={550} />
                </span>
              </span>
              <span className="block text-white text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] font-normal drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)]">
                <TypewriterText text="PARFUMS" speed={60} delay={900} />
              </span>
              <div className="flex items-center gap-3 my-2">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
                <span className="text-[6px] tracking-[0.5em] text-[#D4AF37]/40 uppercase font-bold">✦ ICONIQUE ✦</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
              </div>
              <span className="block text-2xl md:text-3xl lg:text-4xl tracking-[0.15em] font-normal">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5E6A3] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(212,175,55,0.25)]">
                  <TypewriterText text="ICONIQUES" speed={60} delay={1300} />
                </span>
              </span>
            </h1>

            {/* Badge Exclusif */}
            <div className="flex items-center gap-2 mt-2 mb-1 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_1.8s_forwards]">
              <div className="border border-[#D4AF37]/30 rounded-full px-3 py-0.5 bg-[#D4AF37]/5">
                <span className="text-[7px] md:text-[8px] tracking-[0.3em] text-[#D4AF37] uppercase font-semibold">✧ Édition Limitée ✧</span>
              </div>
            </div>

            {/* Arabic Text */}
            <div className="relative mt-2 mb-3 self-start opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_2.2s_forwards]">
              <div className="absolute -inset-3 bg-[#D4AF37]/5 rounded-xl border border-[#D4AF37]/10"></div>
              <h2
                className="traditional-arabic text-xl md:text-2xl text-white font-medium text-right px-3 py-1" dir="rtl">
                أماناي - أفضل مزيج من العطور الراقية
              </h2>
            </div>

            {/* Description */}
            <div
              className="max-w-xl mt-6 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_2.5s_forwards]">
              <div className="relative flex items-start gap-3 bg-white/[0.03] backdrop-blur-sm rounded-lg border border-[#D4AF37]/10 p-3.5 pl-5 group hover:bg-white/[0.06] hover:border-[#D4AF37]/25 transition-all duration-500">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent rounded-full"></div>
                <iconify-icon icon="lucide:sparkles" className="text-[#D4AF37] text-base mt-0.5 shrink-0"></iconify-icon>
                <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed font-light">
                  Des fragrances inspirées des plus grandes marques<br />avec une <span className="text-[#D4AF37]/90 font-medium">excellente tenue</span> et un <span className="text-[#D4AF37]/90 font-medium">prix accessible</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex flex-col gap-4 items-center justify-center mt-16">
            {[
              { icon: 'lucide:plane', label: 'LIVRAISON\nMONDIALE' },
              { icon: 'lucide:compass', label: 'ORIGINE\nCERTIFIEE' },
              { icon: 'lucide:badge-dollar-sign', label: 'PRIX\nEXCLUSIF' },
              { icon: 'lucide:clock', label: 'LIVRAISON\nEN 48H' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-[36px] h-[36px] rounded-full border border-[#D4AF37]/40 flex items-center justify-center p-[2px] relative group cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <div className="absolute inset-[2px] rounded-full border border-dashed border-[#D4AF37]/60"></div>
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <iconify-icon icon={f.icon} className="text-[#D4AF37] text-base"></iconify-icon>
                  </div>
                </div>
                <span className="text-[9px] md:text-[10px] tracking-[0.1em] text-[#D4AF37] font-medium uppercase text-center whitespace-pre-line leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom area with buttons */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 mt-3 pb-1">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center rounded-full p-[2px] border border-[#D4AF37]/30 bg-[#111111]/90 backdrop-blur-md shadow-2xl">
            <a href="#bestsellers" className="px-4 md:px-5 py-2 md:py-2.5 bg-[#D4AF37] text-black text-[10px] md:text-[11px] tracking-[0.15em] font-semibold uppercase rounded-full flex items-center gap-1.5 hover:bg-[#C5A017] transition-all">
              DÉCOUVRIR
              <iconify-icon icon="lucide:arrow-right" className="text-sm"></iconify-icon>
            </a>
            <a href="https://wa.me/212600000000" className="px-4 md:px-5 py-2 md:py-2.5 text-[#D4AF37] text-[10px] md:text-[11px] tracking-[0.15em] font-semibold uppercase rounded-full flex items-center gap-1.5 hover:bg-[#25D366] hover:text-white active:bg-[#1ebe5c] active:text-white transition-all">
              COMMANDER
              <iconify-icon icon="ic:baseline-whatsapp" className="text-sm"></iconify-icon>
            </a>
          </div>
          <div className="flex flex-col items-center gap-0.5 animate-bounce">
            <span className="text-[8px] tracking-[0.3em] uppercase text-white/50">DÉFILER</span>
            <iconify-icon icon="lucide:chevron-down" className="text-white/40 text-base"></iconify-icon>
          </div>
        </div>
      </div>

      {/* Bottom right star detail */}
      <div className="absolute bottom-6 right-6 text-white/30 hidden lg:block">
        <iconify-icon icon="mingcute:star-fill" className="text-2xl"></iconify-icon>
      </div>
    </section>
  );
}
