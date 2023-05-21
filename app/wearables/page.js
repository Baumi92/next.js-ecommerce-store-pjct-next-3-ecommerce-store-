import styles from './page.module.scss';

export default function WearablesPage() {
  return (
    <main>
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
        <div className={styles.picture}>
          <button>
            <img src="/shoes.png" alt="showing shoes" height="400" />
          </button>
          <img src="/Jacket.png" alt="showing jacket" height="400" />
          <button>
            <img src="/trousers.png" alt="showing trousers" height="400" />
          </button>
          <button>
            <img src="/sweater.png" alt="showing sweater" height="400" />
          </button>
        </div>
      </nav>
      <div>
        <img src="/riverview.jpg" alt="showing river" />
      </div>
    </main>
  );
}
