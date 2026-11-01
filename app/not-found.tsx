import Link from "next/link";

/**
 * Vises når en side eller oppskrift ikke finnes.
 */
export default function NotFound() {
  return (
    <>
      <h1>Kunne ikke finne siden</h1>
      <p>
        Siden eller oppskriften du leter etter finnes ikke. Kanskje er adressen
        kommet inn feil?
      </p>
      <Link href="/recipes">Finn en middag</Link>
    </>
  );
}
