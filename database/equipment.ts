type Equipment = {
  id: number;
  name: string;
  img: string;
  alt: string;
};

const equipments: Equipment[] = [
  {
    id: 1,
    name: 'walking stick',
    img: '/images2/walkingstick.jpg',
    alt: 'equipment',
  },
  {
    id: 2,
    name: 'outdoor watch',
    img: '/images2/outdoorwatch.jpg',
    alt: 'equipment',
  },

  { id: 3, name: 'compass', img: '/images2/compass.jpg', alt: 'equipment' },

  { id: 4, name: 'backpack', img: '/images2/backpack.jpg', alt: 'equipment' },
];

export function getEquipmentById(id: number) {
  return equipments.find((equipment) => equipment.id === id);
}
