export type MealSummary = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
};

export type MealSummaryResponse = {
  meals: MealSummary[] | null;
};

export type MealDetail = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  [key: string]: string | null;
};

export type MealDetailResponse = {
  meals: MealDetail[] | null;
};

export type IngredientWithMeasure = {
  name: string;
  measure: string;
};
