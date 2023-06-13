'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getCookie } from '../../util/cookies';

export const metadata = {
  title: 'Quantity',
  description: 'Quantity',
};

const cartService = {
  cartProducts: [],
  addToCart: (product, quantity) => {
    // Simulate adding the product to the cart
    const existingProduct = cartService.cartProducts.find(
      (item) => item.id === product.id,
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cartService.cartProducts.push({
        ...product,
        quantity,
      });
    }

    console.log(`Adding ${product.name} to the cart with quantity ${quantity}`);
  },

  removeFromCart: (product) => {
    // Simulate removing the product from the cart
    cartService.cartProducts = cartService.cartProducts.filter(
      (item) => item.id !== product.id,
    );
    console.log(`Removing ${product.name} from the cart`);
  },
};

export default function Quantity({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(2);
  const [price, setPrice] = useState(0);

  const [cookies, setCookie] = useCookies(['productQuantity', 'productPrice']);

  useEffect(() => {
    const storedQuantity = getCookie('productQuantity');
    const storedPrice = getCookie('productPrice');

    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity));
    }

    if (storedPrice) {
      setPrice(parseFloat(storedPrice));
    }
  }, [cookies]);

  // Update the product quantity and store it in the cookie
  const handleQuantityChange = (event) => {
    let newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    }
    setSelectedQuantity(newQuantity);
    setPrice(newQuantity * price);
    setQuantity(newQuantity);
    setCookie('productQuantity', newQuantity);
    setCookie('productPrice', price.toFixed(2));
  };

  const handleIncreaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (selectedQuantity <= 0) {
      return;
    }

    // Update the cart quantity
    setCartQuantity((prevQuantity) => prevQuantity + selectedQuantity);

    // Add the quantity to the cart
    cartService.addToCart({ product, selectedQuantity });

    setIsInCart(true);
    alert('Product added to cart!');
  };

  const handleRemoveFromCart = () => {
    // Remove the product from the cart
    cartService.removeFromCart({ name: product.name });

    setIsInCart(false);
    alert('Product removed from cart!');
  };

  return (
    <main>
      <div>
        <div>
          <span data-test-id="product-price">
            €{product * selectedQuantity}
          </span>
          <div>
            <button onClick={handleDecreaseQuantity}>-</button>
            <input
              type="number"
              data-test-id="product-quantity"
              value={selectedQuantity}
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
