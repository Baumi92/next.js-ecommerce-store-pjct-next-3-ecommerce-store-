'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getCookie } from '../../util/cookies';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface QuantityProps {
  product: Product;
  onQuantityChange?: (quantity: number) => void;
}

export const metadata = {
  title: 'Quantity',
  description: 'Quantity',
};

const cartService = {
  cartProducts: [] as Product[],
  addToCart: (product: Product, quantity: number) => {
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

  removeFromCart: (product: Product) => {
    // Simulate removing the product from the cart
    cartService.cartProducts = cartService.cartProducts.filter(
      (item) => item.id !== product.id,
    );
    console.log(`Removing ${product.name} from the cart`);
  },
};

const Quantity: React.FC<QuantityProps> = ({ product, onQuantityChange }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const productPrice: number = 99;
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
  }, []);

  // Update the product quantity and store it in the cookie
  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    }
    setSelectedQuantity(newQuantity);
    setPrice(newQuantity * productPrice);
    setQuantity(newQuantity);
    setCookie('productQuantity', newQuantity.toString());
    setCookie('productPrice', (newQuantity * productPrice).toFixed(2));

    // Call the onQuantityChange callback with the new quantity
    if (typeof onQuantityChange === 'function') {
      onQuantityChange(newQuantity);
    }
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
    cartService.addToCart(product, selectedQuantity);

    setIsInCart(true);
    alert('Product added to cart!');
  };

  const handleRemoveFromCart = () => {
    // Remove the product from the cart
    cartService.removeFromCart(product);

    setIsInCart(false);
    alert('Product removed from cart!');
  };

  return (
    <main>
      <div>
        <div>
          <span data-test-id="product-price €">
            €{productPrice * selectedQuantity}
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
};

export default Quantity;
