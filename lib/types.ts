export type MealSummary = {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
};

export type MealSummaryResponse = {
  meals: MealSummary[] | null;
};
