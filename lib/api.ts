import {
  MealDetail,
  MealSummary,
  MealSummaryResponse,
  MealDetailResponse,
} from "./types";

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

/**
 * Henter frem én rett med detaljene fra ID.
 * @param id ID-en til retten.
 * @returns Retten eller null hvis den ikke eksisterer.
 */
export async function getMealById(id: string): Promise<MealDetail | null> {
  const url = `${BASE_URL}/lookup.php?i=${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Fant ikke oppskriften");
  }

  const data: MealDetailResponse = await response.json();
  return data.meals?.[0] ?? null;
}
