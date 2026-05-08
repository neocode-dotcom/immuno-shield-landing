import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ComparisonTable from './components/ComparisonTable';
import IngredientsSection from './components/IngredientsSection';
import TimelineSection from './components/TimelineSection';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import CheckoutSection from './components/CheckoutSection';
import Footer from './components/Footer';

function App() {
  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--midnight)' }}>
      <Navbar onBuyClick={scrollToCheckout} />
      <main style={{ paddingTop: '68px' }}>
        <Hero onBuyClick={scrollToCheckout} />
        <PainSection onBuyClick={scrollToCheckout} />
        <SolutionSection onBuyClick={scrollToCheckout} />
        <ComparisonTable onBuyClick={scrollToCheckout} />
        <IngredientsSection onBuyClick={scrollToCheckout} />
        <TimelineSection onBuyClick={scrollToCheckout} />
        <TrustSection onBuyClick={scrollToCheckout} />
        <FAQSection />
        <CheckoutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
