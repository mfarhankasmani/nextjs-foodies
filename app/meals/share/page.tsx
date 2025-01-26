"use client";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/action";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { Meal } from "@/lib/types";
import { useActionState } from "react";

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });
  const { creator, creator_email, image, instructions, summary, title } =
    (state?.data as Meal) || {};

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                required={false}
                defaultValue={creator}
              />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                required={false}
                defaultValue={creator_email}
              />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required={false}
              defaultValue={title}
            />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              required={false}
              defaultValue={summary}
            />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required={false}
              defaultValue={instructions}
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" defaultImage={image} />
          {state?.message && <p className={classes.error}>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
