import React from "react";

const FilteredWorkout = ({ handleFilterChange }) => {
 
  return (
    <div className="filter-buttons">
      <div className="bodypart-buttons">
        <p className="filter-header">by bodypart</p>
        <button id="" onClick={handleFilterChange}>All</button>
        <button id="shoulders" onClick={handleFilterChange}>Shoulders</button>
        <button id="chest" onClick={handleFilterChange}>Chest</button>
        <button id="back" onClick={handleFilterChange}>Back</button>
        <button id="legs" onClick={handleFilterChange}>Legs</button>
        <button id="arms" onClick={handleFilterChange}>Arms</button>
        <button id="waist" onClick={handleFilterChange}>Core</button>
        <button id="cardio" onClick={handleFilterChange}>Cardio</button>
      </div>
      <div className="bodypart-buttons">
      <p className="filter-header">by equipment</p>
        <button id="body weight" onClick={handleFilterChange}>body weight</button>
        <button id="dumbbell" onClick={handleFilterChange}>dumbbell</button>
        <button id="barbell" onClick={handleFilterChange}>barbell</button>
        <button id="resistance band" onClick={handleFilterChange}>resistance</button>
        <button id="machine" onClick={handleFilterChange}>machine</button>
        <button id="cable" onClick={handleFilterChange}>cable</button>
        <button id="kettlebell" onClick={handleFilterChange}>kettlebell</button>
        <button id="assisted" onClick={handleFilterChange}>assisted</button>
      </div>
      </div>
  );
};

export default FilteredWorkout;