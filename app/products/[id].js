import { useRouter } from 'next/router';
// src/pages/products/[id].js
import React, { useState } from 'react';
import { useCart } from './cart/useCart';

const SingleProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(parseInt(value));
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  return (
    <div>
      <h1>Product {id}</h1>
      <img src="/public/images/.png" alt="Product" data-test-id="product" />
      <p data-test-id="product-price">$10</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
        data-test-id="product-quantity"
      />
      <button onClick={handleAddToCart} data-test-id="product-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProductPage;
