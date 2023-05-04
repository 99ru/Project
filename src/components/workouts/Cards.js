import SingleCard from "./SingleCard";
import "./card.css";

const Cards = ({ workouts, showWorkout, genderToggle }) => {
  return (
    <>
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
          genderToggle={genderToggle}
        />
      ))}
    </>
  );
};

export default Cards;