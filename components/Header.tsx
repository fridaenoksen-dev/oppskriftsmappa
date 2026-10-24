import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Oppskriftsmappa</Link>
      <nav>
        <ul>
          <li>
            <Link href="/recipes">Oppskrifter</Link>
          </li>
          <li>
            <Link href="/about">Om</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
