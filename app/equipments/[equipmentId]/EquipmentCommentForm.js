'use client';

import { useState } from 'react';
import { createOrUpdateComment } from './action';

export default function EquipmentCommentForm() {
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
          createOrUpdateComment(comment);
        }}
      >
        Update Comment
      </button>
    </form>
  );
}
