import Image from 'next/image';
import React from 'react';
import { useCart } from '../../components/useCart';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/Riverview.jpg" alt="showing River" fill />
      </div>

      <main>
        <div>
          <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.productId}
                      data-test-id={`cart-product-${item.productId}`}
                    >
                      <p>{`Product ${item.productId}`}</p>
                      <p>{`Quantity: ${item.quantity}`}</p>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        data-test-id={`cart-product-remove-${item.productId}`}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <p>Total: {cartTotal}</p>
                <button data-test-id="cart-checkout">Checkout</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
