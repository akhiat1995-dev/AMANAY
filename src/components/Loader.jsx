import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#0A0A0A] flex flex-col items-center justify-center">
      {/* Decorative lines */}
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6" />

      {/* Logo animation */}
      <div className="flex items-center gap-4 animate-pulse">
        <span
          className="text-3xl tracking-[0.5em] font-bold text-white uppercase animate-pulse"
          style={{ fontFamily: "'Cinzel', serif", animationDelay: '0.2s' }}
        >
          AMANAY
        </span>
        <span
          className="traditional-arabic text-4xl text-[#D4AF37] animate-pulse"
          style={{ animationDelay: '0.4s' }}
        >
          أماناي
        </span>
      </div>

      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6" />

      {/* Spinning gold ring */}
      <div className="mt-8 relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#D4AF37] border-r-[#D4AF37] animate-spin" />
        <div className="absolute inset-1 rounded-full border border-[#D4AF37]/20" />
      </div>

      <p className="text-[8px] tracking-[0.4em] text-gray-600 uppercase mt-6">Haute Parfumerie</p>
    </div>
  );
}
