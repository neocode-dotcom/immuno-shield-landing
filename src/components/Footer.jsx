export default function Footer() {
  return (
    <footer style={{ background: 'var(--midnight)', borderTop: '1px solid var(--white-10)', paddingTop: '3rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
          gap: '2rem', marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <img src="/assets/logo.png" alt="A Lo Natural" style={{ height: '44px', marginBottom: '1rem' }} />
            <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', lineHeight: 1.6, maxWidth: '280px' }}>
              BestWell Naturals — Suplementos de grado médico para cuerpos que exigen lo mejor.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { icon: '📍', text: 'Calle Villa 139, Suite 115, Ponce PR 00730' },
                { icon: '📞', text: '+1 939-247-9292' },
              ].map(i => (
                <div key={i.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--white-60)', fontSize: 'var(--text-xs)' }}>
                  <span>{i.icon}</span><span>{i.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--white)', marginBottom: '1rem', fontSize: 'var(--text-sm)' }}>Producto</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '#problema', label: 'El Problema' },
                { href: '#ingredientes', label: 'Ingredientes' },
                { href: '#proceso', label: 'Cómo Funciona' },
                { href: '#faq', label: 'FAQ' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white-60)'}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--white)', marginBottom: '1rem', fontSize: 'var(--text-sm)' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <a href="https://alonaturalpr.net/policies/terms-of-service" target="_blank" rel="noreferrer" style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--white-60)'}
                >Términos y condiciones</a>
              </li>
              <li>
                <a href="https://alonaturalpr.net/policies/privacy-policy" target="_blank" rel="noreferrer" style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--white-60)'}
                >Política de privacidad</a>
              </li>
              <li>
                <a href="https://alonaturalpr.net/policies/refund-policy" target="_blank" rel="noreferrer" style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.target.style.color = 'var(--white-60)'}
                >Política de devoluciones</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--white-10)', paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ color: 'var(--white-30)', fontSize: 'var(--text-xs)' }}>
            © 2026 Immuno Shield PRO by A Lo Natural. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
          </div>
        </div>

        {/* Disclaimer */}
        <p style={{
          marginTop: '1.5rem', color: 'var(--white-30)', fontSize: 'var(--text-xs)',
          textAlign: 'center', lineHeight: 1.7, maxWidth: '700px', margin: '1.5rem auto 0',
        }}>
          * Estos resultados pueden variar. Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
          Las declaraciones sobre suplementos dietéticos no han sido evaluadas por la FDA.
          Consulte a su médico antes de iniciar cualquier suplementación.
        </p>
      </div>
    </footer>
  );
}
