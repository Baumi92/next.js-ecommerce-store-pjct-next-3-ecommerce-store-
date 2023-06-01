import { notFound } from 'next/dist/client/components/not-found';
import Image from 'next/image';
import { getEquipmentById } from '../../../database/equipment';
import styles from './page.module.scss';

type Props = {
  params: { equipmentId: string };
};

export default function EquipmentPage(props: Props) {
  console.log(props);
  const equipment = getEquipmentById(Number(props.params.equipmentId));
  const singleEquipment = getEquipmentById(Number(props.params.equipmentId)); // convert the string into a number;

  if (!equipment) {
    notFound();
  }

  return (
    <main className={styles.main}>
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
      <div className={styles.h1}>single page for {equipment.name}</div>
      <div>
        <h1 className={styles.h1}> {equipment.name}</h1>
        <Image
          src={`/public/images2/${equipment.name}.jpg`}
          width={300}
          height={300}
          alt="Equipment"
        />
      </div>
    </main>
  );
}
