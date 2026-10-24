import { notFound } from "next/navigation";
import { getMealById } from "@/lib/api";
import { getIngredients } from "@/lib/meal-utils";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) {
    notFound();
  }

  const ingredients = getIngredients(meal);

  return (
    <>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h1>{meal.strMeal}</h1>
      <p>{meal.strCategory}</p>

      <h2>Ingredienser</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.measure} {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  );
}
