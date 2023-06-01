import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

export const products = [
  {
    id: 1,
    name: 'Shoe',
    type: 'Shoes',
    accessory: 'clothes',
    img: '/images/shoe.png',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'Trouser',
    type: 'trousers',
    accessory: 'biscuit',
    img: '/images/trouser.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'Jacket',
    type: 'jackets',
    accessory: 'candy',
    img: '/images/jacket.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'Sweater',
    type: 'sweaters',
    accessory: 'band',
    img: '/images/sweater.png',
    alt: 'Clothes',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
