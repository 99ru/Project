import SingleCard from "./SingleCard";
import React from "react";
import "./card.css";

const Cards = ({ workouts, showWorkout }) => {
  return (
      <>
        {workouts.map((exercise) => (
          <SingleCard
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            image={exercise.image}
            video={exercise.video}
            bodyParts={exercise.bodyParts}
            equipment={exercise.equipment}
            primaryMuscle={exercise.primaryMuscle}
            showWorkout={showWorkout}
          />
        ))}
      </>
  );
};

export default Cards;
