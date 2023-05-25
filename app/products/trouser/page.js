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
      </div>
    </main>
  );
}
