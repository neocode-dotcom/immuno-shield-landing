import { useState } from 'react';
import ShopifyBuyButton from './ShopifyBuyButton';

const VARIANT_ID = import.meta.env.VITE_SHOPIFY_VARIANT_ID;
const COMPARE_PRICE = 49.99;
const CURRENT_PRICE = 29.99;
const DISCOUNT = Math.round((1 - CURRENT_PRICE / COMPARE_PRICE) * 100);

export default function CheckoutSection() {
  const [quantity, setQuantity] = useState(1);
  const total = (CURRENT_PRICE * quantity).toFixed(2);

  return (
    <section id="checkout" style={{
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 65%), var(--navy)`,
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
          <div className="section-badge">🛒 Oferta Exclusiva</div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '0.75rem'
          }}>
            Apoya tu sistema inmunológico.<br />
            <span style={{ color: 'var(--cyan)' }} className="text-glow-cyan">Toma el control hoy.</span>
          </h2>
          <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-lg)' }}>
            El apoyo diario que tu cuerpo necesita para mantener su equilibrio natural.
          </p>
        </div>

        {/* Product card */}
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div className="glass glow-cyan" style={{
            borderRadius: '1.75rem',
            border: '1px solid rgba(0,212,255,0.3)',
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.05))',
              padding: '1.5rem',
              borderBottom: '1px solid rgba(0,212,255,0.15)',
              textAlign: 'center',
            }}>
              <span style={{
                background: 'var(--danger)', color: 'white',
                padding: '0.35rem 1rem', borderRadius: '999px',
                fontSize: 'var(--text-sm)', fontWeight: 700,
                display: 'inline-block', marginBottom: '1rem',
              }}>
                ⏰ Oferta por tiempo limitado — {DISCOUNT}% DESCUENTO
              </span>
              <img
                src="/assets/infografias/Hero-Pic.jpeg"
                alt="Immuno Shield PRO"
                style={{
                  width: '160px', height: '160px', borderRadius: '1rem',
                  objectFit: 'cover', margin: '0 auto', display: 'block',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                }}
              />
            </div>

            {/* Body */}
            <div style={{ padding: '1.75rem' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--white)', fontSize: 'var(--text-xl)', marginBottom: '0.25rem' }}>
                Immuno Shield PRO
              </h3>
              <p style={{ color: 'var(--white-60)', fontSize: 'var(--text-sm)', marginBottom: '1.25rem' }}>
                Fórmula de Grado Avanzado | 120 cápsulas — 30 días
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--white)' }}>
                  ${CURRENT_PRICE}
                </span>
                <span style={{ color: 'var(--white-30)', textDecoration: 'line-through', fontSize: 'var(--text-xl)' }}>
                  ${COMPARE_PRICE}
                </span>
                <span style={{
                  background: 'var(--danger)', color: 'white',
                  padding: '0.2rem 0.6rem', borderRadius: '0.375rem',
                  fontSize: 'var(--text-xs)', fontWeight: 700,
                }}>-{DISCOUNT}%</span>
              </div>

              {/* Quantity selector */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--white-60)', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Cantidad
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    style={{
                      width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem',
                      background: 'var(--white-10)', border: '1px solid var(--white-10)',
                      color: 'var(--white)', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 700,
                      disabled: { opacity: 0.4 },
                    }}
                  >−</button>
                  <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--white)', minWidth: '2rem', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    disabled={quantity >= 10}
                    style={{
                      width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem',
                      background: 'var(--white-10)', border: '1px solid var(--white-10)',
                      color: 'var(--white)', cursor: 'pointer', fontSize: '1.25rem', fontWeight: 700,
                    }}
                  >+</button>
                  {quantity > 1 && (
                    <span style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: 'var(--text-base)' }}>
                      Total: ${total}
                    </span>
                  )}
                </div>
              </div>

              {/* Buy button */}
              <ShopifyBuyButton
                variantId={VARIANT_ID}
                quantity={quantity}
                buttonText="ORDENA AHORA"
                fullWidth={true}
              />

              {/* Trust micro row */}
              <div style={{
                display: 'flex', justifyContent: 'center', gap: '1.5rem',
                marginTop: '1.25rem', flexWrap: 'wrap',
              }}>
                {[
                  { icon: '🚚', text: 'Envío gratis' },
                  { icon: '🔒', text: 'Pago seguro' },
                  { icon: '↩️', text: 'Garantía 30 días' },
                ].map(t => (
                  <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>{t.icon}</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--white-60)', fontWeight: 500 }}>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{
            textAlign: 'center', marginTop: '1.5rem',
            color: 'var(--white-30)', fontSize: 'var(--text-xs)', lineHeight: 1.6,
          }}>
            Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad.
            Consulte a su médico antes de iniciar cualquier suplementación.
          </p>
        </div>
      </div>
    </section>
  );
}
