'use client';
import Link from 'next/link';
import { useState } from 'react';

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

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [price, setPrice] = useState('');

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
    setPrice(newQuantity * price);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice((quantity + 1) * price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((quantity - 1) * price);
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

  const handleRemoveFromCart = () => {
    // Remove the product from the cart

    setIsInCart(false);
    alert('Product removed from cart!');
  };

  return (
    <main>
      <div>
        <div>
          <span data-test-id="product-price €">{price}</span>
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
              <Link href="/cart/">
                <button>Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2> Key Facts</h2>
          <p> Here should be a Text </p>
        </div>
      </div>
    </main>
  );
}
