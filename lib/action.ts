"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { Meal } from "./types";
import type { File } from "node:buffer";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: string) => {
  return !text || text.trim() === "";
};

const validateMeal = (meal: Meal) => {
  const mealError = [];
  if (isInvalidText(meal.title)) {
    mealError.push("Invalid Title");
  }

  if (isInvalidText(meal.summary)) {
    mealError.push("Invalid Summary");
  }

  if (isInvalidText(meal.instructions)) {
    mealError.push("Invalid Instructions");
  }

  if (isInvalidText(meal.creator)) {
    mealError.push("Invalid Creator");
  }

  if (isInvalidText(meal.creator_email) || !meal.creator_email.includes("@")) {
    mealError.push("Invalid Email Address");
  }

  if (!meal.image || (meal.image as File).size === 0) {
    mealError.push("Invalid Meal image");
  }

  return mealError;
};

export interface State<T = Meal> {
  data?: T;
  message: string | null;
}

export const shareMeal = async (
  prevState: State | void,
  formData: FormData
): Promise<State | void> => {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as unknown as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  const errors = validateMeal(meal);

  if (errors.length > 0) {
    return {
      data: meal,
      message: errors.join("\n"),
    };
  }

  await saveMeal(meal);
  // Update cache in prod
  await revalidatePath("/meals", "layout");
  redirect("/meals");
};
