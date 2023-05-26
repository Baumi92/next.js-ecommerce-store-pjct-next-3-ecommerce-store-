import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';

export default function CartPage() {
  const ShoePage = () => {
    const cartItems = [
      {
        id: 1,
        name: 'Shoes',
        price: 99.0,
        quantity: 2,
      },
      { id: 2, name: 'Jacket', price: 49.0, quantity: 1 },
      { id: 3, name: 'Trouser', price: 49.0, quantity: 1 },
      { id: 4, name: 'Sweater', price: 49.0, quantity: 1 },
      // Add more items as needed
    ];
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
          <Image src="/Riverview.jpg" alt="showing River" layout="fill" />
        </div>

        <main>
          <div>
            <h1>Cart</h1>
            <ul>
              {cartItems.map((item) => (
                <li key={`cart-item-${item.id}`}>
                  <div>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.quantity}</span>
                  </div>
                </li>
              ))}
            </ul>
            : (<p>Your cart is empty.</p>)
          </div>

          <div className={styles.adress}>
            <button>Checkout</button>
          </div>
        </main>
      </>
    );
  };
}
