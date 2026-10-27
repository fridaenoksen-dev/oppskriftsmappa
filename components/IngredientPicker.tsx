import Link from "next/link";
import { ingredients } from "@/lib/ingredients";

type IngredientPickerProps = {
  selected: string;
};

/**
 * Viser ingrediensene som lenker brukeren kan klikke mellom.
 * Den valgte ingrediensen er markert med aria-current.
 * @param selected ingrediensen som er valgt.
 */
export default function IngredientPicker({ selected }: IngredientPickerProps) {
  return (
    <nav aria-label="Velg ingrediens">
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.value}>
            <Link
              href={`/recipes?ingredient=${ingredient.value}`}
              aria-current={ingredient.value === selected ? "true" : undefined}
            >
              {ingredient.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
