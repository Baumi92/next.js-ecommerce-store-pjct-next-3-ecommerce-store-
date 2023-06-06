'use server';

import { cookies } from 'next/headers';

export async function createOrUpdateComment(comment) {
  cookies().set('EquipmentComments', comment);
}
