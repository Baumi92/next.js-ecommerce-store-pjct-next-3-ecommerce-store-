import styles from './page.module.scss';

export default function WearablesPage() {
  return (
    <main>
      <div> Wearables</div>
      <nav>
        <ul>
          <li>
            <div className={styles.topnav}>
              <a href="jacket"> Jacket</a>
              <a href="shoes">Shoes </a>
              <a href="sweater">Sweater </a>
              <a href="trouser">Trouser </a>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  );
}
