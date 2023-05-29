import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Products',
  description: 'My favorite products',
};

const products = [
  {
    id: 1,
    name: 'Shuffle',
    type: 'Shoe',
    accessory: 'clothes',
    img: '/images/Shuffle.png',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'Truls',
    type: 'trouser',
    accessory: 'biscuit',
    img: '/images/Truls.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'Jack',
    type: 'jacket',
    accessory: 'candy',
    img: '/images/Jack.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'Swat',
    type: 'sweaters',
    accessory: 'band',
    img: '/images/Blitz.png',
    alt: 'Clothes',
  },
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
        <h1 className={styles.h1}>Products</h1>
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
