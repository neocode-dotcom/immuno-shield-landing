const badges = [
  { icon: '👨‍⚕️', title: 'Doctor Recommended', desc: 'Formulado bajo supervisión médica profesional.' },
  { icon: '🏭', title: 'GMP Certified', desc: 'Estándares de fabricación de máxima pureza.' },
  { icon: '🌿', title: '100% Natural', desc: 'Sin gluten, sin lácteos, sin organismos modificados.' },
  { icon: '🇺🇸', title: 'Made in USA', desc: 'Calidad garantizada en laboratorios certificados.' },
];

const testimonials = [
  {
    name: 'María L.',
    location: 'San Juan, PR',
    stars: 5,
    text: '"Llevaba meses resfriándome cada dos semanas. Desde que tomo Immuno Shield PRO, llevo 3 meses sin una sola gripe. ¡Increíble!"',
    avatar: '👩',
  },
  {
    name: 'Carlos M.',
    location: 'Miami, FL',
    stars: 5,
    text: '"Mi tos crónica desapareció en la segunda semana. Mis pulmones se sienten como nuevos. Producto real, resultados reales."',
    avatar: '👨',
  },
  {
    name: 'Ana R.',
    location: 'Ponce, PR',
    stars: 5,
    text: '"Trabajo en un hospital y estaba constantemente expuesta a virus. Ahora me siento protegida. Lo recomiendo a todo mi equipo."',
    avatar: '👩‍⚕️',
  },
];

export default function TrustSection({ onBuyClick }) {
  return (
    <section style={{ background: 'var(--navy)', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge">🏆 Prueba y Confianza</div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.5rem'
          }}>
            Avalado por expertos,<br />
            <span style={{ color: 'var(--cyan)' }}>elegido por miles</span>
          </h2>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(2.5rem, 6vw, 5rem)',
        }}>
          {badges.map((b, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.25rem', padding: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(0,212,255,0.15)',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)'; }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{b.icon}</div>
              <h3 style={{ fontWeight: 700, color: 'var(--cyan)', fontSize: 'var(--text-base)', marginBottom: '0.5rem' }}>{b.title}</h3>
              <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)' }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: '1.25rem',
          marginBottom: 'clamp(2rem, 5vw, 4rem)',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1.25rem', padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              border: '1px solid var(--white-10)',
            }}>
              <div style={{ color: 'var(--amber)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                {'★'.repeat(t.stars)}
              </div>
              <p style={{
                color: 'var(--white-85)', fontStyle: 'italic', lineHeight: 1.6,
                marginBottom: '1rem', fontSize: 'var(--text-sm)',
              }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  background: 'var(--cyan-glow)', border: '1px solid rgba(0,212,255,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--white)', fontSize: 'var(--text-sm)' }}>{t.name}</p>
                  <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-xs)' }}>{t.location}</p>
                </div>
                <span style={{
                  marginLeft: 'auto', background: 'rgba(34,197,94,0.15)',
                  border: '1px solid rgba(34,197,94,0.3)', color: '#4ade80',
                  padding: '0.2rem 0.6rem', borderRadius: '999px',
                  fontSize: 'var(--text-xs)', fontWeight: 600,
                }}>✓ Verificado</span>
              </div>
            </div>
          ))}
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
