import ShopifyBuyButton from './ShopifyBuyButton';

const VARIANT_ID = import.meta.env.VITE_SHOPIFY_VARIANT_ID;

export default function Hero({ onBuyClick }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,212,255,0.08) 0%, transparent 65%),
                   radial-gradient(ellipse 60% 80% at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 60%),
                   var(--midnight)`,
      overflow: 'hidden',
    }}>
      {/* Decorative grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}>
          {/* Left: Copy */}
          <div>
            <div className="section-badge animate-fade-up animate-delay-1">
              🛡 Fórmula de Grado PRO — Grado Médico
            </div>

            <h1 className="font-display animate-fade-up animate-delay-2" style={{
              fontSize: 'clamp(2.5rem, 4vw + 1rem, 4.5rem)',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
              color: 'var(--white)',
              textWrap: 'balance',
            }}>
              Activa Tus Defensas <span style={{ color: 'var(--cyan)' }} className="text-glow-cyan">Naturales</span><br className="md:hidden" /> y Apoya Tu Bienestar Diario
            </h1>

            <p className="animate-fade-up animate-delay-3" style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--white-85)',
              marginBottom: '0.75rem',
              lineHeight: 1.55,
              maxWidth: '520px',
            }}>
              <strong style={{ color: 'var(--white)' }}>Immuno Shield PRO</strong> — Con vitamina C, zinc, equinácea, astrágalo y hongos funcionales cuidadosamente seleccionados.
            </p>

            <p className="animate-fade-up animate-delay-3" style={{
              fontSize: 'var(--text-base)', color: 'var(--white-60)', marginBottom: '2rem',
            }}>
              Tu apoyo diario para una vida más plena.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up animate-delay-4" style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem'
            }}>
              <ShopifyBuyButton
                variantId={VARIANT_ID}
                buttonText="ORDENA AHORA"
              />
              <a href="#problema" className="btn-secondary">Ver por qué →</a>
            </div>

            {/* Trust micro-badges */}
            <div className="animate-fade-up animate-delay-4" style={{
              display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center'
            }}>
              {[
                { icon: '🏥', text: 'Doctor Recommended' },
                { icon: '✅', text: 'GMP Certified' },
                { icon: '🌿', text: '100% Natural' },
                { icon: '🇺🇸', text: 'Made in USA' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--white-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product image */}
          <div className="flex justify-center md:justify-end" style={{ position: 'relative' }}>
            {/* Glow halo */}
            <div style={{
              position: 'absolute', inset: '10%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
              borderRadius: '50%',
            }} />
            <div style={{ position: 'relative', maxWidth: '440px', width: '100%', transform: 'translateX(clamp(0px, 2vw, 20px))' }}>
              <img
                src="/assets/infografias/Hero-Pic.jpeg"
                alt="Immuno Shield PRO — Suplemento Inmunológico Premium"
                style={{
                  width: '100%',
                  borderRadius: '1.5rem',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,212,255,0.15)',
                  objectFit: 'cover',
                }}
              />
              {/* Float badge */}
              <div style={{
                position: 'absolute', bottom: '-1rem', left: '-1rem',
                background: 'linear-gradient(135deg, #0f2040, #0a1628)',
                border: '1px solid rgba(0,212,255,0.3)',
                borderRadius: '1rem',
                padding: '0.875rem 1.25rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                minWidth: '180px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                    background: 'var(--cyan-glow)', border: '1px solid rgba(0,212,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  }}>🛡️</div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--white)', fontSize: 'var(--text-sm)' }}>Escudo Activado</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--cyan)' }}>Desde la 1ª dosis</p>
                  </div>
                </div>
              </div>
              {/* Stars badge */}
              <div style={{
                position: 'absolute', top: '1rem', right: '-0.5rem',
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.4)',
                borderRadius: '0.75rem',
                padding: '0.5rem 0.875rem',
              }}>
                <div style={{ color: 'var(--amber)', fontSize: '0.85rem', fontWeight: 700 }}>★★★★★</div>
                <div style={{ color: 'var(--white-60)', fontSize: 'var(--text-xs)' }}>+1,200 clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
