import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const products = [
  { id: 1, name: 'shoes', type: 'shoe', object: 'trekking' },
  { id: 2, name: 'jacket', type: 'jackets', object: ' waterproof' },
  { id: 3, name: 'trousers', type: 'trouser', object: 'dirtproof' },
  { id: 4, name: 'sweater', type: 'sweater', object: 'cozy' },
];

export default function ProductPage() {
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
        <Image src="/riverview.jpg" alt="showing river" layout="fill" />
      </div>

      <main>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              {products.name}
              <br />
              <Image
                src={`/images/${product.name}.png`}
                width={500}
                height={500}
                alt="outdoorwearables"
              />
            </div>
          );
        })}
        <h1 className={styles.h1}> Products</h1>

        <nav className={styles.topnav}>
          <Link href="shoes">Shoe</Link>
          <Link href="jacket">Jacket</Link>
          <Link href="trouser">Trouser</Link>
          <Link href="sweater">Sweater</Link>
        </nav>
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
    </>
  );
}
