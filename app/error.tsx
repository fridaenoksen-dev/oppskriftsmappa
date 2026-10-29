"use client";

import Link from "next/link";

/**
 * Vises når noe går galt. Eksempelvis når en oppskrift ikke kan hentes.
 */

export default function Error() {
  return (
    <>
      <h1>Her var det noe som skjedde gitt</h1>
      <p>
        Vi klarte ikke å hente frem oppskriftene akkurat nå. Prøv igjen om litt.
      </p>
      <Link href="/">Gå tilbake til forsiden</Link>
    </>
  );
}
