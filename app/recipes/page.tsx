import { getMealsByIngredient } from "@/lib/api";

export default async function AllRecipesPage() {
  const meals = await getMealsByIngredient("chicken");
  return (
    <>
      <h1>Se alle oppskriftene</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </>
  );
}
