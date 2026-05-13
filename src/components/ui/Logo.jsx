import { useState } from 'react';
import { SITE_NAME, SITE_TAGLINE, LOGO_IMAGE } from '../../config/site';

/**
 * Logo VEXA.
 * — Si LOGO_IMAGE está configurado en site.js y el archivo existe en public/images/,
 *   muestra la imagen del branding oficial.
 * — Si no, usa el SVG fallback (V en gradiente + texto).
 *
 * Para usar tu PNG real:
 *   1. Copia el archivo a  public/images/logo-horizontal.png
 *   2. Asegúrate de que LOGO_IMAGE = '/images/logo-horizontal.png'  en site.js
 */
export function Logo({ showTagline = false, size = 'md' }) {
  const [imgError, setImgError] = useState(false);
  const useImage = LOGO_IMAGE && !imgError;

  const heights = { sm: 32, md: 40, lg: 52 };
  const h = heights[size] ?? 40;

  if (useImage) {
    return (
      <a href="#inicio" className="logo" aria-label="VEXA — inicio" style={{ gap: 0 }}>
        <img
          src={LOGO_IMAGE}
          alt="VEXA — Estrategia · Crecimiento · Resultados"
          height={h}
          style={{ height: h, width: 'auto', display: 'block' }}
          onError={() => setImgError(true)}
        />
      </a>
    );
  }

  // ── Fallback SVG ──────────────────────────────
  const iconSize = h * 0.85;
  return (
    <a href="#inicio" className="logo" aria-label="VEXA — inicio">
      <VLogoMark size={iconSize} />
      <div>
        <span className="logo__wordmark">{SITE_NAME}</span>
        {showTagline && (
          <span className="logo__tagline">{SITE_TAGLINE}</span>
        )}
      </div>
    </a>
  );
}

function VLogoMark({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7B5CFF" />
          <stop offset="55%"  stopColor="#9D3CFF" />
          <stop offset="100%" stopColor="#FF5CAC" />
        </linearGradient>
        <linearGradient id="vg2" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#7B5CFF" />
        </linearGradient>
      </defs>

      {/* V — dos barras diagonales gruesas que forman la letra */}
      {/* Barra izquierda */}
      <path
        d="M 3 5 L 19 5 L 31 50 L 22 50 Z"
        fill="url(#vg)"
      />
      {/* Barra derecha */}
      <path
        d="M 57 5 L 41 5 L 29 50 L 38 50 Z"
        fill="url(#vg)"
      />
      {/* Detalle pixel en esquina inferior derecha */}
      <rect x="39" y="52" width="5" height="5" rx="1" fill="url(#vg2)" opacity="0.8" />
      <rect x="46" y="52" width="3" height="3" rx="0.5" fill="url(#vg2)" opacity="0.5" />
      <rect x="46" y="47" width="3" height="3" rx="0.5" fill="url(#vg2)" opacity="0.35" />
    </svg>
  );
}

export default Logo;
