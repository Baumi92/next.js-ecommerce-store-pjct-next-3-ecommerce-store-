import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

export const products = [
  {
    id: 1,
    name: 'Shuffle',
    type: 'Shoe',
    accessory: 'rat',
    img: '/images/Shuffle.png',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'Truls',
    type: 'trouser',
    accessory: 'biscuit',
    img: '/images/Truls.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'Jack',
    type: 'jacket',
    accessory: 'candy',
    img: '/images/Jack.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'Swat',
    type: 'sweaters',
    accessory: 'band',
    img: '/images/Blitz.png',
    alt: 'Clothes',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
