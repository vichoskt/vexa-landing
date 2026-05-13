import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';

const placeholders = [
  { rubro: 'Barbería', initials: 'A.R.' },
  { rubro: 'Centro de estética', initials: 'M.V.' },
  { rubro: 'Salón de uñas', initials: 'C.P.' },
];

export function TestimonialsSection() {
  const gridRef = useReveal();

  return (
    <section className="testimonials section--dark2" id="testimonios" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="testimonials__wrap">
          <SectionHeader
            kicker="Testimonios"
            title="Lo que dicen nuestros clientes"
            subtitle="Somos una agencia en crecimiento. Pronto compartiremos los resultados de nuestros primeros proyectos."
          />

          <div style={{ textAlign: 'center', marginBottom: 'var(--s-10)' }}>
            <span className="testimonials__coming">
              Próximamente compartiremos resultados de nuestros primeros clientes
            </span>
          </div>

          <div ref={gridRef} className="testimonials__grid reveal">
            {placeholders.map((ph, i) => (
              <div key={i} className={`testimonial-placeholder reveal reveal-delay-${i + 1}`} aria-hidden>
                <span className="testimonial-placeholder__quote">"</span>
                <p>Espacio reservado para testimonio de cliente — {ph.rubro}</p>
                <div className="testimonial-placeholder__author">
                  <div className="testimonial-placeholder__avatar" />
                  <span className="testimonial-placeholder__name">{ph.initials} · {ph.rubro}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
