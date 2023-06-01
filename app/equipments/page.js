import Image from 'next/image';
import Link from 'next/link';
import { getEquipmentById } from '../../database/equipment';
import styles from './page.module.scss';

const equipments = [
  {
    id: 1,
    name: 'walking stick',
    img: '/images2/bergschuhe.jpg',
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

export default function EquipmentPage() {
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/riverview.jpg" alt="river" layout="fill" />
      </div>
      <main className={styles.main}>
        {equipments.map((equipment) => (
          <div key={`equipment-div-${equipment.id}`}>
            <Link href={`/equipments/${equipment.id}`}>
              <h1 className={styles.h1}>
                <Image
                  src={`/images2/${equipment.name}.jpg`}
                  width={400}
                  height={300}
                  alt="showing equipment"
                />
                {equipment.name}
              </h1>
            </Link>
          </div>
        ))}
      </main>
    </>
  );
}
