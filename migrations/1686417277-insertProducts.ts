import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'Shoe',
    type: 'shoes',
    accessory: 'clothes',
    img: '/images/shoe.png',
    alt: 'Clothes',
    price: '99€',
  },
  {
    id: 2,
    name: 'Trouser',
    type: 'trousers',
    accessory: 'Soft',
    img: '/images/trouser.png',
    alt: 'Clothes',
    price: '49€',
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
    accessory: 'cozy',
    img: '/images/sweater.png',
    alt: 'Clothes',
    price: '149€',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, type, accessory)
    VALUES
      (${product.name}, ${product.type}, ${product.accessory})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id = ${product.id}
  `;
  }
}
