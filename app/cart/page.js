import Image from 'next/image';
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
        <div className={styles.adress}>
          <button>Checkout</button>
        </div>
      </main>
    </>
  );
}
