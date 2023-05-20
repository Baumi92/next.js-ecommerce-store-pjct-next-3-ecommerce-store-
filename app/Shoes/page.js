import styles from './page.module.scss';

export default function ShoePage() {
  return (
    <main>
      <div className={styles.h1}> Shoes</div>
      <div className={styles.picture}>
        <img src="/shoes.png" alt="showing shoes" height="500" />
      </div>
    </main>
  );
}
