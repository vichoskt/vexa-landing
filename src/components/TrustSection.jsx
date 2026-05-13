import { Check } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';

const trustPoints = [
  {
    title: 'Trabajamos contigo para entender tu negocio',
    desc: 'Antes de diseñar una sola pantalla, entendemos tu servicio, tu cliente y qué hace que alguien te elija a ti.',
  },
  {
    title: 'Usamos IA y tecnología para avanzar más rápido',
    desc: 'Sin perder criterio ni calidad. La tecnología nos ayuda a ser más eficientes, no a reemplazar el pensamiento.',
  },
  {
    title: 'Creamos estructuras pensadas para conversión',
    desc: 'No solo diseño bonito. Cada sección tiene un propósito: generar confianza, reducir objeciones y guiar al contacto.',
  },
  {
    title: 'Dejamos tu landing lista para WhatsApp y reservas',
    desc: 'Botones bien ubicados, mensajes predefinidos y un flujo claro para que el cliente dé el siguiente paso fácilmente.',
  },
  {
    title: 'Te acompañamos después de publicar',
    desc: 'No desaparecemos al entregar. Con el plan de mantenimiento puedes seguir mejorando mes a mes.',
  },
];

const stats = [
  { value: '5–10',  label: 'días hábiles por landing' },
  { value: '100%',  label: 'responsive y mobile-first' },
  { value: '3',     label: 'packs para cada etapa' },
  { value: '∞',     label: 'posibilidades de mejora' },
];

export function TrustSection() {
  const listRef   = useReveal();
  const visualRef = useReveal();

  return (
    <section className="trust section--dark3" id="confianza" aria-labelledby="trust-heading">
      <div className="container">
        <SectionHeader
          kicker="Por qué elegirnos"
          title={
            <>
              Estrategia, tecnología{' '}
              <span className="text-gradient">y trato cercano</span>
            </>
          }
          subtitle="Somos una micro-agencia en crecimiento. Lo que nos diferencia no es el tamaño, sino el enfoque."
        />

        <div className="trust__grid">
          <div ref={listRef} className="trust__list reveal">
            {trustPoints.map((tp, i) => (
              <div key={tp.title} className={`trust__item reveal reveal-delay-${i + 1}`}>
                <div className="trust__check" aria-hidden>
                  <Check size={14} />
                </div>
                <div>
                  <h4>{tp.title}</h4>
                  <p>{tp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div ref={visualRef} className="trust__visual reveal">
            {stats.map((s, i) => (
              <div key={s.label} className={`trust__stat reveal reveal-delay-${i + 1}`}>
                <span className="trust__stat-value">{s.value}</span>
                <span className="trust__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
