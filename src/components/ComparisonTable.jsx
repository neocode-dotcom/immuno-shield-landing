const rows = [
  { feature: 'Potencia Antioxidante', common: '❌ Baja / Sintética', pro: '✅ Máxima (600mg Amla)' },
  { feature: 'Apoyo Respiratorio', common: '❌ Ninguno', pro: '✅ Triple Acción (NAC + Cordyceps)' },
  { feature: 'Desinflamación', common: '❌ Inexistente', pro: '✅ Bromelaina + Cúrcuma' },
  { feature: 'Biodisponibilidad', common: '❌ < 20%', pro: '✅ Grado Avanzado (Alta Absorción)' },
  { feature: 'Origen', common: '❌ Rellenos químicos', pro: '✅ 100% Natural / Grado Médico' },
];

export default function ComparisonTable({ onBuyClick }) {
  return (
    <section style={{ background: 'var(--midnight)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', right: '-5rem', top: '50%', transform: 'translateY(-50%)',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge">⚔ Comparación Directa</div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem'
          }}>
            La diferencia entre<br />
            <span style={{ color: 'var(--white-30)' }}>'sobrevivir'</span> y{' '}
            <span style={{ color: 'var(--cyan)' }} className="text-glow-cyan">'ser invencible'</span>
          </h2>
        </div>

        {/* Responsive table wrapper */}
        <div style={{ overflowX: 'auto', borderRadius: '1.25rem', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', minWidth: '540px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{
                  padding: '1rem 1.25rem', textAlign: 'left',
                  color: 'var(--white-60)', fontWeight: 600, fontSize: 'var(--text-sm)',
                  borderBottom: '1px solid var(--white-10)',
                  background: 'var(--navy)',
                }}>Característica</th>
                <th style={{
                  padding: '1rem 1.25rem', textAlign: 'center',
                  color: '#ef4444', fontWeight: 700, fontSize: 'var(--text-sm)',
                  borderBottom: '1px solid var(--white-10)',
                  background: 'var(--navy)',
                }}>Vitaminas Comunes</th>
                <th style={{
                  padding: '1rem 1.25rem', textAlign: 'center',
                  color: 'var(--cyan)', fontWeight: 700, fontSize: 'var(--text-sm)',
                  borderBottom: `2px solid var(--cyan)`,
                  background: 'rgba(0,212,255,0.05)',
                }}>Immuno Shield PRO</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{
                  background: i % 2 === 0 ? 'var(--white-05)' : 'transparent',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--white-10)'}
                  onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--white-05)' : 'transparent'}
                >
                  <td style={{
                    padding: '0.875rem 1.25rem', color: 'var(--white-85)',
                    fontWeight: 600, fontSize: 'var(--text-sm)',
                    borderBottom: '1px solid var(--white-05)',
                  }}>{row.feature}</td>
                  <td style={{
                    padding: '0.875rem 1.25rem', textAlign: 'center',
                    color: 'rgba(239,68,68,0.8)', fontSize: 'var(--text-sm)',
                    borderBottom: '1px solid var(--white-05)',
                  }}>{row.common}</td>
                  <td style={{
                    padding: '0.875rem 1.25rem', textAlign: 'center',
                    color: 'var(--cyan)', fontWeight: 600, fontSize: 'var(--text-sm)',
                    borderBottom: '1px solid var(--white-05)',
                    background: 'rgba(0,212,255,0.03)',
                  }}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={onBuyClick} className="btn-primary">
            Elegir el Mejor — Immuno Shield PRO →
          </button>
        </div>
      </div>
    </section>
  );
}
