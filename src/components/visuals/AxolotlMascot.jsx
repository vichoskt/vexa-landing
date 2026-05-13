import { useState } from 'react';
import { AXOLOTL_IMAGE } from '../../config/site';

/**
 * Mascota ajolote de VEXA.
 * — Usa el PNG oficial si está en public/images/axolotl.png
 * — Si no, muestra el SVG fallback
 *
 * Para usar tu PNG real:
 *   1. Copia el archivo a  public/images/axolotl.png
 *   2. Asegúrate de que AXOLOTL_IMAGE = '/images/axolotl.png'  en site.js
 */
export function AxolotlMascot({ size = 260, className = '' }) {
  const [imgError, setImgError] = useState(false);
  const useImage = AXOLOTL_IMAGE && !imgError;

  if (useImage) {
    return (
      <img
        src={AXOLOTL_IMAGE}
        alt="Mascota VEXA — ajolote"
        width={size}
        height={size}
        style={{ width: size, height: 'auto', display: 'block', objectFit: 'contain' }}
        className={className}
        onError={() => setImgError(true)}
      />
    );
  }

  return <AxolotlSVG size={size} className={className} />;
}

function AxolotlSVG({ size, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mascota VEXA — ajolote"
      role="img"
    >
      <defs>
        <radialGradient id="body-g" cx="45%" cy="38%" r="60%" gradientUnits="objectBoundingBox">
          <stop offset="0%"   stopColor="#F4F0FF" />
          <stop offset="60%"  stopColor="#E2D8FF" />
          <stop offset="100%" stopColor="#C8B8F5" />
        </radialGradient>
        <linearGradient id="gill-pink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#FF7EC8" />
          <stop offset="100%" stopColor="#C040A0" />
        </linearGradient>
        <linearGradient id="gill-purple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#A97BFF" />
          <stop offset="100%" stopColor="#7040CC" />
        </linearGradient>
        <linearGradient id="gill-blue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#60D0FF" />
          <stop offset="100%" stopColor="#4090E0" />
        </linearGradient>
        <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── PLUMAS IZQUIERDA (de atrás a adelante) ── */}
      {/* Pluma izq. trasera — azul */}
      <ellipse cx="68" cy="76" rx="10" ry="36"
        fill="url(#gill-blue)"
        transform="rotate(-38 68 112)"
        filter="url(#soft-glow)" />
      {/* Pluma izq. media — violeta */}
      <ellipse cx="87" cy="62" rx="11" ry="40"
        fill="url(#gill-purple)"
        transform="rotate(-20 87 104)"
        filter="url(#soft-glow)" />
      {/* Pluma izq. delantera — rosa */}
      <ellipse cx="108" cy="56" rx="11" ry="38"
        fill="url(#gill-pink)"
        transform="rotate(-6 108 96)"
        filter="url(#soft-glow)" />

      {/* ── PLUMAS DERECHA ── */}
      {/* Pluma der. trasera — azul */}
      <ellipse cx="172" cy="76" rx="10" ry="36"
        fill="url(#gill-blue)"
        transform="rotate(38 172 112)"
        filter="url(#soft-glow)" />
      {/* Pluma der. media — violeta */}
      <ellipse cx="153" cy="62" rx="11" ry="40"
        fill="url(#gill-purple)"
        transform="rotate(20 153 104)"
        filter="url(#soft-glow)" />
      {/* Pluma der. delantera — rosa */}
      <ellipse cx="132" cy="56" rx="11" ry="38"
        fill="url(#gill-pink)"
        transform="rotate(6 132 96)"
        filter="url(#soft-glow)" />

      {/* ── CUERPO ── */}
      <ellipse cx="120" cy="210" rx="48" ry="36" fill="url(#body-g)" />

      {/* ── CABEZA ── */}
      <circle cx="120" cy="150" r="64" fill="url(#body-g)" />

      {/* ── OJO IZQUIERDO ── */}
      <circle cx="93"  cy="140" r="22" fill="white" />
      <circle cx="93"  cy="142" r="16" fill="#160830" />
      <circle cx="93"  cy="142" r="12" fill="#0A0218" />
      <circle cx="86"  cy="135" r="7"  fill="white" opacity="0.88" />
      <circle cx="99"  cy="148" r="3"  fill="white" opacity="0.4" />

      {/* ── OJO DERECHO ── */}
      <circle cx="147" cy="140" r="22" fill="white" />
      <circle cx="147" cy="142" r="16" fill="#160830" />
      <circle cx="147" cy="142" r="12" fill="#0A0218" />
      <circle cx="140" cy="135" r="7"  fill="white" opacity="0.88" />
      <circle cx="153" cy="148" r="3"  fill="white" opacity="0.4" />

      {/* ── NARIZ ── */}
      <circle cx="113" cy="160" r="3.5" fill="#B8A8E0" opacity="0.6" />
      <circle cx="127" cy="160" r="3.5" fill="#B8A8E0" opacity="0.6" />

      {/* ── SONRISA ── */}
      <path
        d="M 100 172 Q 120 186 140 172"
        stroke="#B8A8D8" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />

      {/* ── MEJILLAS ── */}
      <ellipse cx="76"  cy="162" rx="14" ry="9" fill="#FF7EC8" opacity="0.2" />
      <ellipse cx="164" cy="162" rx="14" ry="9" fill="#FF7EC8" opacity="0.2" />

      {/* ── BRAZOS / PATITAS ── */}
      <ellipse cx="78"  cy="232" rx="20" ry="11"
        fill="url(#body-g)" transform="rotate(-28 78 232)" />
      <ellipse cx="162" cy="232" rx="20" ry="11"
        fill="url(#body-g)" transform="rotate(28 162 232)" />

      {/* ── COLA ── */}
      <ellipse cx="120" cy="248" rx="26" ry="13" fill="url(#body-g)" opacity="0.65" />
    </svg>
  );
}

export default AxolotlMascot;
