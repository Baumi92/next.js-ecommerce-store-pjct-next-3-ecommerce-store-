import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../../database/product';
import Quantity from '../../components/Quantity';
import EquipmentCommentForm from '../../equipments/[equipmentId]/EquipmentCommentForm';
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
        <Image src="/riverview.jpg" alt="river" fill />
      </div>

      <main className={styles.main}>
        <h1 className={styles.h1}> {singleProduct.name}</h1>
        <Image
          src={`/images/${singleProduct.name}.png`}
          width={300}
          height={300}
        />
        <Quantity />
        <div className={styles.product}>
          This are {singleProduct.type} and the best price is
          {singleProduct.price}
        </div>
        <button>Add to Cart</button>
        <Link href="/checkout/">Go To</Link>
        <button>
          <Link href="/equipments/"> Check out also </Link>
        </button>
      </main>
      <EquipmentCommentForm />
    </>
  );
}
