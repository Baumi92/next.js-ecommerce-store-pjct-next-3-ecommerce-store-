import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <main>
      <div className={styles.h1}> Cart </div>
      <div className={styles.h1}>
        <img src="/Riverview.jpg" alt="showing River" height="500" />
      </div>

      <div className={styles.adress}>
        <button>Checkout</button>{' '}
      </div>
    </main>
  );
}
