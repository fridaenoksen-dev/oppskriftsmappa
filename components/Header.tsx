import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Oppskriftsmappa
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <Link href="/recipes">Oppskrifter</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/about">Om</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
