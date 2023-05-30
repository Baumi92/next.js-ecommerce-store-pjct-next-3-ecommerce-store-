'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Quantity.module.scss';

export const metadata = {
  title: 'Shoe Page',
  description: 'My shoe',
};

const cartService = {
  addToCart: (product) => {
    // Simulate adding the product to the cart
    console.log(
      `Adding ${product.name} to the cart with quantity ${product.quantity}`,
    );
  },
};

export default function ShoePage() {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [price, setPrice] = useState(99.0);

  const handleQuantityChange = (event) => {
    let newQuantity = parseInt(event.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    }
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    setPrice(newQuantity * 99.0);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice((quantity + 1) * 99.0);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((quantity - 1) * 99.0);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert('Please enter a valid quantity.');
      return;
    }

    // Add the quantity to the cart

    setIsInCart(true);
    alert('Product added to cart!');
  };

  const product = {
    id: 1, //
    name: 'Shoe',
    price: 99.0,
    quantity: quantity,
  };

  const handleRemoveFromCart = () => {
    // Remove the product from the cart

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
          <div className={styles.button}>
            <span data-test-id="product-price ">{price}</span>
            <div>
              <input
                onClick={handleQuantityChange}
                type="number"
                data-test-id="product-quantity"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
              />
              <button onClick={handleRemoveFromCart}>Remove from Cart</button>
              <button
                onClick={handleAddToCart}
                data-test-id="product-add-to-cart"
              >
                Add to Cart
              </button>
              <div>
                <Link href="/cart">
                  <button>Go to Cart</button>
                </Link>
              </div>
            </div>
          </div>
          <div></div>
          <div className={styles.h2}>
            <h2> Key Facts</h2>
            <p> Here should be a Text </p>
          </div>
        </div>
      </main>
    </>
  );
}
