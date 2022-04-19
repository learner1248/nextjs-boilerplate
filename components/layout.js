import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
//import { useRouter } from "next/router";
import ActiveLink from '../components/ActiveLink';

const name = "cfi";
export const siteTitle = "Next.js Boilerplate";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Next.js boilerplate" />
        <meta property="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h2>Home</h2>
        ) : (
          <Link href="/">
            <a>Home</a>
          </Link>
        )}
      </header>
      <nav>
        <ActiveLink href="/">Anasayfa</ActiveLink>
        <ActiveLink href="/blog">Blog</ActiveLink>
        <ActiveLink href="/about">Hakkimizda</ActiveLink>
        <ActiveLink href="/contact">Iletisim</ActiveLink>
      </nav>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
