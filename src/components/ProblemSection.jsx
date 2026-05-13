import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { problems } from '../data/problems';

export function ProblemSection() {
  const gridRef = useReveal();

  return (
    <section className="problem section--dark2" id="problema" aria-labelledby="problem-heading">
      <div className="container">
        <SectionHeader
          kicker="El problema real"
          title={
            <>
              Tu negocio puede ser excelente, pero si tu presencia{' '}
              <span className="text-gradient">digital no transmite confianza</span>,
              estás perdiendo clientes.
            </>
          }
          subtitle="En el rubro de la belleza, la primera impresión ocurre en pantalla — antes de que el cliente te llame o te visite."
        />

        <div ref={gridRef} className="problem__grid reveal">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`problem-card reveal reveal-delay-${i + 1}`}
            >
              <span className="problem-card__icon" aria-hidden>{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
