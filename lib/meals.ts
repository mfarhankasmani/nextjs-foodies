import sql from "better-sqlite3";
import type { Meal } from "./types";

const db = sql("meals.db");

export const getMeals = () =>
  db.prepare<Meal[], Meal>("SELECT * FROM meals").all();

export const getMeal = (slug: string) =>
  db.prepare<string, Meal>("SELECT * FROM meals WHERE slug = ?").get(slug);
