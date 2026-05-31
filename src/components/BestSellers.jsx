import { useState, useEffect, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'AMANAY PREMIUM',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: 'Best-Seller',
    badgeBg: '#D4AF37',
    img: '/A.png',
  },
  {
    id: 2,
    name: 'SIGNATURE',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: null,
    img: '/B.png',
  },
  {
    id: 3,
    name: 'ELITE EDITION',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#C0C0C0',
    badge: 'Nouveau',
    badgeBg: '#C0C0C0',
    img: '/C.png',
  },
  {
    id: 4,
    name: 'LUXE OUD',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: null,
    img: '/D.png',
  },
  {
    id: 5,
    name: 'ROSE GOLD',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: 'Populaire',
    badgeBg: '#D4AF37',
    img: '/A.png',
  },
  {
    id: 6,
    name: 'NOIR PUR',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#C0C0C0',
    badge: null,
    img: '/B.png',
  },
  {
    id: 7,
    name: 'AMBER SKY',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: null,
    img: '/C.png',
  },
  {
    id: 8,
    name: 'SILVER WAVE',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#C0C0C0',
    badge: 'Nouveau',
    badgeBg: '#C0C0C0',
    img: '/D.png',
  },
  {
    id: 9,
    name: 'OUD NOIR',
    type: 'HUILE DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: null,
    img: '/D.png',
  },
  {
    id: 10,
    name: 'MUSC BLANC',
    type: 'EAU DE PARFUM',
    size: '100ML',
    price: '50 DH',
    priceColor: '#D4AF37',
    badge: 'Nouveau',
    badgeBg: '#D4AF37',
    img: '/e.jpg',
  },
];

const filters = [
  { key: 'all', label: 'Tous' },
  { key: 'edp', label: 'Eau de Parfum' },
  { key: 'huile', label: 'Huile' },
];

export default function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const carouselRef = useRef(null);

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => {
        if (activeFilter === 'edp') return p.type === 'EAU DE PARFUM';
        if (activeFilter === 'huile') return p.type === 'HUILE DE PARFUM';
        return true;
      });

  const totalSlides = Math.max(1, filteredProducts.length - itemsPerView + 1);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setCurrentIndex(0);
  };

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleUntilt = (e) => {
    e.currentTarget.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Ambient light orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-[#C0C0C0]/5 blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/3 via-transparent to-[#C0C0C0]/3 blur-[150px]"></div>

      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Top diagonal transition */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
          <polygon points="0,60 1440,0 1440,60" fill="#0A0A0A" />
        </svg>
      </div>

      <div className="max-w-full mx-auto px-4 lg:px-10 xl:px-16 relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
            <span className="text-[#D4AF37] text-[10px] tracking-[0.3em] font-semibold uppercase">Nos Créations Exclusives</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60"></div>
          </div>
          <h2 className="serif-font text-4xl lg:text-5xl text-white tracking-[0.15em] font-light">
            <span className="text-[#D4AF37]">B E S T</span>{" "}
            <span className="text-white">S E L L E R S</span>
          </h2>
          <p className="arabic-font text-lg text-gray-400 mt-2">العطور الأكثر مبيعاً</p>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3 mt-6">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`px-5 py-2 text-[9px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                  activeFilter === f.key
                    ? 'bg-[#D4AF37] text-black'
                    : 'border border-white/20 text-white/60 hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Bottom gold line */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-5"></div>
        </div>

        {/* ── Carousel ── */}
        <div
          ref={carouselRef}
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Previous Button */}
          {totalSlides > 1 && (
          <button
            onClick={prevSlide}
            className="absolute -left-4 lg:left-0 top-1/2 -translate-y-1/2 z-20 group"
          >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-black/70 backdrop-blur-md group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-400"></div>
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-400"></div>
              <iconify-icon icon="lucide:chevron-left" className="relative z-10 text-xl lg:text-2xl text-white/80 group-hover:text-black transition-colors duration-400"></iconify-icon>
            </div>
          </button>
          )}

          <div
            className="overflow-hidden mx-10 lg:mx-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-600 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div
                    className="group relative h-[420px] overflow-hidden transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    data-tilt
                    onMouseMove={handleTilt}
                    onMouseLeave={handleUntilt}
                    onClick={() => setLightbox(product)}
                  >
                    {/* Card border glow base */}
                    <div className="absolute inset-0 rounded-sm border border-white/[0.06] group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>

                    {/* Card background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-black/60"></div>

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Top gold accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 group-hover:via-[#D4AF37]/60 to-transparent transition-all duration-500"></div>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-20">
                        <span
                          className="relative inline-block px-4 py-1.5 text-black text-[8px] font-black uppercase tracking-[0.25em]"
                          style={{ backgroundColor: product.badgeBg }}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Product Image */}
                    <div className="absolute inset-0 flex items-center justify-center p-8 pt-14 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={product.img}
                          className="w-full h-full object-contain transform scale-110 transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 opacity-80 group-hover:opacity-100"
                          alt={product.name}
                        />
                      </div>
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Quick view hint */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-4 py-2 bg-black/70 backdrop-blur-md border border-white/20 text-white text-[8px] tracking-[0.2em] uppercase">
                        Cliquez pour voir
                      </span>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent z-10">
                      <div className="text-center">
                        {/* Divider */}
                        <div className="w-8 h-[1px] bg-[#D4AF37]/40 mx-auto mb-3 group-hover:w-12 transition-all duration-400"></div>

                        <h4 className="serif-font text-sm lg:text-base text-white mb-1 tracking-[0.15em] group-hover:tracking-[0.2em] transition-all duration-400">
                          {product.name}
                        </h4>

                        <p className="text-[8px] tracking-[0.3em] text-gray-500 uppercase font-medium mb-2">
                          {product.type} — {product.size}
                        </p>

                        <p className="font-bold text-xl mb-3 transition-all duration-300 group-hover:scale-110" style={{ color: product.priceColor }}>
                          {product.price}
                        </p>

                        <a
                          href="https://wa.me/212600000000"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-white/20 text-white text-[8px] uppercase tracking-[0.25em] font-bold overflow-hidden relative group/btn hover:border-[#25D366] transition-all duration-300"
                        >
                          <span className="absolute inset-0 bg-[#25D366] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                          <iconify-icon icon="ic:baseline-whatsapp" className="relative z-10 text-sm"></iconify-icon>
                          <span className="relative z-10">Commander</span>
                        </a>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/0 group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/0 group-hover:border-[#D4AF37]/40 transition-all duration-500"></div>

                    {/* Heart icon on hover */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <div className="w-8 h-8 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-red-400 hover:border-red-400/50 transition-all duration-300 cursor-pointer">
                        <iconify-icon icon="lucide:heart" className="text-sm"></iconify-icon>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {totalSlides > 1 && (
          <button
            onClick={nextSlide}
            className="absolute -right-4 lg:right-0 top-1/2 -translate-y-1/2 z-20 group"
          >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/10 bg-black/70 backdrop-blur-md group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-400"></div>
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-400"></div>
              <iconify-icon icon="lucide:chevron-right" className="relative z-10 text-xl lg:text-2xl text-white/80 group-hover:text-black transition-colors duration-400"></iconify-icon>
            </div>
          </button>
          )}
        </div>

        {/* ── Dots Navigation ── */}
        {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative rounded-full transition-all duration-500 ${
                currentIndex === i
                  ? 'bg-[#D4AF37] w-10 h-2'
                  : 'bg-white/20 hover:bg-white/40 w-2 h-2'
              }`}
            >
              {currentIndex === i && (
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/40 animate-ping"></div>
              )}
            </button>
          ))}
        </div>
        )}

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
            <iconify-icon icon="lucide:gem" className="text-[#D4AF37]/40 text-lg"></iconify-icon>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
          </div>

          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-12 py-4 overflow-hidden"
          >
            {/* Button background layers */}
            <span className="absolute inset-0 border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-500"></span>
            <span className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3 text-[#D4AF37] group-hover:text-black text-xs tracking-[0.3em] font-bold uppercase transition-colors duration-500">
              Voir toute la collection
              <iconify-icon icon="lucide:arrow-right" className="text-sm group-hover:translate-x-1 transition-transform duration-300"></iconify-icon>
            </span>
          </a>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/20"></div>
            <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/30"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/20"></div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#111] border border-[#D4AF37]/20 p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-colors z-10"
            >
              <iconify-icon icon="lucide:x" className="text-lg"></iconify-icon>
            </button>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/40"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/40"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#D4AF37]/40"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/40"></div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent p-8">
                <img
                  src={lightbox.img}
                  alt={lightbox.name}
                  className="w-full max-h-[300px] object-contain"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                {lightbox.badge && (
                  <span
                    className="inline-block px-3 py-1 text-black text-[8px] font-black uppercase tracking-[0.25em] mb-4"
                    style={{ backgroundColor: lightbox.badgeBg }}
                  >
                    {lightbox.badge}
                  </span>
                )}
                <h3 className="serif-font text-3xl text-white mb-2">{lightbox.name}</h3>
                <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase font-medium mb-4">
                  {lightbox.type} — {lightbox.size}
                </p>
                <p className="text-3xl font-bold mb-6" style={{ color: lightbox.priceColor }}>
                  {lightbox.price}
                </p>
                <a
                  href="https://wa.me/212600000000"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-green-400 transition-colors"
                >
                  <iconify-icon icon="ic:baseline-whatsapp" className="text-base"></iconify-icon>
                  Commander via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]">
          <polygon points="0,60 1440,0 1440,60" fill="#0A0A0A" />
        </svg>
      </div>
    </section>
  );
}
