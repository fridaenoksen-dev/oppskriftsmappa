import { notFound } from "next/navigation";
import { getMealById } from "@/lib/api";

type RecipePageProps = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const meal = await getMealById(id);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h1>{meal.strMeal}</h1>
      <p>{meal.strCategory}</p>
      <p>{meal.strArea}</p>
    </>
  );
}
