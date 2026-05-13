import { Check } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { plans } from '../data/pricing';
import { trackEvent } from '../lib/analytics';

export function PricingSection() {
  const gridRef = useReveal();

  return (
    <section className="pricing section--dark" id="paquetes" aria-labelledby="pricing-heading">
      <div className="container">
        <SectionHeader
          kicker="Paquetes"
          title="Elige el punto de partida para tu presencia digital"
          subtitle="Precios en pesos chilenos, sin cargos ocultos. Trabajamos con anticipo y saldo antes de publicar."
        />

        <div ref={gridRef} className="pricing__grid reveal">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''} reveal reveal-delay-${i + 1}`}
            >
              {plan.badge && (
                <span className="pricing__badge" aria-label="Plan más recomendado">
                  {plan.badge}
                </span>
              )}

              <p className="pricing__name">{plan.name}</p>
              <div className="pricing__price">
                {plan.price}
                <span> {plan.currency}</span>
              </div>
              {plan.monthly && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 'var(--s-2)' }}>
                  {plan.monthly}
                </p>
              )}
              <p className="pricing__desc">{plan.desc}</p>

              <ul className="pricing__features" aria-label={`Incluye en ${plan.name}`}>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                style={{ display: 'block', textAlign: 'center' }}
                onClick={() => trackEvent(plan.event, { plan: plan.id })}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 'var(--s-8)' }}>
          ¿No estás seguro qué pack necesitas?{' '}
          <a href="#contacto" style={{ color: 'var(--violet)' }}>
            Cuéntanos tu caso y te orientamos sin compromiso.
          </a>
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
