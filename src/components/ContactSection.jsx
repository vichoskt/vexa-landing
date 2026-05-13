import { useState } from 'react';
import { Send } from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { trackEvent, EVENTS } from '../lib/analytics';
import { CONTACT_ENDPOINT, WHATSAPP_URL, WHATSAPP_NUMBER } from '../config/site';

const SERVICES_OPTIONS = [
  'Landing page',
  'Landing + identidad visual',
  'Mantenimiento mensual',
  'Revisión gratuita',
  'No estoy seguro/a',
];

const RUBROS = [
  'Barbería',
  'Centro de estética',
  'Salón de uñas',
  'Peluquería',
  'Spa',
  'Negocio de belleza',
  'Marca personal',
  'Otro',
];

const INITIAL = {
  name: '', business: '', rubro: '', whatsapp: '',
  instagram: '', need: '', service: '',
};

export function ContactSection() {
  const [form, setForm]   = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const infoRef = useReveal();
  const formRef = useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildWhatsAppFallback = () => {
    const msg = [
      `Hola VEXA, quiero cotizar un servicio.`,
      form.name     && `Nombre: ${form.name}`,
      form.business && `Negocio: ${form.business}`,
      form.rubro    && `Rubro: ${form.rubro}`,
      form.service  && `Servicio: ${form.service}`,
      form.need     && `Necesidad: ${form.need}`,
    ].filter(Boolean).join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    trackEvent(EVENTS.SUBMIT_FORM, { service: form.service, rubro: form.rubro });

    // Si hay endpoint configurado, enviarlo ahí
    if (CONTACT_ENDPOINT) {
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body:    JSON.stringify(form),
        });
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    // Sin endpoint → redirigir a WhatsApp con datos del formulario
    const url = buildWhatsAppFallback();
    window.open(url, '_blank', 'noopener,noreferrer');
    trackEvent(EVENTS.WHATSAPP, { source: 'form_fallback' });
    setStatus('success');
  };

  return (
    <section className="contact section--dark2" id="contacto" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeader
          kicker="Contacto"
          title="Cuéntanos sobre tu negocio"
          subtitle="Completando el formulario nos das el contexto para preparar una propuesta concreta. Sin compromiso."
        />

        <div className="contact__grid">
          {/* Left — info */}
          <div ref={infoRef} className="contact__info reveal">
            <h2 id="contact-heading" style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)' }}>
              ¿Listo para mejorar tu presencia digital?
            </h2>
            <p>
              Responderemos dentro de 24 horas hábiles. Si prefieres, también puedes
              escribirnos directamente por WhatsApp y te respondemos más rápido.
            </p>

            <div className="contact__whatsapp-cta">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={() => trackEvent(EVENTS.WHATSAPP, { source: 'contact_section' })}
                aria-label="Hablar por WhatsApp con VEXA"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </a>
              <p>También puedes escribir directamente a: hola@vexa.agency</p>
            </div>
          </div>

          {/* Right — form */}
          <div ref={formRef} className="contact__form-wrap reveal">
            {status === 'success' ? (
              <div className="form__success">
                <span className="form__success-icon">✅</span>
                <h3>¡Solicitud enviada!</h3>
                <p>
                  Hemos recibido tu mensaje. Te responderemos dentro de 24 horas hábiles.
                  También puedes seguir la conversación por WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ marginTop: 'var(--s-6)', display: 'inline-flex' }}
                  onClick={() => trackEvent(EVENTS.WHATSAPP, { source: 'post_form' })}
                >
                  Continuar por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto VEXA">
                <p className="form-title">Solicita tu propuesta</p>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Nombre *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Tu nombre"
                      value={form.name} onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="business">Nombre del negocio *</label>
                    <input
                      id="business" name="business" type="text"
                      placeholder="Ej. Barbería Don Carlos"
                      value={form.business} onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rubro">Rubro *</label>
                    <select id="rubro" name="rubro" value={form.rubro} onChange={handleChange} required>
                      <option value="">Selecciona tu rubro</option>
                      {RUBROS.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Servicio de interés</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">¿Qué te interesa?</option>
                      {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input
                      id="whatsapp" name="whatsapp" type="tel"
                      placeholder="+56 9 XXXX XXXX"
                      value={form.whatsapp} onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input
                      id="instagram" name="instagram" type="text"
                      placeholder="@tunegocio"
                      value={form.instagram} onChange={handleChange}
                    />
                  </div>

                  <div className="form-group form-group--full">
                    <label htmlFor="need">¿Qué necesitas mejorar? *</label>
                    <textarea
                      id="need" name="need"
                      placeholder="Cuéntanos brevemente: ¿qué está fallando en tu presencia digital? ¿qué quieres lograr?"
                      value={form.need} onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={18} aria-hidden />
                        Enviar solicitud
                      </>
                    )}
                  </button>
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: 'var(--s-3)', textAlign: 'center' }}>
                    Hubo un error al enviar. Por favor, escríbenos directamente por WhatsApp.
                  </p>
                )}

                <p className="form-note">
                  Sin spam. Solo te contactamos para responder tu solicitud.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
