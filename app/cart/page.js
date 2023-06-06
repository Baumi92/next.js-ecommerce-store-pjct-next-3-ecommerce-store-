import Image from 'next/image';
import React from 'react';

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
      <main> Cartpage</main>
    </>
  );
}
