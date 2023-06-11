import React from 'react';

export default function CartItem({ item, removeFromCart, updateQuantity }) {
  if (!item || !item.id) {
    return null;
  }

  const cartItems = [];
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveClick = () => {
    removeFromCart(item.id);
  };

  return (
    <div key={item.id} data-test-id={`cart-product-${item.id}`}>
      <p>
        {item.name} - {item.price}
      </p>
      <p data-test-id={`cart-product-quantity-${item.id}`}>
        Quantity: {item.quantity}
      </p>
      <button
        data-test-id={`cart-product-remove-${item.id}`}
        onClick={handleRemoveClick}
      >
        Remove
      </button>
    </div>
  );
}
