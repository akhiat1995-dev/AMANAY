export default function GoldParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => {
    const size = 1.5 + Math.random() * 3;
    const isSparkle = i % 3 === 0;
    return {
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${10 + Math.random() * 80}%`,
      width: isSparkle ? size * 2.5 : size,
      height: isSparkle ? size * 2.5 : size,
      delay: `${Math.random() * 6}s`,
      duration: `${6 + Math.random() * 8}s`,
      opacity: 0.2 + Math.random() * 0.5,
      anim: isSparkle
        ? 'animate-particle-sparkle'
        : i % 2 === 0
          ? 'animate-particle-float'
          : 'animate-particle-drift',
      isSparkle,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute ${p.anim}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            animationDelay: p.delay,
            animationDuration: p.duration,
            opacity: p.opacity,
            backgroundColor: p.isSparkle ? 'transparent' : '#D4AF37',
            border: p.isSparkle ? `1.5px solid rgba(212, 175, 55, ${p.opacity})` : 'none',
            borderRadius: p.isSparkle ? '0' : '50%',
            transform: p.isSparkle ? 'rotate(45deg)' : 'none',
            boxShadow: p.isSparkle
              ? `0 0 4px rgba(212, 175, 55, ${p.opacity * 0.5})`
              : 'none',
          }}
        />
      ))}
    </div>
  );
}
