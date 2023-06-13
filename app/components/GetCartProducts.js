import Link from 'next/link';
import { useState } from 'react';
import styles from './GetCartProduct.module.scss';

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
        price: '99€',
        quantity: 1,
      },
      // Rest of the cart products
    ];
  },
};

export default function CartPage() {
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
        <h1 className={styles.h1}>CartPage</h1>
        <ul>
          {cartProducts.map((product) => (
            <li
              key={`cart-product-${product.id}`}
              data-test-id={`cart-product-${product.id}`}
            >
              <span>{product.name}</span>
              <span>{product.price}</span>
              <span data-test-id={`cart-product-quantity-${product.id}`}>
                {product.quantity}
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
        <Link href="/checkout">
          <button data-test-id="cart-checkout">Buy it</button>
        </Link>
      </div>
    </main>
  );
}
