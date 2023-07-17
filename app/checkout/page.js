import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './page.module.scss';

const CheckoutForm = dynamic(() => import('../components/CheckoutForm'));

export default function CheckoutPage() {
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
        <h1 className={styles.h1}>CheckoutPage</h1>
        <CheckoutForm />
        <button>Go back</button>
      </main>
    </>
  );
}
