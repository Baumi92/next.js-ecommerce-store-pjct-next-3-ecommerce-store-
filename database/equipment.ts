type Equipment = {
  id: number;
  name: string;
  img: string;
  alt: string;
  price: number;
};

export const equipments: Equipment[] = [
  {
    id: 1,
    name: 'Walking-stick',
    img: '/images2/walkingstick2.jpg',
    alt: 'equipment',
    price: 50,
  },
  {
    id: 2,
    name: 'Outdoor watch',
    img: '/images2/watch2.jpg',
    alt: 'equipment',
    price: 150,
  },

  {
    id: 3,
    name: 'Compass',
    img: '/images2/compass.jpg',
    alt: 'equipment',
    price: 33,
  },

  {
    id: 4,
    name: 'Backpack',
    img: '/images2/backpack.jpg',
    alt: 'equipment',
    price: 120,
  },
];

export function getEquipmentById(id: number) {
  return equipments.find((equipment) => equipment.id === id);
}
