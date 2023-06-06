'use client';

import { useState } from 'react';
import { createOrUpdateComment } from './action';

export default function EquipmentCommentForm(props) {
  const [comment, setComment] = useState('');

  return (
    <form>
      <textarea
        value={comment}
        onChange={(event) => {
          setComment(event.currentTarget.value);
        }}
      />
      <button
        formAction={async () => {
          await createOrUpdateComment(props.equipmentId, comment);
        }}
      >
        Update Comment
      </button>
    </form>
  );
}
