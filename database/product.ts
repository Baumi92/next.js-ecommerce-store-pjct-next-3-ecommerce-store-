import fs from 'node:fs';

fs.readFile('../app/page.js', () => {});

type Products = {
  id: number;
  name: string;
  accessory: string;
  img: string;
  alt: string;
  price: string;
};
export const products: Products[] = [
  {
    id: 1,
    name: 'Shoe',
    type: 'Shoes',
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
    accessory: '',
    img: '/images/jacket.png',
    alt: 'Clothes',
  },
  {
    id: 4,
    name: 'Sweater',
    type: 'sweaters',
    accessory: '',
    img: '/images/sweater.png',
    alt: 'Clothes',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
