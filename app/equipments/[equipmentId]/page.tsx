import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getEquipmentById } from '../../../database/equipment';
import Quantity from '../../components/Quantity';
import EquipmentCommentForm from './EquipmentCommentForm';
import styles from './page.module.scss';

type Props = {
  params: { equipmentId: string };
};

export const dynamic = 'force-dynamic';

export default async function EquipmentPage(props: Props) {
  // const equipment = getEquipmentById(Number(props.params.equipmentId));
  const singleEquipment = await getEquipmentById(
    Number(props.params.equipmentId),
  );

  if (!singleEquipment) {
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
        <div className={styles.h1}>single page for {singleEquipment.id}</div>
        <div>
          <h1 className={styles.h1}> {singleEquipment.name}</h1>
          <Image
            src={`/images2/${singleEquipment.name}.jpg`}
            width={300}
            height={300}
            alt="Equipment"
          />
        </div>

        <Quantity />
      </main>
      <EquipmentCommentForm equipmentId={singleEquipment.id} />;
    </>
  );
}
