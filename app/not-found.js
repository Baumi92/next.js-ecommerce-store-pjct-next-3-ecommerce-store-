import styles from './not-found.module.scss';

export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: "Sorry cant't find the page you'r looking for",
};

export default function PageNotFound() {
  return <div className={styles.h1}>Sorry this page was not found</div>;
}
