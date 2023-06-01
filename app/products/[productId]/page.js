import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../../database/product';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId)); // Convert the string in to a number

  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }
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
        <Image src="/riverview.jpg" alt="river" layout="fill" />
      </div>

      <main className={styles.main}>
        <h1 className={styles.h1}> {singleProduct.name}</h1>
        <Image
          src={`/images/${singleProduct.name}.png`}
          width={300}
          height={300}
        />
        <div className={styles.product}>
          This are {singleProduct.type} and {singleProduct.accessory}
        </div>
        <button>Add to Cart</button>
        <Link href="/products/checkout/">Go To</Link>
        <button>
          <Link href="/equipments/"> Check out also </Link>
        </button>
      </main>
    </>
  );
}
