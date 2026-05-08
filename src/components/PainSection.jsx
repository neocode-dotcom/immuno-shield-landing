export default function PainSection({ onBuyClick }) {
  const painPoints = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.4))' }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
          <line x1="4" y1="4" x2="20" y2="20"/>
        </svg>
      ),
      title: 'Vulnerabilidad Total',
      desc: 'Un simple cambio de clima te tumba por días. Tu sistema inmune está operando en modo mínimo.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.4))' }}>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
        </svg>
      ),
      title: 'Asfixia Invisible',
      desc: 'Esa sensación de pesadez al respirar o la tos irritante que no se va. Tu cuerpo está hablando.',
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.4))' }}>
          <rect width="16" height="10" x="2" y="7" rx="2" ry="2"/>
          <line x1="22" x2="22" y1="11" y2="13"/>
          <line x1="6" x2="6" y1="11" y2="13"/>
        </svg>
      ),
      title: 'Fatiga Crónica',
      desc: 'Tu cuerpo gasta tanta energía intentando no enfermarse que te deja agotado para lo importante.',
    },
  ];

  return (
    <section id="problema" style={{
      background: `linear-gradient(180deg, var(--midnight) 0%, var(--navy) 50%, var(--midnight) 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Warning stripes top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'repeating-linear-gradient(90deg, var(--danger) 0px, var(--danger) 20px, transparent 20px, transparent 40px)',
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge" style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)', color: '#ef4444' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
              <line x1="12" x2="12" y1="9" y2="13"/>
              <line x1="12" x2="12.01" y1="17" y2="17"/>
            </svg>
            El Problema Real
          </div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Vives en un entorno hostil.<br />
            <span style={{ color: 'var(--danger)' }}>¿Tus defensas están a la altura?</span>
          </h2>
          <p style={{ color: 'var(--white-60)', maxWidth: '600px', margin: '0 auto', fontSize: 'var(--text-lg)' }}>
            Cada vez que sales a la calle, tus pulmones y tu sistema inmune libran una batalla invisible.
            La contaminación, los alérgenos mutantes y los virus estacionales están diseñados para romper
            tu primera línea de defensa.
          </p>
        </div>

        {/* Pain cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '1.5rem',
          marginBottom: 'clamp(2rem, 5vw, 4rem)',
        }}>
          {painPoints.map((p, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.25rem',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              border: '1px solid rgba(239,68,68,0.2)',
              transition: 'transform 0.3s, border-color 0.3s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(239,68,68,0.2)'; }}
            >
              <div style={{ display: 'flex', marginBottom: '1rem' }}>{p.icon}</div>
              <h3 style={{ fontWeight: 700, color: 'var(--danger)', marginBottom: '0.5rem', fontSize: 'var(--text-lg)' }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--white-60)', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Urgency statement */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.05))',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: '1.25rem',
          marginBottom: '2rem',
        }}>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--danger)' }}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" x2="9" y1="9" y2="15"/>
              <line x1="9" x2="15" y1="9" y2="15"/>
            </svg>
            Si no fortaleces tu escudo hoy,
          </p>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--danger)' }}>
            mañana serás la próxima estadística.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            Quiero Protegerme Ahora →
          </button>
        </div>
      </div>
    </section>
  );
}
