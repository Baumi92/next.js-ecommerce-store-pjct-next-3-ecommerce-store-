'use client';

import { Changa_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import Quantity from '../components/Quantity';
import styles from './page.module.scss';

export default function CartPage() {
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const router = useRouter();
  const cartItems = [
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
    {
      id: 2,
      name: 'Trouser',
      type: 'trousers',
      accessory: 'Soft',
      img: '/images/trouser.png',
      alt: 'Clothes',
      price: '49€',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Jacket',
      type: 'jackets',
      accessory: 'endurable',
      img: '/images/jacket.png',
      alt: 'Clothes',
      price: '120€',
      quantity: 3,
    },
    {
      id: 4,
      name: 'Sweater',
      type: 'sweaters',
      accessory: 'cozy',
      img: '/images/sweater.png',
      alt: 'Clothes',
      price: '149€',
      quantity: 4,
    },
  ];

  const removeFromCart = (itemId) => {};
  const updateQuantity = (itemId, newQuantity) => {};

  useEffect(() => {
    const quantity = router.query?.quantity;
    const parsedQuantity = quantity ? parseInt(quantity, 10) : null;
    setSelectedQuantity(parsedQuantity);
  }, [router.query]);
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/Berge.jpg" alt="showing desert" fill />
      </div>
      <main>
        <div>
          <h1 className={styles.h1}> CartPage</h1>
          <Link href="/checkout/">
            <button>checkout</button>
          </Link>
        </div>
        <button>
          <CartItem />
        </button>
      </main>
    </>
  );
}
