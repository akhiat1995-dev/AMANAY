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
    <section className="relative h-[75vh] min-h-[600px] max-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Floating gold particles */}
      <GoldParticles />

      {/* Background Image with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/HEROSECTION.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Bottom gradient fading into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-between pt-4 pb-4">
        
        {/* Top/Middle Section with Left Text and Right Icons */}
        <div className="flex justify-between items-center w-full mt-auto mb-auto">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start max-w-2xl -ml-6 md:-ml-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[1px] bg-[#D4AF37]"></div>
              <p className="text-[#D4AF37] text-[11px] md:text-[13px] tracking-[0.2em] font-medium uppercase">
                L'Art du Parfum Marocain
              </p>
            </div>

            {/* Main Title */}
            <h1 className="serif-font leading-[1.05] mb-2">
              <span className="block text-white text-3xl md:text-4xl lg:text-5xl tracking-wide font-normal">
                <TypewriterText text="LE MEILLEUR" speed={60} delay={0} />
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl tracking-wide font-normal">
                <TypewriterText text="MIXTE" speed={60} delay={400} className="text-[#D4AF37]" />
                <TypewriterText text=" DES" speed={60} delay={550} className="text-white" />
              </span>
              <span className="block text-white text-3xl md:text-4xl lg:text-5xl tracking-wide font-normal">
                <TypewriterText text="PARFUMS" speed={60} delay={900} />
              </span>
              <span className="block text-[#D4AF37] text-3xl md:text-4xl lg:text-5xl tracking-wide font-normal">
                <TypewriterText text="ICONIQUES" speed={60} delay={1300} />
              </span>
            </h1>

            {/* Arabic Text */}
            <h2
              className="traditional-arabic text-2xl md:text-3xl text-white font-medium mb-4 text-right self-start opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_2.2s_forwards]" dir="rtl">
              أماناي - أفضل مزيج من العطور الراقية
            </h2>

            {/* Description */}
            <p
              className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-light pl-8 border-l border-[#D4AF37]/50 mt-1 opacity-0 translate-y-4 animate-[fadeInUp_0.6s_ease-out_2.5s_forwards]">
              Des fragrances inspirées des plus grandes marques avec une excellente tenue et un prix accessible.
            </p>
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex flex-col gap-6 items-center justify-center">
            {[
              { icon: 'lucide:plane', label: 'LIVRAISON\nMONDIALE' },
              { icon: 'lucide:compass', label: 'ORIGINE\nCERTIFIEE' },
              { icon: 'lucide:badge-dollar-sign', label: 'PRIX\nEXCLUSIF' },
              { icon: 'lucide:clock', label: 'LIVRAISON\nEN 48H' },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-[44px] h-[44px] rounded-full border border-[#D4AF37]/40 flex items-center justify-center p-[2px] relative group cursor-pointer hover:border-[#D4AF37] transition-colors">
                  <div className="absolute inset-[2px] rounded-full border border-dashed border-[#D4AF37]/60"></div>
                  <div className="w-full h-full rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <iconify-icon icon={f.icon} className="text-[#D4AF37] text-lg"></iconify-icon>
                  </div>
                </div>
                <span className="text-[10px] md:text-[11px] tracking-[0.1em] text-[#D4AF37] font-medium uppercase text-center whitespace-pre-line leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions (Centered) */}
        <div className="flex flex-col items-center justify-end mt-auto gap-6 z-20">
          {/* Combined Action Pill */}
          <div className="flex items-center rounded-full p-[2px] border border-[#D4AF37]/30 bg-[#111111]/90 backdrop-blur-md shadow-2xl">
            <a href="#bestsellers" className="px-5 md:px-7 py-2.5 md:py-3 bg-[#D4AF37] text-black text-[11px] md:text-[12px] tracking-[0.15em] font-semibold uppercase rounded-full flex items-center gap-2 hover:bg-[#C5A017] transition-all">
              DÉCOUVRIR
              <iconify-icon icon="lucide:arrow-right" className="text-base"></iconify-icon>
            </a>
            <a href="https://wa.me/212600000000" className="px-5 md:px-7 py-2.5 md:py-3 text-[#D4AF37] text-[11px] md:text-[12px] tracking-[0.15em] font-semibold uppercase rounded-full flex items-center gap-2 hover:bg-[#25D366] hover:text-white active:bg-[#1ebe5c] active:text-white transition-all">
              COMMANDER
              <iconify-icon icon="ic:baseline-whatsapp" className="text-base"></iconify-icon>
            </a>
          </div>

          {/* Scroll Text */}
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <span className="text-[9px] tracking-[0.3em] uppercase text-white/50">DÉFILER</span>
            <iconify-icon icon="lucide:chevron-down" className="text-white/40 text-lg"></iconify-icon>
          </div>
        </div>
      </div>

      {/* Bottom right star detail */}
      <div className="absolute bottom-8 right-8 text-white/30 hidden lg:block">
        <iconify-icon icon="mingcute:star-fill" className="text-3xl"></iconify-icon>
      </div>
    </section>
  );
}
