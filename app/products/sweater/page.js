import styles from './page.module.scss';

export default function SweaterPage() {
  return (
    <main>
      <div className={styles.h1}> Sweater</div>
      <div className={styles.picture}>
        <img src="images/sweater.png" alt="showing sweater" height="500" />
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
