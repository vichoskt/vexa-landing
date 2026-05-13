import { useReveal } from '../lib/useReveal';
import { SectionHeader } from './ui/SectionHeader';
import { projects } from '../data/portfolio';

export function PortfolioSection() {
  const gridRef = useReveal();

  return (
    <section className="portfolio section--light" id="proyectos" aria-labelledby="portfolio-heading">
      <div className="container">
        <SectionHeader
          kicker="Proyectos"
          title="Primeros casos e implementaciones demo"
          subtitle="Somos una agencia en crecimiento. Estos son nuestros proyectos iniciales — demos y primeras implementaciones reales."
          dark={false}
        />

        <div style={{ textAlign: 'center' }}>
          <span className="portfolio__disclaimer">
            Proyectos demo y primeros casos de implementación — no son clientes ficticios con resultados inventados
          </span>
        </div>

        <div ref={gridRef} className="portfolio__grid reveal">
          {projects.map((p, i) => (
            <div key={p.id} className={`portfolio-card reveal reveal-delay-${(i % 2) + 1}`}>
              <div className={`portfolio-card__thumb ${p.thumbClass}`} aria-hidden>
                <span style={{ fontSize: '3rem' }}>{p.thumb}</span>
                {p.status === 'coming' && (
                  <div className="portfolio-card__coming">Próximamente</div>
                )}
              </div>
              <div className="portfolio-card__body">
                <p className="portfolio-card__rubro">{p.rubro}</p>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.status !== 'coming' ? (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => {/* enlazar al demo cuando esté disponible */}}
                    aria-label={`${p.btnLabel} — ${p.title}`}
                  >
                    {p.btnLabel}
                  </button>
                ) : (
                  <button className="btn btn-outline btn-sm" disabled style={{ opacity: 0.45, cursor: 'default' }}>
                    {p.btnLabel}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
