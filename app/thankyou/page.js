import Image from 'next/image';
import styles from './page.module.scss';

export default function ThankyouPage() {
  return (
    <main>
      <div className={styles.h1}> Thank You for your Purchase</div>
      <div className={styles.h1}>
        <Image src="/images/lauthorn.suisse.jpg" height={400} width={400} />
      </div>
    </main>
  );
}
