import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Commerce Store',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <div className={styles.topnav}>
                <a className={styles.active} href="/">
                  Home
                </a>
                <Link href="/products">Products</Link>
                <Link href="/news">News</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
                <div className={styles.topnavr}>
                  <Link href="/cart">Cart</Link>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
