import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEquipmentById } from '../../../database/equipment';
import Quantity from '../../components/Quantity';
import EquipmentCommentForm from './EquipmentCommentForm';
import styles from './page.module.scss';

type Props = {
  params: { equipmentId: string };
};

export default function EquipmentPage(props: Props) {
  const equipment = getEquipmentById(Number(props.params.equipmentId));

  if (!equipment) {
    notFound();
  }

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
        <div className={styles.h1}>single page for {equipment.id}</div>
        <div>
          <h1 className={styles.h1}> {equipment.name}</h1>
          <Image
            src={`/images2/${equipment.name}.jpg`}
            width={300}
            height={300}
            alt="Equipment"
          />
        </div>

        <Quantity />
      </main>
      <EquipmentCommentForm equipmentId={equipment.id} />;
    </>
  );
}
