import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

type Product = {
  id: number;
  type: string;
  name: string;
  accessory: string | null;
  img: string;
  alt: string;
  price: number;
};
fs.readFile('../app/page.js', () => {});

// export const products: Product[] = [
// {
//   id: 1,
//   name: 'Shoe',
//   type: 'shoes',
//   accessory: 'clothes',
//   img: '/images/shoe.png',
//   alt: 'Clothes',
//   price: '99€',
// },
// {
//   id: 2,
//   name: 'Trouser',
//   type: 'trousers',
//   accessory: 'Soft',
//   img: '/images/trouser.png',
//   alt: 'Clothes',
//   price: '49€',
// },
// {
//   id: 3,
//   name: 'Jacket',
//   type: 'jackets',
//   accessory: 'endurable',
//   img: '/images/jacket.png',
//   alt: 'Clothes',
//   price: '120€',
// },
// {
//   id: 4,
//   name: 'Sweater',
//   type: 'sweaters',
//   accessory: 'cozy',
//   img: '/images/sweater.png',
//   alt: 'Clothes',
//   price: '149€',
// },
// ];
//
// export function getProductsById(id: number) {
// return products.find((product) => product.id === id);}

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT * FROM products
  `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  if (!Number.isInteger(id)) {
    throw new Error('Invalid product ID');
  }

  const [product] = await sql<Product[]>`
  SELECT
   *
  From
  products
  WHERE
  id =  ${id}
`;
  return product;
});
