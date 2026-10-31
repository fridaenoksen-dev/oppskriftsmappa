import { notFound } from "next/navigation";
import { getMealById } from "@/lib/api";
import { getIngredients, getInstructionParagraphs } from "@/lib/meal-utils";
import styles from "./page.module.css";

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
  const paragraphs = getInstructionParagraphs(meal.strInstructions);

  return (
    <article>
      <div className={styles.top}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className={styles.image}
        />
        <div>
          {" "}
          <h1 lang="en">{meal.strMeal}</h1>
          <p className={styles.category} lang="en">
            {meal.strCategory}
          </p>
        </div>
      </div>

      <div className={styles.columns}>
        <section>
          <h2 className={styles.heading}>Ingredienser</h2>
          <ul className={styles.list} lang="en">
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.measure} {ingredient.name}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles.heading}>Slik gjør du</h2>
          <ol className={styles.list} lang="en">
            {paragraphs.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
