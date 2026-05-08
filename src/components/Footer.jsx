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
              {['Términos y condiciones', 'Política de privacidad', 'Política de devoluciones'].map(l => (
                <li key={l}>
                  <a href="#" style={{ color: 'var(--white-60)', textDecoration: 'none', fontSize: 'var(--text-sm)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                    onMouseLeave={e => e.target.style.color = 'var(--white-60)'}
                  >{l}</a>
                </li>
              ))}
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
            {/* Instagram */}
            <a href="#" style={{
              width: '2.25rem', height: '2.25rem', borderRadius: '50%',
              background: 'var(--white-05)', border: '1px solid var(--white-10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--cyan-glow)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--white-05)'; e.currentTarget.style.borderColor = 'var(--white-10)'; }}
            >
              <svg style={{ width: '1rem', height: '1rem', color: 'var(--white-60)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
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
