export type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
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
