import styles from './page.module.scss';

export default function SweaterPage() {
  return (
    <main>
      <div className={styles.h1}> Sweater</div>
      <div className={styles.picture}>
        <img src="/sweater.png" alt="showing sweater" height="500" />
      </div>
    </main>
  );
}
