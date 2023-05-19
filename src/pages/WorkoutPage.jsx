import React from "react";
import Hero from "../components/hero/Hero";
import Cards from "../components/workouts/Cards";

const WorkoutsPage = ({ selectFilter, currentWorkouts, showWorkout }) => {
  return (
    <div>
      <Hero selectFilter={selectFilter} />
      <Cards workouts={currentWorkouts} showWorkout={showWorkout} />
    </div>
  );
};

export default WorkoutsPage;
