import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return <>
            <div className={styles.navStyle}>
            <ul className={styles.listContents}>
              <Link href='/'><li>Home</li></Link>
              <Link href='/about'><li>About</li></Link>
              <Link href='/blog'><li>Blog</li></Link>
              <Link href='/contact'><li>Contact US</li></Link>
            </ul>
          </div>
  <Component {...pageProps} />
  </>
}
