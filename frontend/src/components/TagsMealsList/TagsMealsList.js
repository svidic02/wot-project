import React from "react";
import Title from "../Title/Title";
import classes from "./tagsMealsList.module.css";

export default function TagsMealsList({ tags, meals }) {
  return (
    <>
      {tags ? (
        <div className={classes.list}>
          <Title title="Tags" />
          <p className={classes.item}>{tags.length}</p>
          {tags.map((tag) => (
            <p className={classes.item}>{tag.name}</p>
          ))}
        </div>
      ) : (
        <div className={classes.list}>
          <Title title="Meals" />
          <p className={classes.item}>{meals.length}</p>
          {meals.map((meal) => (
            <p className={classes.item}>{meal.name}</p>
          ))}
        </div>
      )}
    </>
  );
}
