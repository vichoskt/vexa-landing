import { useReveal } from '../lib/useReveal';
import { trackEvent, EVENTS } from '../lib/analytics';
import { WHATSAPP_URL } from '../config/site';

export function MidCTASection() {
  const ref = useReveal();

  return (
    <section className="mid-cta" id="revision" aria-labelledby="midcta-heading">
      {/* Background orbs */}
      <div className="orb orb--violet" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} aria-hidden />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={ref} className="reveal">
          <h2 id="midcta-heading">
            ¿Quieres saber si tu presencia digital está{' '}
            <span className="text-gradient">ayudando o frenando</span>{' '}
            tu crecimiento?
          </h2>
          <p>
            Solicita una revisión inicial y descubre qué podrías mejorar para verte más
            profesional y captar más clientes.
          </p>
          <div className="mid-cta__ctas">
            <a
              href="#contacto"
              className="btn btn-primary btn-lg"
              onClick={() => trackEvent(EVENTS.CTA_REVISION)}
            >
              Solicitar revisión gratuita
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              onClick={() => trackEvent(EVENTS.WHATSAPP, { source: 'mid_cta' })}
              aria-label="Hablar por WhatsApp con VEXA"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidCTASection;
