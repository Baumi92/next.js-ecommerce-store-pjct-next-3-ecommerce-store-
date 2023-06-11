import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '../../../database/product';
import Quantity from '../../components/Quantity';
import styles from './page.module.scss';

type Props = {
  params: { productId: string };
};

export const dynamic = 'force-dynamic';

export default async function ProductPage(props: Props) {
  // const singleProduct = getProductById(Number(params.productId)); // Convert the string in to a numbe
  const singleProduct = await getProductById(Number(props.params.productId));

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

      <main>
        <h1 className={styles.h1}> {singleProduct.name}</h1>
        <Image
          src={`/images/${singleProduct.name}.png`}
          width={300}
          height={300}
          alt="Product"
        />
        <Quantity />
        <div className={styles.product}>
          This are {singleProduct.type} and the best price is
          {singleProduct.price}
        </div>
        <Link href="/equipments"> Check out also </Link>
      </main>
    </>
  );
}
