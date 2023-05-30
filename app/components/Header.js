import Link from 'next/link';
// src/components/Header.js
import React from 'react';
import { useCart } from './useCart';

const Header = () => {
  const { cartItemsCount } = useCart();

  return (
    <header>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/cart" passHref>
        <a data-test-id="cart-link">
          Cart <span data-test-id="cart-count">{cartItemsCount}</span>
        </a>
      </Link>
    </header>
  );
};

export default Header;
