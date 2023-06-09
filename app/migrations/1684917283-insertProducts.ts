import { Sql } from 'postgres';

export type Product = {
  id: number;
  name: string;
  type: string;
  accessory: string | null;
};

export const product = [
  {
    id: 1,
    name: 'Shoe',
    type: 'Shoes',
    accessory: 'robust',
    img: '/images/shoe.png',
    alt: 'Clothes',
    price: '100€',
  },
  {
    id: 2,
    name: 'Trouser',
    type: 'trousers',
    accessory: 'Soft',
    img: '/images/trouser.png',
    alt: 'Clothes',
    price: '80€',
  },
  {
    id: 3,
    name: 'Jacket',
    type: 'jackets',
    accessory: 'endurable',
    img: '/images/jacket.png',
    alt: 'Clothes',
    price: '120€',
  },
  {
    id: 4,
    name: 'Sweater',
    type: 'sweaters',
    accessory: 'Cozy',
    img: '/images/sweater.png',
    alt: 'Clothes',
    price: '50€',
  },
];

export async function up(sql: Sql) {
  for (const products of product) {
    await sql`
    INSERT INTO products
      (name, type, accessory)
    VALUES
    (${products.name}, ${products.type}, ${products.accessory})
  `;
  }
}

export async function down(sql: Sql) {
  for (const products of product) {
    await sql`
      DELETE FROM products WHERE id = ${products.id}
  `;
  }
}
