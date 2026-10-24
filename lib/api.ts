import { MealSummary, MealSummaryResponse } from "./types";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Henter retter som inneholder en konkret ingrediens.
 * @param ingredient Ingrediensen i API-format.
 * @returns En liste med retter eller en tom liste om den ikke finner noen treff.
 */
export async function getMealsByIngredient(
  ingredient: string,
): Promise<MealSummary[]> {
  const url = `${BASE_URL}/filter.php?i=${ingredient}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Kunne ikke hente oppskriftene");
  }

  const data: MealSummaryResponse = await response.json();
  return data.meals ?? [];
}
