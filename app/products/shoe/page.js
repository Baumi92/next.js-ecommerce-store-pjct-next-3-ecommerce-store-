'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.scss';

export const metadata = {
  title: 'Shoe Page',
  description: 'My shoe',
};

export default function ShoePage() {
  const [quantity, setQuantity] = useState(1);
  const [counter, setCounter] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert('Please enter a valid quantity.');
      return;
    }
  };
  setIsInCart(true);
  alert('Product added to cart!');

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    alert('Product removed from cart!');
  };

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
        <Image src="/Mountainview.jpg" alt="mountainview" layout="fill" />
      </div>
      <main>
        <h1 className={styles.h1}> Shoes</h1>
        <div className={styles.picture}>
          <img
            src="/shoe.png"
            data-test-id="product-image"
            alt="Product Shoe"
            height="500"
          />
          <span data-test-id="product-price">99.99</span>

          <input
            type="number"
            data-test-id="product-quantity"
            value="1"
            min="1"
          />
          <p>counter: {counter}</p>
          <button data-test-id="product-add-to-cart">Add to Cart</button>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
        <div className={styles.h2}>
          <h2> Key Facts</h2>
          <p> Here should be a Text </p>
        </div>
      </main>
    </>
  );
}
