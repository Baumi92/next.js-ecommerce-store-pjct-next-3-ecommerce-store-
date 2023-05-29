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

          <h2 className={styles.h1}>Our Products</h2>
          <p> Here should be a Text </p>
          <div className={styles.picture}>
            <Link href="/products">
              <Image
                src="/shoe.png"
                alt="showing shoes"
                height="400"
                width="400"
              />
            </Link>
            <Link href="/products">
              <Image
                src="/jacket.png"
                alt="showing jacket"
                height="400"
                width="400"
              />
            </Link>
            <Link href="/products">
              <img
                src="/trouser.png"
                alt="showing trousers"
                height="400"
                width={400}
              />
            </Link>
            <Link href="/products">
              <Image
                src="/sweater.png"
                alt="showing sweater"
                height="400"
                width={400}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
