import {
  Monitor, Palette, Instagram, TrendingUp, Settings, Zap,
} from 'lucide-react';
import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { services } from '../data/services';

const iconMap = {
  Monitor, Palette, Instagram, TrendingUp, Settings, Zap,
};

export function ServicesSection() {
  const gridRef = useReveal();

  return (
    <section className="services section--dark" id="servicios" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeader
          kicker="Servicios"
          title="Todo lo que necesitas para verse profesional online"
          subtitle="Cada servicio está diseñado para el rubro de la belleza. No vendemos plantillas genéricas."
        />

        <div ref={gridRef} className="services__grid reveal">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Monitor;
            return (
              <div key={s.id} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="service-card__icon" aria-hidden>
                  <Icon size={24} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
