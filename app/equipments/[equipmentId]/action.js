'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(equipmentId, comment) {
  // 1. get the current cookie
  const equipmentCommentsCookie = getCookie('equipmentComments');
  // 2.we parse the cookie
  const equipmentComments = !equipmentCommentsCookie
    ? []
    : parseJson(equipmentCommentsCookie);

  // 3. we edit the cookie

  const equipmentToUpdate = equipmentComments.find((equipmentComment) => {
    return equipmentComment.id === equipmentId;
  });

  if (equipmentToUpdate) {
    equipmentToUpdate.comment = comment;
  } else {
    equipmentComments.push({
      id: equipmentId,
      comment,
    });
  }
  // 4. we override the cookie
  // This set the cookies into Response Headers
  await cookies().set('equipmentComments', JSON.stringify(equipmentComments));
}
