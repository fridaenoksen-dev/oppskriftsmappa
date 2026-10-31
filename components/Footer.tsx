import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Oppskriftene er hentet fra{" "}
        <a href="https://www.themealdb.com">TheMealDB</a>
      </p>
      <p>
        Laget av{" "}
        <a href="https://www.linkedin.no/fridaenoksen">Frida Enoksen</a> som en
        skoleoppgave på Gokstad Akademiet
      </p>
    </footer>
  );
}
