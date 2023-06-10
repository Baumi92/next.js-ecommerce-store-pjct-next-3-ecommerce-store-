import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getEquipments } from '../../database/equipment';
import styles from './page.module.scss';

export default async function EquipmentPage() {
  const allCookies = cookies().getAll();
  console.log(allCookies);
  const equipments = await getEquipments();
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
        <Image src="/riverview.jpg" alt="river" fill />
      </div>
      <main className={styles.main}>
        {equipments.map((equipment) => (
          <div className={styles.column} key={`equipment-div-${equipment.id}`}>
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
