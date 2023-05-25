import Image from 'next/image';
import { product } from '../../../database';

export default function ProductIDPage(params) {
  const singleProduct = product(product.find(product));
  return (
    <main>
      <h1> {params.name}</h1>
      This is a single product page
    </main>
  );
}
