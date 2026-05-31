import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const tag = e.target.tagName;
      setHovered(tag === 'A' || tag === 'BUTTON' || e.target.closest('a') || e.target.closest('button'));
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        body * { cursor: none !important; }
      `}</style>
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference transition-transform duration-150"
        style={{ left: pos.x - 12, top: pos.y - 12 }}
      >
        <div
          className={`rounded-full border border-[#D4AF37] transition-all duration-300 ${
            hovered ? 'w-10 h-10 bg-[#D4AF37]/20' : 'w-6 h-6 bg-transparent'
          }`}
        />
      </div>
    </>
  );
}
