// =============================================
// ANALYTICS — Eventos de conversión VEXA
// =============================================
// Compatible con GA4 (gtag), Meta Pixel (fbq)
// y Google Tag Manager (dataLayer).
// Conectar pegando el snippet en index.html.
// En desarrollo, los eventos aparecen en consola.
// =============================================

export function trackEvent(name, params = {}) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
  // Meta Pixel
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', name, params);
  }
  // Google Tag Manager dataLayer
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
  // Debug en desarrollo
  if (import.meta.env.DEV) {
    console.debug(`[VEXA Analytics] ${name}`, params);
  }
}

// Eventos predefinidos — úsalos desde los componentes:
export const EVENTS = {
  CTA_HERO:             'click_cta_hero',
  CTA_HERO_SECONDARY:   'click_cta_hero_secondary',
  CTA_REVISION:         'click_revision_gratuita',
  CTA_NAV:              'click_nav_cta',
  WHATSAPP:             'click_whatsapp',
  PRICING_START:        'click_pricing_start',
  PRICING_IDENTITY:     'click_pricing_identity',
  PRICING_GROWTH:       'click_pricing_growth',
  SUBMIT_FORM:          'submit_contact_form',
};
