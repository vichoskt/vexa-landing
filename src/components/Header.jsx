import { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { trackEvent, EVENTS } from '../lib/analytics';
import { WHATSAPP_URL } from '../config/site';

const navLinks = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#paquetes',  label: 'Paquetes' },
  { href: '#proceso',   label: 'Proceso' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto',  label: 'Contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleNavClick = () => setMenuOpen(false);

  const handleCTA = () => {
    trackEvent(EVENTS.CTA_NAV);
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="header__inner">
            <Logo />

            <nav className="header__nav" aria-label="Navegación principal">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <div className="header__actions">
              <a
                href="#contacto"
                className="btn btn-primary btn-sm"
                onClick={handleCTA}
                aria-label="Cotiza tu landing"
              >
                Cotiza tu landing
              </a>
              <button
                className={`header__burger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav
        className={`header__drawer ${menuOpen ? 'open' : ''}`}
        aria-label="Menú mobile"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={handleNavClick}>
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="btn btn-primary"
          onClick={handleCTA}
          style={{ textAlign: 'center', marginTop: '0.5rem' }}
        >
          Cotiza tu landing
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          onClick={() => { trackEvent(EVENTS.WHATSAPP, { source: 'mobile_menu' }); setMenuOpen(false); }}
          style={{ textAlign: 'center' }}
          aria-label="Hablar por WhatsApp"
        >
          Hablar por WhatsApp
        </a>
      </nav>
    </>
  );
}

export default Header;
