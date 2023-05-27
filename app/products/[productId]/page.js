import Image from 'next/image';
import { notFound } from 'next/navigation';
import ShoePage from '../../../app/products/[productId]/page';
import { getProductById } from '../../../database/product';

export const dynamic = 'force-dynamic';

export default function ProductIDPage({ params }) {
  console.log(params);
  const singleProduct = getProductById(params.productName);

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
        <Image src="/riverview.jpg" alt="showing river" layout="fill" />
      </div>
      <main>
        <h1> {singleProduct.name}</h1>
        <Image
          src={`/images/${singleProduct.name}.png`}
          width={300}
          height={300}
        />
        This is a {singleProduct.type} product page {singleProduct.object}
        <div>
          <ShoePage />
        </div>
      </main>
    </>
  );
}
