import { getMealsByIngredient } from "@/lib/api";
import RecipeCard from "@/components/RecipeCard";

/**
 * Viser frem retten som et klikkbart kort med navn og bilde.
 * Bildet har en tom alt tekst siden navnet står i overskriften.
 * Kortet linker videre til detaljsiden for retten.
 * @param meal Retten som vises med ID, navn og bilde.
 */
export default async function AllRecipesPage() {
  const meals = await getMealsByIngredient("chicken");
  return (
    <>
      <h1>Se alle oppskriftene</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <RecipeCard meal={meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
