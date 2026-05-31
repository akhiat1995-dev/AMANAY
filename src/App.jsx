import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import BestSellers from './components/BestSellers';
import Trust from './components/Trust';
import OurStory from './components/OurStory';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

/* ── Creative Section Dividers ─────────────────────────── */

/** Traditional Moroccan Pattern Divider */
function MoroccanDivider() {
  return (
    <div className="flex items-center justify-center py-8 bg-[#050505]">
      <div className="flex items-center gap-4">
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/40"></span>
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/60"></span>
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/80"></span>
          <iconify-icon icon="lucide:gem" className="text-[#D4AF37] text-lg"></iconify-icon>
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/80"></span>
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/60"></span>
          <span className="w-2 h-2 rotate-45 border border-[#D4AF37]/40"></span>
        </div>
        <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
      </div>
    </div>
  );
}

/** Diamond Pattern Divider */
function DiamondDivider() {
  return (
    <div className="py-6 bg-[#0A0A0A]">
      <div className="flex items-center justify-center gap-2">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={`w-1 h-1 rotate-45 ${i % 2 === 0 ? 'bg-[#D4AF37]/40' : 'bg-transparent'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

/** Arabesque Divider */
function ArabesqueDivider() {
  return (
    <div className="flex items-center justify-center py-4 bg-[#050505]">
      <div className="relative w-64">
        <svg viewBox="0 0 200 20" className="w-full h-auto">
          <path d="M0,10 Q50,0 100,10 T200,10" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4"/>
          <path d="M0,10 Q50,20 100,10 T200,10" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity="0.4"/>
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[#D4AF37]/50 rotate-45"></div>
      </div>
    </div>
  );
}

/** Gold rule with centered ornament */
function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6 px-8 bg-[#050505]">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-[#D4AF37]/10"></div>
      <div className="flex items-center gap-2 text-[#D4AF37]/60">
        <span className="text-[8px] tracking-[0.5em] uppercase font-bold text-[#D4AF37]/40">✦</span>
        <iconify-icon icon="lucide:sparkles" style={{ fontSize: '14px', color: '#D4AF37' }}></iconify-icon>
        <span className="text-[8px] tracking-[0.5em] uppercase font-bold text-[#D4AF37]/40">✦</span>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#D4AF37]/40 to-[#D4AF37]/10"></div>
    </div>
  );
}

/** Diagonal slash — dark → slightly lighter */
function DiagonalDivider({ flip = false, from = '#0A0A0A', to = '#050505' }) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]" style={{ height: 70, background: to }}>
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {flip
          ? <polygon points="0,0 1440,70 0,70" fill={from} />
          : <polygon points="0,0 1440,0 0,70" fill={from} />
        }
      </svg>
    </div>
  );
}

/** Wave SVG */
function WaveDivider({ from = '#111111', to = '#050505' }) {
  return (
    <div className="relative w-full overflow-hidden leading-[0]" style={{ height: 60, background: to }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
          fill={from}
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────── */

function App() {
  return (
    <div className="min-h-screen">
      <Loader />
      <CustomCursor />
      <BackToTop />
      <Header />

      <main className="pt-20">
        <div className="w-full h-[1px] bg-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.2)]"></div>
        {/* ① Hero */}
        <div id="hero"><Hero /></div>

        {/* Traditional divider */}
        <DiamondDivider />

        {/* ② Collections */}
        <div id="collections"><Collections /></div>

        {/* Traditional Moroccan divider */}
        <MoroccanDivider />

        {/* ③ Best Sellers */}
        <div id="bestsellers"><BestSellers /></div>

        {/* ③b Testimonials */}
        <div id="avis"><Testimonials /></div>

        {/* Wave divider */}
        <WaveDivider from="#050505" to="#0A0A0A" />

        {/* ④ Trust - Pourquoi choisir AMANAY */}
        <div id="trust">
          <div className="py-2 bg-[#050505]">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-[8px] tracking-[0.4em] uppercase">Pourquoi nous choisir</span>
              <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
            </div>
          </div>
          <Trust />
        </div>

        {/* Arabesque divider */}
        <ArabesqueDivider />

        {/* ⑤ Our Story */}
        <div id="about"><OurStory /></div>

        {/* ⑥ Brand Story - L'Histoire d'AMANAY */}
        <div id="story">
          <div className="py-2 bg-[#050505]">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-[8px] tracking-[0.4em] uppercase">Notre Histoire</span>
              <div className="w-4 h-[1px] bg-[#D4AF37]"></div>
            </div>
          </div>
          <BrandStory />
        </div>

        {/* Gold ornament before footer */}
        <OrnamentDivider />
      </main>

      <div id="contact"><Footer /></div>
    </div>
  );
}

export default App;
