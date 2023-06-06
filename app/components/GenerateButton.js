'use client';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  return (
    <button
      className={styles.GenerateButton}
      onClick={() => console.log('generate')}
    >
      Add to Cart
    </button>
  );
}
