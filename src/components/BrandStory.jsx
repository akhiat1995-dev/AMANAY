import { useRef, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';
import TypewriterText from './TypewriterText';

export default function BrandStory() {
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        const speed = 0.15;
        const offset = (window.innerHeight - rect.top) * speed;
        imgRef.current.style.transform = `translateY(${Math.max(0, offset)}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative bg-[#050505] overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="8" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Main Split Screen */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen">


        {/* Left Side - Image with parallax & clip-path reveal */}
        <ScrollAnimation animation="fade-left">
        <div className="relative h-[40vh] lg:h-[55vh] overflow-hidden">
          <div className="absolute inset-0 animate-[clipReveal_1.2s_ease-out_0.3s_forwards] origin-left" style={{ clipPath: 'inset(0 100% 0 0)' }}>
            <img
              ref={imgRef}
              src="/HISTOIREAMANAY.png"
              className="w-full h-full object-cover brightness-125 contrast-110 will-change-transform"
              alt="L'histoire AMANAY"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 to-transparent"></div>

          {/* Decorative corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/40"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/40"></div>
        </div>
        </ScrollAnimation>

        {/* Right Side - Content */}
        <ScrollAnimation animation="fade-right">
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16 relative">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">L'Histoire</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            </div>
            <h2 className="serif-font text-4xl md:text-5xl text-white tracking-[0.15em] font-light">
              <span className="text-[#D4AF37]">A M A N A Y</span>
            </h2>
            <p className="arabic-font text-lg text-gray-400 mt-2">قصتنا</p>
          </div>

          {/* Central Quote with typewriter */}
          <div className="relative py-8 mb-8">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
            <blockquote className="serif-font text-2xl lg:text-3xl text-white leading-relaxed italic">
              <TypewriterText
                text="Le parfum est une signature invisible qui révèle la personnalité, l'élégance et le caractère de chacun."
                speed={25}
                delay={300}
              />
            </blockquote>
          </div>

          {/* Story Text */}
          <ScrollAnimation animation="fade-up" delay={200}>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-white text-sm tracking-widest uppercase font-bold mb-3">Notre Origine</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                AMANAY est née d'une conviction profonde. Inspiré du mot amazigh signifiant <span className="text-[#D4AF37]">"le cavalier élégant"</span>, 
                notre nom incarne la noblesse, la confiance et le raffinement.
              </p>
            </div>
            <p className="arabic-font text-lg text-gray-300">
              استُلهم اسم أماناي من "الفارس الأنيق" في الثقافة الأمازيغية، ليجسد القوة والنبل والجاذبية.
            </p>
          </div>
          </ScrollAnimation>


        </div>
        </ScrollAnimation>
      </div>

      {/* Vision Section */}
      <div className="relative py-24 px-8 overflow-hidden">
        {/* 2. Lampe maghrébine - colored light projection */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/8 via-[#C9A832]/5 to-transparent blur-[120px] animate-[pulse-glow_6s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#8B6914]/10 via-[#D4AF37]/5 to-transparent blur-[100px] animate-[pulse-glow_8s_ease-in-out_infinite_1s]"></div>
          <div className="absolute top-1/3 -right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-[#E6B45C]/10 via-transparent to-transparent blur-[80px] animate-[pulse-glow_7s_ease-in-out_infinite_2s]"></div>
        </div>

        {/* Moroccan geometric background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <svg viewBox="0 0 400 400" className="w-[600px] h-[600px] animate-[spin-slow_40s_linear_infinite]">
            <defs>
              <pattern id="zellige" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="#D4AF37" strokeWidth="1"/>
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="400" fill="url(#zellige)" />
            <g transform="translate(200,200)">
              <polygon points="0,-160 38,-118 100,-118 62,-76 100,-38 38,-38 0,-76 -38,-38 -38,-76 -100,-38 -62,-76 -100,-118 -38,-118 0,-160" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5"/>
              <polygon points="0,-120 28,-88 75,-88 47,-56 75,-28 28,-28 0,-56 -28,-28 -28,-56 -75,-28 -47,-56 -75,-88 -28,-88 0,-120" fill="none" stroke="#D4AF37" strokeWidth="0.4" opacity="0.3"/>
            </g>
          </svg>
        </div>

        {/* Gold particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-ping"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>

        {/* 5. Gem animation - rotating + sparkle bursts */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[60px] animate-[pulse-glow_4s_ease-in-out_infinite]"></div>
            {/* Rotating ring */}
            <div className="absolute inset-2 rounded-full border border-[#D4AF37]/20 animate-[spin-slow_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-dashed border-[#D4AF37]/15 animate-[spin-slow_15s_linear_infinite_reverse]"></div>
            {/* Sparkle bursts */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-gradient-to-t from-[#D4AF37] to-transparent rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-28px)`,
                  animation: `pulse-glow ${1.5 + Math.random() * 2}s ease-in-out ${i * 0.4}s infinite`,
                  opacity: 0,
                }}
              />
            ))}
            <iconify-icon icon="lucide:gem" className="text-4xl text-[#D4AF37] relative z-10"></iconify-icon>
          </div>
        </div>

        <ScrollAnimation animation="fade-up">
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-20">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
              <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Notre Vision</span>
              <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            </div>
            <h3 className="serif-font text-4xl md:text-5xl text-white tracking-[0.15em] font-light">
              <span className="text-[#D4AF37]">N O T R E</span>{" "}
              <span className="text-white">V I S I O N</span>
            </h3>
            <p className="arabic-font text-lg text-gray-400 mt-2">رؤيتنا</p>
          </div>
          {/* 3. Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: 'lucide:scroll-text', title: 'Authenticité', desc: 'Héritage et racines marocaines', arabic: 'أصالة' },
              { icon: 'lucide:lightbulb', title: 'Innovation', desc: 'Techniques modernes de parfumerie', arabic: 'ابتكار' },
              { icon: 'lucide:crown', title: 'Excellence', desc: 'Qualité premium sans compromis', arabic: 'تميّز' },
            ].map((pillar, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 150}>
              <div className="group relative p-6 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/[0.06] group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/[0.06] group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>
                <iconify-icon icon={pillar.icon} className="text-2xl text-[#D4AF37] mb-3 block mx-auto group-hover:scale-110 transition-transform duration-300"></iconify-icon>
                <h4 className="text-white text-[10px] tracking-[0.3em] uppercase font-bold mb-1">{pillar.title}</h4>
                <p className="text-[9px] text-gray-500 mb-1">{pillar.desc}</p>
                <p className="text-[11px] text-[#D4AF37]/60">{pillar.arabic}</p>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/[0.03] transition-all duration-500 pointer-events-none"></div>
              </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
        </ScrollAnimation>
      </div>

      {/* Pour Lui & Pour Elle */}
      <div className="px-4 lg:px-10 xl:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative h-80 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.15)] transition-shadow duration-500">
            <div className="absolute inset-0 border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-all duration-500 z-10"></div>
            <img 
              src="/NOTREVISION.png" 
              className="w-full h-full object-cover brightness-125 contrast-110 scale-105 group-hover:scale-110 transition-all duration-700"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent"></div>
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
          </div>
          <div className="group relative h-80 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.15)] transition-shadow duration-500">
            <div className="absolute inset-0 border border-white/[0.06] group-hover:border-[#D4AF37]/30 transition-all duration-500 z-10"></div>
            <img 
              src="/NOTREVISION.png" 
              className="w-full h-full object-cover brightness-125 contrast-110 scale-105 group-hover:scale-110 transition-all duration-700"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent"></div>
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/10 group-hover:border-[#D4AF37]/50 transition-all duration-500 z-10"></div>
          </div>
        </div>
      </div>

      {/* Final Statement */}
      <div className="py-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
        <iconify-icon icon="lucide:crown" className="text-3xl text-[#D4AF37] mb-4"></iconify-icon>
        <h3 className="serif-font text-4xl lg:text-5xl text-white uppercase tracking-wider mb-4">
          AMANAY EST <span className="text-[#D4AF37]">UNE SENSATION</span>
        </h3>
        <p className="text-gray-500 text-xs tracking-[0.6em] uppercase">Une allure · Une identité</p>
      </div>
    </section>
  );
}