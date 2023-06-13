import Image from 'next/image';
import Link from 'next/link';
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
        <Image src="/Berge.jpg" alt="showing desert" fill />
      </div>
      <main>
        <h1>CartPage</h1>
      </main>
    </>
  );
}
