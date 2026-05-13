import { Logo } from './ui/Logo';
import { trackEvent, EVENTS } from '../lib/analytics';
import { WHATSAPP_URL, SOCIAL } from '../config/site';

const serviceLinks = [
  { label: 'Landing pages',    href: '#servicios' },
  { label: 'Identidad visual', href: '#servicios' },
  { label: 'Instagram',        href: '#servicios' },
  { label: 'Mantenimiento',    href: '#servicios' },
  { label: 'Marketing digital',href: '#servicios' },
];

const navLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Paquetes',  href: '#paquetes' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto',  href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Logo showTagline />
            <p>
              Landing pages, identidad digital y marketing para negocios que quieren crecer.
            </p>
            <div className="footer__social" aria-label="Redes sociales de VEXA">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de VEXA">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de VEXA">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
                </svg>
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de VEXA">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(EVENTS.WHATSAPP, { source: 'footer' })}
                  aria-label="WhatsApp VEXA"
                >
                  WhatsApp
                </a>
              </li>
              <li><a href="mailto:hola@vexa.agency">hola@vexa.agency</a></li>
              <li><a href="#contacto">Cotiza tu landing</a></li>
              <li><a href="#revision">Revisión gratuita</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 VEXA. Todos los derechos reservados.</span>
          <span style={{ color: 'rgba(167,167,179,0.5)' }}>
            Estrategia · Crecimiento · Resultados
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
