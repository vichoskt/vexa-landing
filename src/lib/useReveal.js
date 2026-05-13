import { useEffect, useRef } from 'react';

/**
 * Agrega la clase `is-visible` al elemento referenciado cuando entra
 * en el viewport. Usa IntersectionObserver — sin dependencias.
 * El CSS en index.css aplica la transición opacity + translateY.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si prefers-reduced-motion, mostrar inmediatamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
