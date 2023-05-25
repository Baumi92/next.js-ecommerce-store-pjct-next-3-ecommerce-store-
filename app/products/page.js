import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/product';
import styles from './page.module.scss';

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
        <h1>Products</h1>
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
