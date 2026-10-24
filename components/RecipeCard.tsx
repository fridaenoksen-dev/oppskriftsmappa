import Link from "next/link";
import { MealSummary } from "@/lib/types";

type RecipeCardProps = {
  meal: MealSummary;
};

export default function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${meal.idMeal}`}>
      <img src={meal.strMealThumb} alt="" />
      <h2>{meal.strMeal}</h2>
    </Link>
  );
}
