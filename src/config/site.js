// =============================================
// CONFIGURACIÓN CENTRAL DE VEXA
// Edita este archivo para cambiar WhatsApp,
// formulario, redes sociales y contacto.
// =============================================

export const WHATSAPP_NUMBER = '56912345678'; // sin + ni espacios
export const WHATSAPP_MESSAGE = 'Hola VEXA, quiero cotizar una landing page para mi negocio.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_EMAIL = 'hola@vexa.agency'; // placeholder

// Endpoint para el formulario de contacto.
// Opciones: URL de Formspree ('https://formspree.io/f/XXXXXX'),
//           EmailJS (dejar vacío y usar lib/emailjs.js),
//           o endpoint propio.
// Si está vacío, el formulario redirige a WhatsApp como fallback.
export const CONTACT_ENDPOINT = '';

export const SOCIAL = {
  instagram: 'https://instagram.com/vexa.agency',
  tiktok:    'https://tiktok.com/@vexa.agency',
  linkedin:  'https://linkedin.com/company/vexa-agency',
};

export const SITE_NAME    = 'VEXA';
export const SITE_TAGLINE = 'Estrategia · Crecimiento · Resultados';

// =============================================
// IMÁGENES DEL BRANDING
// =============================================
// 1. Copia tus archivos PNG a la carpeta  public/images/
// 2. Cambia null por la ruta correspondiente
// 3. Guarda y el navegador actualiza solo
//
// Logo horizontal completo (ajolote + V + VEXA + tagline):
export const LOGO_IMAGE    = `${import.meta.env.BASE_URL}images/logo-horizontal.png`;
//
// Ajolote solo (para el hero y otras secciones):
export const AXOLOTL_IMAGE = `${import.meta.env.BASE_URL}images/axolotl.png`;
