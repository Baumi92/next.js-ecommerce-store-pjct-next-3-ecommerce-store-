import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

export const products = [
  {
    id: 1,
    name: 'shoe',
    type: 'Shoe',
    accessory: 'clothes',
    img: '/images/shoe.png',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'trouser',
    type: 'trouser',
    accessory: 'biscuit',
    img: '/images/trouser.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'jacket',
    type: 'jacket',
    accessory: 'candy',
    img: '/images/jacket.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'sweater',
    type: 'sweater',
    accessory: 'band',
    img: '/images/sweater.png',
    alt: 'Clothes',
  },
];

export function getProductById(name) {
  return products.find((product) => product.id === name);
}
