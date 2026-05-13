import { useReveal } from '../../lib/useReveal';

export function SectionHeader({ kicker, title, subtitle, center = true, dark = true }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`section-header reveal ${center ? 'text-center' : ''}`}
    >
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 style={{ color: dark ? 'var(--white)' : 'var(--text-dark)' }}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
