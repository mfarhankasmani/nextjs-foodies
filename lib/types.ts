import type { File } from "node:buffer";

export type Meal = {
  id?: number;
  slug?: string;
  title: string;
  image: string | File;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type SearchParams = { [key: string]: string | string[] | undefined };

export interface ServerSideComponentProp<SlugType, SearchParams = undefined> {
  params: { [key: string]: SlugType };
  searchParams: SearchParams;
}

export interface DBMeal extends Meal {
  slug: string;
  image: string;
}
