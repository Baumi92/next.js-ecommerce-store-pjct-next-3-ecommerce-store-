import Image from 'next/image';
import styles from './page.module.scss';

export default function ContactPage() {
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
        <Image src="/Steinkreis.jpg" alt="mountainview" fill />
      </div>
      <main>
        <div className={styles.h1}> How to contact us</div>

        <div className={styles.adress}>
          Contact Us WildGear 123 Adventure Avenue Vienna, 1010 Austria E-mail
          buxdiehude@gmail.com Phone: 06646666666
        </div>
      </main>
    </>
  );
}
