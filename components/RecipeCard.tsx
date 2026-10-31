import Link from "next/link";
import { MealSummary } from "@/lib/types";
import styles from "./RecipeCard.module.css";

type RecipeCardProps = {
  meal: MealSummary;
};

export default function RecipeCard({ meal }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${meal.idMeal}`} className={styles.card}>
      <img src={meal.strMealThumb} alt="" className={styles.image} />
      <h2 className={styles.title} lang="en">
        {meal.strMeal}
      </h2>
    </Link>
  );
}
