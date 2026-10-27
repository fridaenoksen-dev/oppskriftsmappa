import { getMealsByIngredient } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";
import IngredientForm from "@/components/IngredientForm";
import IngredientPicker from "@/components/IngredientPicker";

type RecipesPageProps = {
  searchParams: Promise<{ ingredient?: string }>;
};
/**
 * Viser frem retten som et klikkbart kort med navn og bilde.
 * Bildet har en tom alt tekst siden navnet står i overskriften.
 * Kortet linker videre til detaljsiden for retten.
 * @param meal Retten som vises med ID, navn og bilde.
 */
export default async function AllRecipesPage({
  searchParams,
}: RecipesPageProps) {
  const { ingredient } = await searchParams;
  const selected = ingredient ?? "chicken";
  const meals = await getMealsByIngredient(selected);
  return (
    <>
      <h1>Se alle oppskriftene</h1>
      <p>
        Velg blant femten vanlige ting du kanskje har i kjøleskapet, og finn
        middager som bruker akkurat den ingrediensen.
      </p>
      <IngredientPicker selected={selected} />

      {meals.length === 0 ? (
        <p>Fant ingen oppskrifter med denne ingrediensen. Prøv en annen.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <RecipeCard meal={meal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
