import styles from './page.module.scss';

export const metadata = {
  title: 'Shoe Page',
  description: 'My shoe',
};

export default function shoePage() {
  return (
    <main>
      <div className={styles.h1}> Shoes</div>
      <div className={styles.picture}>
        <img src="/shoe.png" alt="showing shoes" height="500" />
      </div>
    </main>
  );
}
