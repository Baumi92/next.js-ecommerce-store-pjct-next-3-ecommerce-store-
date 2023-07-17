'use client';

import Link from 'next/link';
import { useState } from 'react';

const cartService = {
  getCartProducts: () => {
    return [
      {
        id: 1,
        name: 'Shoe',
        type: 'shoes',
        accessory: 'clothes',
        img: '/images/shoe.png',
        alt: 'Clothes',
        price: 99,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Trouser',
        type: 'trousers',
        accessory: 'Soft',
        img: '/images/trouser.png',
        alt: 'Clothes',
        price: 50,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Jacket',
        type: 'jackets',
        accessory: 'endurable',
        img: '/images/jacket.png',
        alt: 'Clothes',
        price: 120,
        quantity: 1,
      },
      {
        id: 4,
        name: 'Sweater',
        type: 'sweaters',
        accessory: 'cozy',
        img: '/images/sweater.png',
        alt: 'Clothes',
        price: 149,
        quantity: 1,
      },
    ];
  },
};

export default function GetCartProduct() {
  const [cartProducts, setCartProducts] = useState(
    cartService.getCartProducts(),
  );

  const handleRemoveFromCart = (productId) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productId) {
        const updatedProduct = { ...product, quantity: product.quantity - 1 };
        return updatedProduct;
      }
      return product;
    });

    const filteredCartProducts = updatedCartProducts.filter(
      (product) => product.quantity > 0,
    );
    setCartProducts(filteredCartProducts);
    alert('Product removed from Cart!');
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <main>
      <div>
        <ul>
          {cartProducts.map((product) => (
            <li
              key={`cart-product-${product.id}`}
              data-test-id={`cart-product-${product.id}`}
            >
              <span>{product.name}</span>

              <span data-test-id={`cart-product-quantity-${product.id}`}>
                {product.price}
              </span>
              <button
                onClick={() => handleRemoveFromCart(product.id)}
                data-test-id={`cart-product-remove-${product.id}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div data-test-id="cart-total">Total: {totalPrice}</div>
        <Link href="/checkout" />
      </div>
    </main>
  );
}
