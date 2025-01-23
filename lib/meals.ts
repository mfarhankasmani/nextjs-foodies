import sql from "better-sqlite3";
import type { DBMeal, Meal } from "./types";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { type File, Buffer } from "node:buffer";

const db = sql("meals.db");

export const getMeals = () =>
  db.prepare<Meal[], Meal>("SELECT * FROM meals").all();

export const getMeal = (slug: string) =>
  db.prepare<string, Meal>("SELECT * FROM meals WHERE slug = ?").get(slug);

export const saveMeal = async (meal: Meal) => {
  const slug = slugify(meal.title, { lower: true });

  const image = meal.image as File;

  const extension = image.name.split(".").pop();
  const imageFileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${imageFileName}`);
  const bufferedImage = await image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(`Saving image failed! ${error.message}`);
    }
  });

  const updatedMeal = {
    ...meal,
    slug,
    instructions: xss(meal.instructions),
    image: `/images/${imageFileName}`,
  };

  return insertMeal(updatedMeal);
};

const insertMeal = (meal: DBMeal) => {
  db.prepare(
    `
    INSERT INTO meals
      (slug, title, image, summary, instructions, creator, creator_email)
      VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
      ) 
    `
  ).run(meal);
};
