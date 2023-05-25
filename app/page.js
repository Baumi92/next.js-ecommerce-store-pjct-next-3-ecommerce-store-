import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home page',
  description: 'My Homepage',
};

export default function HomePage() {
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/Mountainview.jpg" alt="mountainview" layout="fill" />
      </div>
      <main>
        <h1 className={styles.h1}> Wild Gear</h1>
        <p className={styles.p}>" Embrace the Wild, Equip Yourself"</p>

        <section>
          <div className={styles.picture}>
            <Image
              src="/Fire.jpg"
              alt="showing desert"
              width="530"
              height="700"
            />
          </div>

          <div className={styles.h1}>Our Products</div>
          <div className={styles.picture}>
            <Link href="/products">
              <img src="/shoe.png" alt="showing shoes" height="400" />
            </Link>
            <Link href="/products">
              <img src="/Jacket.png" alt="showing jacket" height="400" />
            </Link>
            <Link href="/products">
              <img src="/trouser.png" alt="showing trousers" height="400" />
            </Link>
            <Link href="/products">
              <img src="/sweater.png" alt="showing sweater" height="400" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
