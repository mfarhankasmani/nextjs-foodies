"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { Meal } from "./types";
import type { File } from "node:buffer";

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

type ErrorState = void | { message: string | null };

export const shareMeal = async (
  _prevState: ErrorState,
  formData: FormData
): Promise<ErrorState> => {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as unknown as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  const validate = validateMeal(meal);

  if (validate.length > 0) {
    return {
      message: validate.join("\n"),
    };
  }

  await saveMeal(meal);
  redirect("/meals");
};
