import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#collections', label: 'Collections' },
    { href: '#bestsellers', label: 'Boutique' },
    { href: '#avis', label: 'Avis' },
    { href: '#trust', label: 'Pourquoi nous', gold: true },
    { href: '#story', label: 'Notre Histoire' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-[0_1px_10px_rgba(0,0,0,0.5)]'
          : 'bg-[#0A0A0A]/30 backdrop-blur-[6px]'
      }`}
    >
      <div className={`max-w-full mx-auto px-4 lg:px-10 xl:px-16 flex items-center justify-between transition-all duration-400 ${
        scrolled ? 'h-16' : 'h-20'
      }`}>
        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
        >
          <iconify-icon icon="lucide:menu" className="text-2xl"></iconify-icon>
        </button>

        {/* Left Nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/80">
          <a href="#collections" className="hover:text-white transition-colors">Collections</a>
          <a href="#bestsellers" className="hover:text-white transition-colors">Boutique</a>
          <a href="#avis" className="hover:text-white transition-colors">Avis</a>
          <a href="#trust" className="px-3 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
            Pourquoi nous
          </a>
        </nav>

        {/* Logo Center */}
        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <div className="flex items-center gap-3">
              <span className={`font-bold text-white uppercase transition-all duration-400 ${
                scrolled ? 'text-lg tracking-[0.4em]' : 'text-xl tracking-[0.5em]'
              }`} style={{ fontFamily: "'Cinzel', 'Playfair Display', serif", textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                AMANAY
              </span>
              <img src="/brand/LOGO.png" alt="Logo" className={`object-contain transition-all duration-400 ${
                scrolled ? 'h-8 w-8' : 'h-10 w-10'
              }`} />
              <span className={`w-[1px] bg-gray-600 transition-all duration-400 ${
                scrolled ? 'h-4' : 'h-6'
              }`}></span>
              <span className={`maghribi-font font-normal text-[#D4AF37] leading-none transition-all duration-400 ${
                scrolled ? 'text-3xl' : 'text-4xl'
              }`} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>أماناي</span>
            </div>
            <span className={`text-gray-500 mt-0.5 uppercase transition-all duration-400 ${
              scrolled ? 'text-[6px] tracking-[0.3em] opacity-0 h-0 overflow-hidden' : 'text-[8px] tracking-[0.4em]'
            }`}>Haute Parfumerie</span>
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-5 text-[10px] tracking-[0.2em] uppercase font-semibold text-white/80 mr-2">
            <a href="#story" className="hover:text-white transition-colors">Notre Histoire</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="https://wa.me/212600000000" className={`rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-green-400 transition-all duration-400 ${
            scrolled ? 'w-8 h-8' : 'w-10 h-10'
          }`}>
            <iconify-icon icon="ic:baseline-whatsapp" className={`transition-all duration-400 ${
              scrolled ? 'text-base' : 'text-lg'
            }`}></iconify-icon>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0A0A0A] z-50 lg:hidden border-l border-white/10 transform transition-transform duration-400 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Decorative top gold line */}
        <div className="h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>

        {/* Close button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <span className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase font-bold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <iconify-icon icon="lucide:x" className="text-xl"></iconify-icon>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="px-6 py-8 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3.5 text-[11px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 border-b border-white/5 ${
                link.gold
                  ? 'text-[#D4AF37] hover:text-white hover:pl-4'
                  : 'text-white/70 hover:text-white hover:pl-4'
              }`}
            >
              <span className="flex items-center gap-3">
                {link.gold && (
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></span>
                )}
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom decorative section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#D4AF37]/40"></div>
            <span className="text-[8px] tracking-[0.3em] text-gray-500 uppercase">Navigation</span>
            <div className="flex-1 h-[1px] bg-[#D4AF37]/40"></div>
          </div>
          <p className="arabic-font text-sm text-[#D4AF37] text-center">أماناي - عطر الأناقة</p>
        </div>
      </div>
    </header>
  );
}
