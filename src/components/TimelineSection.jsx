import { Calendar, Wind, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const weeks = [
  {
    week: '01',
    title: 'Desintoxicación',
    desc: 'El NAC y el Eucalipto comienzan a expulsar toxinas acumuladas en tus pulmones. Respiras más ligero.',
    icon: <Wind size={24} />,
    color: 'var(--cyan)',
  },
  {
    week: '02',
    title: 'Refuerzo Inmune',
    desc: 'El Amla y el Saúco elevan tu conteo de defensas. Te sientes con más energía y menos fatiga.',
    icon: <Zap size={24} />,
    color: 'var(--amber)',
  },
  {
    week: '03',
    title: 'Optimización',
    desc: 'El Cordyceps mejora tu oxigenación celular. Tu resistencia física y mental alcanza niveles pico.',
    icon: <TrendingUp size={24} />,
    color: '#a78bfa',
  },
  {
    week: '04',
    title: 'Blindaje Completo',
    desc: 'Tu escudo está activo. Tu cuerpo detecta y neutraliza amenazas antes de que se conviertan en síntomas.',
    icon: <ShieldCheck size={24} />,
    color: '#4ade80',
  },
];

export default function TimelineSection({ onBuyClick }) {
  return (
    <section id="proceso" style={{ background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} /> Tu Transformación
          </div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem'
          }}>
            30 días para un cuerpo<br />
            <span style={{ color: 'var(--cyan)' }} className="text-glow-cyan">blindado</span>
          </h2>
          <p style={{ color: 'var(--white-60)', maxWidth: '500px', margin: '0 auto' }}>
            Cada semana una transformación medible. Sin trucos, solo ciencia.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          {/* Connecting line — hidden on mobile */}
          <div className="hidden md:block" style={{
            position: 'absolute', left: '50%', top: '2rem', bottom: '2rem',
            width: '2px', background: 'linear-gradient(180deg, var(--cyan), #a78bfa, var(--amber), #4ade80)',
            transform: 'translateX(-50%)', opacity: 0.3,
          }} />

          {weeks.map((w, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: '1.5rem',
              alignItems: 'center',
              marginBottom: '2rem',
            }}>
              {/* Left side (even) or empty (odd) */}
              <div style={{ textAlign: 'right' }}>
                {i % 2 === 0 ? (
                  <div className="glass" style={{
                    borderRadius: '1.25rem', padding: '1.5rem',
                    border: `1px solid ${w.color}25`,
                    textAlign: 'right',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{w.icon}</div>
                    <p style={{ color: w.color, fontWeight: 700, marginBottom: '0.25rem' }}>{w.title}</p>
                    <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{w.desc}</p>
                  </div>
                ) : null}
              </div>

              {/* Center node */}
              <div style={{
                width: '4rem', height: '4rem', borderRadius: '50%',
                background: `linear-gradient(135deg, ${w.color}30, ${w.color}10)`,
                border: `2px solid ${w.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, boxShadow: `0 0 20px ${w.color}30`,
              }}>
                <span className="font-display" style={{ color: w.color, fontSize: '1.1rem' }}>S{w.week}</span>
              </div>

              {/* Right side (odd) or empty (even) */}
              <div>
                {i % 2 === 1 ? (
                  <div className="glass" style={{
                    borderRadius: '1.25rem', padding: '1.5rem',
                    border: `1px solid ${w.color}25`,
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{w.icon}</div>
                    <p style={{ color: w.color, fontWeight: 700, marginBottom: '0.25rem' }}>{w.title}</p>
                    <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{w.desc}</p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple stacked cards */}
        <div className="md:hidden" style={{ display: 'none' }}>
          {weeks.map((w, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.25rem', padding: '1.25rem',
              border: `1px solid ${w.color}25`, marginBottom: '1rem',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
            }}>
              <div style={{
                width: '3rem', height: '3rem', borderRadius: '50%', flexShrink: 0,
                background: `${w.color}15`, border: `1.5px solid ${w.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="font-display" style={{ color: w.color, fontSize: '0.9rem' }}>S{w.week}</span>
              </div>
              <div>
                <p style={{ color: w.color, fontWeight: 700, marginBottom: '0.25rem' }}>{w.title}</p>
                <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', lineHeight: 1.55 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            Comenzar Mi Transformación →
          </button>
        </div>
      </div>
    </section>
  );
}
