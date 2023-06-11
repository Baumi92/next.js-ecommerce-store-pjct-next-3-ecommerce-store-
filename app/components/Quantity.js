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
  const [cartQuantity, setCartQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    let newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    }
    setSelectedQuantity(newQuantity);
    setPrice(newQuantity * price);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((price) => (quantity + 1) * price);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((price) => (quantity - 1) * price);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      return;
    }

    // Update the cart quantity
    setCartQuantity((prevQuantity) => prevQuantity + selectedQuantity);

    // Add the quantity to the cart
    cartService.addToCart({ name: 'Product Name', quantity: selectedQuantity });

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
          <span data-test-id="product-price">€{price}</span>
          <div>
            <button onClick={handleDecreaseQuantity}>-</button>
            <input
              type="number"
              data-test-id="product-quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
            <button onClick={handleIncreaseQuantity}>+</button>
            {isInCart ? (
              <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            ) : (
              <button
                onClick={handleAddToCart}
                data-test-id="product-add-to-cart"
              >
                Add to Cart
              </button>
            )}
            <div>
              <Link href="/cart">
                <button>Go to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
