import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

export const products = [
  {
    id: 1,
    name: 'Shuffle',
    type: 'Shoe',
    accessory: 'rat',
    img: '/public/schuhe.jpg',
    alt: 'Clothes',
  },
  {
    id: 2,
    name: 'Truls',
    type: 'trouser',
    accessory: 'biscuit',
    img: '/public/Truls.png',
    alt: 'Clothes',
  },
  {
    id: 3,
    name: 'Jack',
    type: 'jacket',
    accessory: 'candy',
    img: '/public/Jack.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'Swat',
    type: 'sweaters',
    accessory: 'band',
    img: '/public/Blitz.png',
    alt: 'Clothes',
  },
];

export function getProductById(name) {
  return products.find((product) => product.name === name);
}
