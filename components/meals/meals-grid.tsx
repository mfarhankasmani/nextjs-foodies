import type { FunctionComponent } from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
import type { Meal } from "@/lib/types";



type MealsGridProps = {
  meals: Meal[];
};

const  MealsGrid: FunctionComponent<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
