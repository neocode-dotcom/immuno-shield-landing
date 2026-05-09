import { Droplet, Zap, ShieldCheck, Wind, Leaf, Sprout } from 'lucide-react';

const ingredients = [
  {
    name: 'Amla Extract',
    dose: '600mg',
    icon: <Droplet size={32} />,
    desc: 'La mayor fuente de Vitamina C natural que "reprograma" tu sistema inmune para respuesta máxima.',
    benefit: 'Vitamina C Natural',
    color: '#a78bfa',
  },
  {
    name: 'Cordyceps Sinensis',
    dose: '300mg',
    icon: <Zap size={32} />,
    desc: 'El hongo del rendimiento. Aumenta la absorción de oxígeno y la resistencia física.',
    benefit: 'O₂ + Resistencia',
    color: 'var(--amber)',
  },
  {
    name: 'Saúco Negro',
    dose: '250mg',
    icon: <ShieldCheck size={32} />,
    desc: 'Bloquea la entrada de virus a las células. Tu guardaespaldas personal 24/7.',
    benefit: 'Antiviral Natural',
    color: '#818cf8',
  },
  {
    name: 'NAC (N-Acetil Cisteína)',
    dose: 'Activo',
    icon: <Wind size={32} />,
    desc: 'El mucolítico natural más potente. Desintoxica tus pulmones de metales pesados y humo.',
    benefit: 'Detox Pulmonar',
    color: 'var(--cyan)',
  },
  {
    name: 'Bromelaina + Eucalipto',
    dose: 'Complejo',
    icon: <Leaf size={32} />,
    desc: 'El equipo de choque que elimina la inflamación y despeja tus bronquios al instante.',
    benefit: 'Anti-inflamatorio',
    color: '#4ade80',
  },
  {
    name: 'Jengibre + Cúrcuma',
    dose: 'Complejo',
    icon: <Sprout size={32} />,
    desc: 'Potentes antiinflamatorios naturales que refuerzan y prolongan la respuesta inmune.',
    benefit: 'Refuerzo Inmune',
    color: '#fb923c',
  },
];

export default function IngredientsSection({ onBuyClick }) {
  return (
    <section id="ingredientes" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge">🔬 Ciencia del Escudo</div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem',
          }}>
            Fórmula de Grado PRO
          </h2>
          <p style={{ color: 'var(--white-60)', maxWidth: '520px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Sin rellenos, solo resultados. Cada ingrediente seleccionado con precisión clínica.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(2rem, 5vw, 4rem)',
        }}>
          {ingredients.map((ing, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.25rem',
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              border: `1px solid ${ing.color}20`,
              transition: 'transform 0.3s, border-color 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${ing.color}50`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = `${ing.color}20`;
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ color: ing.color }}>{ing.icon}</span>
                <span style={{
                  background: `${ing.color}15`, color: ing.color,
                  border: `1px solid ${ing.color}30`,
                  padding: '0.25rem 0.625rem', borderRadius: '999px',
                  fontSize: 'var(--text-xs)', fontWeight: 700,
                }}>
                  {ing.dose}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, color: 'var(--white)', fontSize: 'var(--text-base)', marginBottom: '0.25rem' }}>
                {ing.name}
              </h3>
              <p style={{ color: ing.color, fontSize: 'var(--text-xs)', fontWeight: 600, marginBottom: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {ing.benefit}
              </p>
              <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>
                {ing.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Infographic image */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <img
            src="/assets/infografias/infografia-2.jpeg"
            alt="Ingredientes Immuno Shield PRO"
            style={{
              width: '100%', maxWidth: '700px', borderRadius: '1.5rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            ORDENA AHORA
          </button>
        </div>
      </div>
    </section>
  );
}
