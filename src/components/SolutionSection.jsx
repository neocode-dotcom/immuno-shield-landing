import { Shield, Wind, Microscope, FlaskConical } from 'lucide-react';

const pillars = [
  {
    icon: <Shield size={32} />,
    title: 'Defensa Blindada',
    desc: 'Crea una barrera infranqueable contra patógenos externos. Tu primera línea de defensa siempre activa.',
    color: 'var(--cyan)',
  },
  {
    icon: <Wind size={32} />,
    title: 'Oxigenación Máxima',
    desc: 'Despeja las vías respiratorias y optimiza cada bocanada de aire. Respira con libertad total.',
    color: 'var(--amber)',
  },
  {
    icon: <Microscope size={32} />,
    title: 'Restauración Celular',
    desc: 'Repara el daño causado por el estrés oxidativo y la contaminación. Células jóvenes, cuerpo fuerte.',
    color: '#a78bfa',
  },
];

export default function SolutionSection({ onBuyClick }) {
  return (
    <section style={{
      background: 'var(--navy)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: '-10rem', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <FlaskConical size={16} /> La Solución Científica
          </div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Immuno Shield PRO:<br />
            <span style={{ color: 'var(--cyan)' }} className="text-glow-cyan">
              Más que un suplemento
            </span>
          </h2>
          <p style={{ color: 'var(--white-60)', maxWidth: '580px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Hemos condensado la sabiduría de la naturaleza y la precisión de la ciencia en una cápsula de alta
            biodisponibilidad. Mientras otros ofrecen simples vitaminas, nosotros entregamos un{' '}
            <strong style={{ color: 'var(--white)' }}>sistema de defensa integral</strong> que funciona desde la primera dosis.
          </p>
        </div>

        {/* Pillar cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '1.5rem',
          marginBottom: 'clamp(2.5rem, 6vw, 5rem)',
        }}>
          {pillars.map((p, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.5rem',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              border: `1px solid ${p.color}22`,
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 50px ${p.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '4rem', height: '4rem', borderRadius: '50%',
                background: `${p.color}15`, border: `1px solid ${p.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.75rem', margin: '0 auto 1.25rem',
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontWeight: 700, color: p.color, fontSize: 'var(--text-xl)', marginBottom: '0.75rem' }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--white-60)', lineHeight: 1.6, fontSize: 'var(--text-sm)' }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Product highlight + infographic */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '2rem', alignItems: 'center',
          background: 'var(--white-05)', border: '1px solid var(--white-10)',
          borderRadius: '2rem', padding: 'clamp(1.5rem, 4vw, 3rem)',
        }}>
          <div>
            <h3 className="font-display" style={{ fontSize: 'var(--text-3xl)', color: 'var(--white)', marginBottom: '1.5rem' }}>
              Tu apoyo diario integral
            </h3>
            {[
              '✓ Fórmula de alta biodisponibilidad — absorción máxima',
              '✓ Ingredientes de grado médico certificados',
              '✓ Sin rellenos, sin gluten, sin lácteos, sin GMO',
              '✓ Fabricado en USA bajo estándares GMP',
              '✓ Recomendado por profesionales de la salud',
            ].map((item, i) => (
              <p key={i} style={{
                color: 'var(--white-85)', marginBottom: '0.75rem',
                fontSize: 'var(--text-base)', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>{item.split(' ')[0]}</span>
                {item.slice(2)}
              </p>
            ))}
            <div style={{ marginTop: '2rem' }}>
              <button onClick={onBuyClick} className="btn-primary">
                ORDENA AHORA
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/infografias/infografia-1.jpeg"
              alt="Infografía Immuno Shield PRO"
              style={{
                width: '100%', maxWidth: '380px', borderRadius: '1.25rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
