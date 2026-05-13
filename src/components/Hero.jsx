import { AxolotlMascot } from './visuals/AxolotlMascot';
import { trackEvent, EVENTS } from '../lib/analytics';
import { WHATSAPP_URL } from '../config/site';

export function Hero() {
  return (
    <section className="hero section--dark" id="inicio" aria-label="Hero">
      {/* Background orbs */}
      <div className="orb orb--violet" style={{ width: 520, height: 520, top: '-15%', left: '-10%' }} aria-hidden />
      <div className="orb orb--blue"   style={{ width: 380, height: 380, top: '10%',  right: '-5%' }} aria-hidden />
      <div className="orb orb--magenta" style={{ width: 280, height: 280, bottom: '5%', left: '35%' }} aria-hidden />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero__grid">
          {/* LEFT — copy */}
          <div>
            <div className="hero__kicker" aria-label="Para barberías, estética y belleza">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--magenta)', display: 'inline-block' }} />
              Para barberías, estética y belleza
            </div>

            <h1>
              Potenciamos tu{' '}
              <span className="text-gradient">identidad digital</span>{' '}
              con landing pages que convierten
            </h1>

            <p className="hero__sub">
              Creamos landing pages e identidad visual para barberías, centros de estética y
              negocios de belleza que quieren verse más profesionales, generar confianza y
              captar más clientes.
            </p>

            <div className="hero__ctas">
              <a
                href="#contacto"
                className="btn btn-primary btn-lg"
                onClick={() => trackEvent(EVENTS.CTA_HERO)}
              >
                Cotiza tu landing
              </a>
              <a
                href="#servicios"
                className="btn btn-outline btn-lg"
                onClick={() => trackEvent(EVENTS.CTA_HERO_SECONDARY)}
              >
                Ver servicios
              </a>
            </div>

            <div className="hero__trust">
              {[
                'Diseño responsive',
                'WhatsApp integrado',
                'Sin contratos largos',
                'Para negocios de belleza',
              ].map((item) => (
                <span key={item} className="hero__trust-item">
                  <span className="hero__trust-dot" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — visual */}
          <div className="hero__visual">
            <div className="hero__axolotl-wrap">
              <AxolotlMascot size={290} />
            </div>

            {/* Floating metrics card */}
            <div className="hero__float-card hero__float-card--metrics" aria-label="Métricas de ejemplo">
              <div className="hero__metric">
                <span className="hero__metric-dot" style={{ background: 'var(--violet)' }} />
                <span className="hero__metric-label">Confianza</span>
                <span className="hero__metric-value">+Percepción</span>
              </div>
              <div className="hero__metric">
                <span className="hero__metric-dot" style={{ background: 'var(--magenta)' }} />
                <span className="hero__metric-label">Reservas</span>
                <span className="hero__metric-value">+Contactos</span>
              </div>
              <div className="hero__metric">
                <span className="hero__metric-dot" style={{ background: 'var(--blue)' }} />
                <span className="hero__metric-label">Presencia</span>
                <span className="hero__metric-value">Premium</span>
              </div>
            </div>

            {/* Floating mini form */}
            <div className="hero__float-card hero__float-card--form" aria-label="Solicita tu propuesta">
              <div className="hero__form-mini">
                <p>Solicita tu propuesta</p>
                <input
                  type="text"
                  placeholder="Nombre de tu negocio"
                  aria-label="Nombre del negocio"
                  readOnly
                  onClick={() => {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ cursor: 'pointer' }}
                />
                <a
                  href="#contacto"
                  className="btn btn-primary btn-sm"
                  style={{ display: 'block', textAlign: 'center', width: '100%' }}
                  onClick={() => trackEvent(EVENTS.CTA_HERO)}
                >
                  Empezar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
