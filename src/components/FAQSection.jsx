import { useState } from 'react';

const faqs = [
  {
    q: '¿Cuánto tarda en hacer efecto?',
    a: 'La mayoría de nuestros clientes reportan una mejora en la respiración en las primeras 48 horas. El efecto completo de blindaje inmune se consolida en 30 días de uso continuo.',
  },
  {
    q: '¿Es seguro tomarlo a diario?',
    a: 'Sí, Immuno Shield PRO está diseñado como un escudo preventivo de uso continuo. Todos sus ingredientes son naturales y han sido formulados bajo supervisión médica para uso diario seguro.',
  },
  {
    q: '¿Cuántas cápsulas trae el frasco?',
    a: '120 cápsulas para 30 días de protección total (4 cápsulas diarias). Recomendamos adquirir la oferta de 2-3 frascos para mantener la continuidad del tratamiento sin interrupción.',
  },
  {
    q: '¿Tiene garantía de devolución?',
    a: 'Sí. Ofrecemos garantía de 30 días sin preguntas. Si no experimentas una mejora notable en tu sistema respiratorio o inmune, te devolvemos el dinero completo.',
  },
  {
    q: '¿Tiene algún efecto secundario?',
    a: 'Al ser 100% natural y libre de rellenos químicos, los efectos secundarios son mínimos. Consulta a tu médico si estás tomando medicamentos o tienes condiciones preexistentes.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: 'var(--midnight)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div className="section-badge">❓ FAQ</div>
          <h2 className="font-display" style={{
            fontSize: 'var(--text-4xl)', color: 'var(--white)', lineHeight: 1.1,
          }}>
            Preguntas frecuentes
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass" style={{
              borderRadius: '1rem',
              border: open === i ? '1px solid rgba(0,212,255,0.4)' : '1px solid var(--white-10)',
              overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', padding: '1.25rem 1.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                  background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--white)', fontSize: 'var(--text-base)' }}>
                  {faq.q}
                </span>
                <span style={{
                  color: 'var(--cyan)', flexShrink: 0, fontSize: '1.25rem',
                  transition: 'transform 0.3s',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.25rem' }}>
                  <p style={{ color: 'var(--white-60)', lineHeight: 1.65, fontSize: 'var(--text-sm)' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
