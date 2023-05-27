import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

export const products = [
  {
    productId: 1,
    name: 'shoe',
    type: 'shoes',
    accessory: 'rat',
    img: '/public/shoe.png',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'trouser',
    type: 'trousers',
    accessory: 'biscuit',
    img: '/public/trouser.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'jacket',
    type: 'jackets',
    accessory: 'candy',
    img: '/public/jacket.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'sweater',
    type: 'sweaters',
    accessory: 'band',
    img: '/public/sweater.png',
    alt: 'Clothes',
  },
];

export function getProductById(id) {
  return products.find((product) => product.name === id);
}
