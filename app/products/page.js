import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/product';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'My favorite products',
};

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
        <h1 className={styles.h1}>Products</h1>
        {products.map((product) => {
          return (
            <div className={styles.column} key={`product-div-${product.id}`}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
              <Image
                src={`/images/${product.name}.png`}
                width={300}
                height={300}
              />
              <div>
                <span>Product Price</span>
                <p> Hello here should be a text</p>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
