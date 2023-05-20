import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.h1}> Outdoor Wearables</h1>
      <p className={styles.p}>
        wear your wearables everywhere you want with our super system setup
      </p>
      <div>
        <img className {styles.center} src="Mountain.jpg" alt="Showing Mountain"  />
      </div>
      <div>Hello world</div>
    </main>
  );
}
