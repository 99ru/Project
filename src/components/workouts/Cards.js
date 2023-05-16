import SingleCard from "./SingleCard";
import React from "react";
import "./card.css";

const Cards = ({ workouts, showWorkout, }) => {
  return (
    <div className="main-content">
      {workouts.map((exercise) => (
        <SingleCard
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}
          image={exercise.image}
          gif={exercise.gif}
          bodyParts={exercise.bodyParts}
          equipment={exercise.equipment}
          primaryMuscle={exercise.primaryMuscle}
          showWorkout={showWorkout}
        />
      ))}
    </div>
  );
};

export default Cards;
