import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { steps } from '../data/process';

export function ProcessSection() {
  const gridRef = useReveal();

  return (
    <section className="process section--dark2" id="proceso" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeader
          kicker="Proceso"
          title="Un proceso claro para transformar tu presencia digital"
          subtitle="Trabajamos en etapas definidas para que sepas en todo momento qué sigue y cuándo estará listo."
        />

        <div ref={gridRef} className="process__grid reveal">
          {steps.map((step, i) => (
            <div key={step.num} className={`process-step reveal reveal-delay-${(i % 3) + 1}`}>
              <span className="process-step__num">Paso {step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
