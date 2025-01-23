import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";
import { FunctionComponent } from "react";
import { Meal } from "@/lib/types";

const MealItem: FunctionComponent<Meal> = ({
  title,
  slug,
  image,
  summary,
  creator,
}) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={(image as string)} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;