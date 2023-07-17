import Image from 'next/image';
import GetCartProducts from '../components/GetCartProducts';
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
        <h1 className={styles.h1}>CartPage</h1>
        <div className={styles.Cart}>
          <GetCartProducts />
        </div>
      </main>
    </>
  );
}
