'use client';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  return (
    <button
      className={styles.GenerateButton}
      onClick={() => console.log('generate')}
    >
      Get a look
    </button>
  );
}
