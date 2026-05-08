import { useState } from 'react';

export default function Navbar({ onBuyClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#problema', label: 'El Problema' },
    { href: '#ingredientes', label: 'Ingredientes' },
    { href: '#proceso', label: 'Resultados' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(5, 13, 26, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src="/assets/logo.png" alt="A Lo Natural" style={{ height: '44px', width: 'auto' }} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex" style={{ gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 'var(--text-sm)',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >{link.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button onClick={onBuyClick} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: 'var(--text-sm)', animation: 'none' }}>
            ¡COMPRAR AHORA!
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" style={{
          background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem'
        }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(5,13,26,0.98)',
          borderTop: '1px solid rgba(0,212,255,0.1)',
          padding: '1rem',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block', padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}>
              {link.label}
            </a>
          ))}
          <button onClick={() => { onBuyClick(); setIsOpen(false); }}
            className="btn-primary" style={{ width: '100%', marginTop: '1rem', animation: 'none' }}>
            ¡COMPRAR AHORA!
          </button>
        </div>
      )}
    </nav>
  );
}
