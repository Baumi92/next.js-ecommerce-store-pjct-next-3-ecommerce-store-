import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const products = [
  { id: 1, name: 'shoe', type: 'cat', accessory: 'rat' },
  { id: 2, name: 'trouser', type: 'dog', accessory: 'biscuit' },
  { id: 3, name: 'jacket', type: 'trashpanda', accessory: 'candy' },
  { id: 4, name: 'sweater', type: 'snake', accessory: 'band' },
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

      <main className={styles.picture}>
        {products.map((product) => {
          return (
            <div key={`product-div-${product.id}`}>
              <Link href={`/products/${product.name}`}>{product.name}</Link>

              <Image
                src={`/images/${product.name}.png`}
                width={300}
                height={300}
              />
            </div>
          );
        })}
      </main>
    </>
  );
}
