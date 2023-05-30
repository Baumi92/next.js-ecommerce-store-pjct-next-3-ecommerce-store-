// src/hooks/useCart.js
'use client';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    if (cookies.cart) {
      setCart(cookies.cart);
    }
  }, [cookies.cart]);

  const addToCart = (productId, quantity) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(
      (item) => item.productId === productId,
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      updatedCart.push({ productId, quantity });
    }

    setCart(updatedCart);
    setCookie('cart', updatedCart, { path: '/' });
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    setCookie('cart', updatedCart, { path: '/' });
  };

  const clearCart = () => {
    setCart([]);
    setCookie('cart', [], { path: '/' });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      // Fetch the price of the product based on the productId
      const productPrice = 10; // Replace with your actual logic
      return total + productPrice * item.quantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    cartItemsCount: getCartItemCount(),
    cartTotal: getCartTotal(),
  };
};

export default useCart;
