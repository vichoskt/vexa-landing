import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { segments } from '../data/audience';
import { trackEvent, EVENTS } from '../lib/analytics';

export function AudienceSection() {
  const gridRef  = useReveal();
  const msgRef   = useReveal();

  return (
    <section className="audience section--dark2" id="para-quien" aria-labelledby="audience-heading">
      <div className="container">
        <SectionHeader
          kicker="¿Para quién es?"
          title={
            <>
              Diseñado para negocios donde{' '}
              <span className="text-gradient">la imagen vende</span>
            </>
          }
        />

        <div ref={gridRef} className="audience__grid reveal">
          {segments.map((s, i) => (
            <div key={s.label} className={`audience-card reveal reveal-delay-${(i % 4) + 1}`}>
              <span className="audience-card__emoji" aria-hidden>{s.emoji}</span>
              <h3>{s.label}</h3>
            </div>
          ))}
        </div>

        <p ref={msgRef} className="audience__message reveal">
          <strong>Si tu cliente decide en segundos si confiar o no en tu marca</strong>,
          tu presencia digital tiene que estar a la altura.
          Una landing bien construida guía al cliente hacia una acción: reservar, escribir o cotizar.
        </p>

        <div style={{ textAlign: 'center', marginTop: 'var(--s-10)' }}>
          <a
            href="#contacto"
            className="btn btn-outline"
            onClick={() => trackEvent(EVENTS.CTA_REVISION)}
          >
            Solicitar revisión gratuita
          </a>
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
