import styles from './page.module.scss';

export const metadata = {
  title: 'Trouser page',
  description: 'Trousers',
};

export default function TrouserPage() {
  return (
    <main>
      <div className={styles.h1}> Trouser</div>
      <div className={styles.picture}>
        <img src="/trouser.png" alt="showing trousers" height="500" />
        <input
          type="number"
          data-test-id="product-quantity"
          value="1"
          min="1"
        />
        <button data-test-id="product-add-to-cart">Add to Cart</button>
      </div>
      <section>
        <h2> Key Facts</h2>
        <p> Here is a Text Supposed</p>
      </section>
    </main>
  );
}
