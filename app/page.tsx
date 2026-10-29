import Link from "next/link";
import IngredientPicker from "@/components/IngredientPicker";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Hva har du hjemme?</h1>
      <p>
        Velg en ingrediens du har liggende og få forslag til middager du kan
        lage med det.
      </p>

      <IngredientPicker selected="" />

      <p>Oppskriftene er hentet fra TheMealDB og er på engelsk.</p>
    </>
  );
}
