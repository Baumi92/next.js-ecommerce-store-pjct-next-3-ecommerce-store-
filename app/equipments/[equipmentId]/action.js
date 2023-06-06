'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateComment(equipmentId, comment) {
  await cookies().set('EquipmentComments', comment);
}  39min
