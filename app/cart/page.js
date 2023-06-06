import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

export default function CartPage() {
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
        <Image src="/Riverview.jpg" alt="showing River" fill />
      </div>
      <main>
        <div>
          <h1 className={styles.h1}> CartPage</h1>
          <Link href="/checkout/">
            <button>checkout</button>
          </Link>
        </div>
      </main>
    </>
  );
}
