import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.h1}> Outdoor Wearables</h1>
      <p className={styles.p}>"WildGear: Embrace the Wild, Equip Yourself"</p>
      <section className={styles.section}>
        <div>
          <img src="/Mountainview.jpg" alt="Showing Mountain" />
        </div>
      </section>
      <div className={styles.h1}>Our Products</div>
      <section>
        <div className={styles.picture}>
          <img src="/shoes.png" alt="showing shoes" height="400" />
          <img src="/Jacket.png" alt="showing jacket" height="400" />
          <img src="/trousers.png" alt="showing trousers" height="400" />
          <img src="/sweater.png" alt="showing sweater" height="400" />
        </div>
      </section>
    </main>
  );
}
