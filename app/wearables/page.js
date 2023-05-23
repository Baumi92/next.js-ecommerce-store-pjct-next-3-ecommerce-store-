import Image from 'next/image';
import styles from './page.module.scss';

export default function WearablesPage() {
  return (
    <main>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/riverview.jpg" alt="showing river" layout="fill" />
      </div>
      <div className={styles.picture}>
        <button>
          <Image
            src="/shoes.png"
            alt="showing shoes"
            height="400"
            width="400"
          />
          <p className={styles.p}>Shoe</p>
        </button>
        <button>
          <Image
            src="/Jacket.png"
            alt="showing jacket"
            height="400"
            width="400"
          />
          <p className={styles.p}>Jacket</p>
        </button>
        <button>
          <Image
            src="/trousers.png"
            alt="showing trousers"
            height="400"
            width="400"
          />
          <p className={styles.p}>Trousers</p>
        </button>
        <button>
          <Image
            src="/sweater.png"
            alt="showing sweater"
            height="400"
            width="400"
          />
          <p className={styles.p}>Sweater</p>
        </button>
      </div>
    </main>
  );
}
