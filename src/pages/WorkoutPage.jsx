import React from "react";
import Hero from "../components/hero/Hero";
import Cards from "../components/workouts/Cards";

const WorkoutsPage = ({ selectFilter, currentWorkouts, showWorkout }) => {
  return (
    <div /* className="main-content" */>
      <Hero selectFilter={selectFilter} />
      <div className="main-content">
      <Cards workouts={currentWorkouts} showWorkout={showWorkout} />
      </div>
      
    </div>
  );
};

export default WorkoutsPage;
