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
    name: 'walking stick',
    img: '/images2/walkingstick2.jpg',
    alt: 'equipment',
    price: 50,
  },
  {
    id: 2,
    name: 'outdoor watch',
    img: '/images2/outdoorwatch.jpg',
    alt: 'equipment',
    price: 150,
  },

  {
    id: 3,
    name: 'compass',
    img: '/images2/compass.jpg',
    alt: 'equipment',
    price: 33,
  },

  {
    id: 4,
    name: 'backpack',
    img: '/images2/backpack.jpg',
    alt: 'equipment',
    price: 120,
  },
];

export function getEquipmentById(id: number) {
  return equipments.find((equipment) => equipment.id === id);
}
