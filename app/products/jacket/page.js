import styles from './page.module.scss';

export default function JacketPage() {
  return (
    <main>
      <div className={styles.h1}> Jacket</div>
      <div className={styles.picture}>
        <img src="/Jacket.png" alt="showing jacket" height="500" />
      </div>
    </main>
  );
}
