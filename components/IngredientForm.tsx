import { ingredients } from "@/lib/ingredients";

type IngredientFormProps = {
  selected: string;
};

/**
 * Skjema hvor brukeren velger en ingrediens.
 * Valget sendes som ?ingrediens= i URLen.
 *
 * @param selected ingrediensen som er valgt.
 */
export default function IngredientForm({ selected }: IngredientFormProps) {
  return (
    <form action="">
      <label htmlFor="ingredient">Hva har du i kjøleskapet?</label>
      <select name="ingredient" id="ingredient" defaultValue={selected}>
        {ingredients.map((ingredient) => (
          <option key={ingredient.value} value={ingredient.value}>
            {ingredient.label}
          </option>
        ))}
      </select>
      <button type="submit">Vis oppskrifter</button>
    </form>
  );
}
