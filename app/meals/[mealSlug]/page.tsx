import Image from "next/image";
import classes from "./page.module.css";
import { FunctionComponent } from "react";
import { getMeal } from "@/lib/meals";
import { ServerSideComponentProp } from "@/lib/types";
import { notFound } from "next/navigation";

const MealsDetails: FunctionComponent<
  ServerSideComponentProp<string>
> = async ({ params }) => {
  const { mealSlug } = await params;

  const meal = getMeal(mealSlug);
  if (!meal) {
    notFound();
  }

  const { image, title, creator_email, creator, summary, instructions } = meal!;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} fill alt={title} />
        </div>
        <div className={classes.headrText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions}>{instructions}</p>
      </main>
    </>
  );
};

export default MealsDetails;
