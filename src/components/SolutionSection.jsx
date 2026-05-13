import {
  Globe, Palette, PenTool, TrendingUp, MessageCircle, Zap,
} from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';

const pillars = [
  { icon: Globe,         title: 'Diseño web',        desc: 'Landing pages rápidas, modernas y enfocadas en conversión.' },
  { icon: Palette,       title: 'Identidad visual',  desc: 'Paleta, tipografías y estilo coherente para tu marca.' },
  { icon: PenTool,       title: 'Copywriting',       desc: 'Textos claros que guían al cliente hacia una acción.' },
  { icon: TrendingUp,    title: 'Marketing digital', desc: 'Estructura preparada para futuras campañas de pauta.' },
  { icon: MessageCircle, title: 'WhatsApp & reservas',desc: 'Botones y mensajes predefinidos para facilitar el contacto.' },
  { icon: Zap,           title: 'Tecnología e IA',   desc: 'Procesos más rápidos sin perder criterio ni calidad.' },
];

export function SolutionSection() {
  const listRef  = useReveal();
  const visualRef = useReveal();

  return (
    <section className="solution section--light" id="solucion" aria-labelledby="solution-heading">
      <div className="container">
        <div className="solution__grid">
          {/* Left */}
          <div>
            <SectionHeader
              kicker="La solución"
              title={
                <>
                  Convertimos tu presencia digital en una{' '}
                  <span style={{ color: 'var(--violet)' }}>herramienta comercial</span>
                </>
              }
              subtitle="No solo hacemos una página bonita. Creamos una estructura pensada para generar confianza y hacer que el cliente dé el siguiente paso."
              center={false}
              dark={false}
            />

            <div ref={listRef} className="solution__list reveal">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className={`solution__item reveal reveal-delay-${i + 1}`}>
                    <div className="solution__item-icon" aria-hidden>
                      <Icon size={20} />
                    </div>
                    <div className="solution__item-text">
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right visual */}
          <div ref={visualRef} className="solution__visual reveal">
            <div className="solution__badge-stack">
              {[
                'Una landing que se entiende en segundos',
                'Botones que llevan al cliente a actuar',
                'Tu marca con coherencia visual',
                'Preparada para WhatsApp y reservas',
                'Estructura lista para campañas',
                'Acompañamiento después de publicar',
              ].map((text, i) => (
                <div key={text} className={`solution__badge reveal reveal-delay-${i + 1}`}>
                  <span className="solution__badge-dot" aria-hidden />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
