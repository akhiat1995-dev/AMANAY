import { useState, useEffect, useRef } from 'react';

export default function ScrollAnimation({ children, animation = 'fade-up', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animations = {
    'fade-up': 'translate-animate-fade-up',
    'fade-down': 'translate-animate-fade-down',
    'fade-left': 'translate-animate-fade-left',
    'fade-right': 'translate-animate-fade-right',
    'scale': 'translate-animate-scale',
    'zoom-in': 'translate-animate-zoom-in',
  };

  return (
    <div
      ref={ref}
      className={`${animations[animation]} ${isVisible ? 'animate-active' : 'animate-hidden'}`}
    >
      {children}
    </div>
  );
}