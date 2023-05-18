import './globals.css';
import { Inter } from 'next/font/google';
import styles from './page.module.css';

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
                <a className={styles.active} href="#home">
                  Home
                </a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
              </div>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
