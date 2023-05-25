import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'Shoe Page',
  description: 'My shoe',
};

export default function ShoePage() {
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
        <Image src="/Mountainview.jpg" alt="mountainview" layout="fill" />
      </div>
      <main>
        <h1 className={styles.h1}> Shoes</h1>
        <div className={styles.picture}>
          <img
            src="/shoe.png"
            data-test-id="product-image"
            alt="Product Shoe"
            height="500"
          />

          <input
            type="number"
            data-test-id="product-quantity"
            value="1"
            min="1"
          />
          <button data-test-id="product-add-to-cart">Add to Cart</button>
        </div>
        <div className={styles.h2}>
          <h2> Key Facts</h2>
          <p> Here should be a Text </p>
        </div>
      </main>
    </>
  );
}
