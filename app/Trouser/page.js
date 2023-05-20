import styles from './page.module.scss';

export default function TrouserPage() {
  return (
    <main>
      <div className={styles.h1}> Trouser</div>
      <div className={styles.picture}>
        <img src="/trousers.png" alt="showing trousers" height="500" />
      </div>
    </main>
  );
}
