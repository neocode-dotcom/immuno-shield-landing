const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const CREATE_CART_MUTATION = `
  mutation createCart($variantId: ID!, $quantity: Int!) {
    cartCreate(input: {
      lines: [{ quantity: $quantity, merchandiseId: $variantId }]
    }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

import { useState } from 'react';

export default function ShopifyBuyButton({
  variantId,
  quantity = 1,
  buttonText = '¡COMPRAR AHORA!',
  fullWidth = false,
}) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleBuy = async () => {
    if (!variantId) { console.error('No variantId'); return; }
    setLoading(true);
    try {
      const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
        },
        body: JSON.stringify({ query: CREATE_CART_MUTATION, variables: { variantId, quantity } }),
      });
      const { data, errors } = await res.json();
      if (errors || data?.cartCreate?.userErrors?.length > 0) {
        throw new Error(errors?.[0]?.message || data?.cartCreate?.userErrors?.[0]?.message);
      }
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        window.location.href = data.cartCreate.cart.checkoutUrl;
      }, 400);
    } catch (err) {
      console.error(err);
      window.location.href = `https://${SHOPIFY_DOMAIN}/cart`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="btn-primary"
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {loading ? (
        <>
          <svg style={{ width: '1.2rem', height: '1.2rem', animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity="0.75" />
          </svg>
          Procesando...
        </>
      ) : added ? (
        <>
          <svg style={{ width: '1.2rem', height: '1.2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          ¡Redirigiendo!
        </>
      ) : (
        <>
          {buttonText}
          <svg style={{ width: '1.1rem', height: '1.1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </>
      )}
    </button>
  );
}
