import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-black/70 backdrop-blur-md flex items-center justify-center group hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
    >
      <iconify-icon
        icon="lucide:arrow-up"
        className="text-[#D4AF37] text-lg group-hover:text-black transition-colors duration-300"
      />
    </button>
  );
}
