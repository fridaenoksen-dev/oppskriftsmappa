import { IngredientWithMeasure, MealDetail } from "./types";

/**
 * Samler ingrediensene og mengdene til en rett i én liste.
 * Hopper over felter som er tomme eller mangler.
 * @param meal Retten med alle detaljer.
 * @returns En liste med ingredienser og mengder.
 */
export function getIngredients(meal: MealDetail): IngredientWithMeasure[] {
  const ingrediens: IngredientWithMeasure[] = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (name && name.trim()) {
      ingrediens.push({
        name: name.trim(),
        measure: measure?.trim() ?? "",
      });
    }
  }

  return ingrediens;
}

/**
 * Deler instruksjonene opp i avsnitt ved linjeskift.
 * Fjerner de tomme linjene og mellomrommene rundt teksten.
 * @param instructions instruksjonene som en lang tekst.
 * @returns en lsite med avsnitt.
 */
export function getInstructionParagraphs(instructions: string): string[] {
  return instructions
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
}
