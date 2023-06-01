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
      <div className={styles.h1}>single page for {equipment.id}</div>
    </main>
  );
}
