import React from "react";

const FilteredWorkout = ({ selectFilter }) => {
  return (
    <>
    <div className="bodypart-buttons">
      <p>BY BODY PART</p>
      <button id="" onClick={selectFilter}>
        All
      </button>
      <button id="shoulders" onClick={selectFilter}>
      Shoulders
      </button>
      <button id="chest" onClick={selectFilter}>
        Chest
      </button>
      <button id="back" onClick={selectFilter}>
        Back
      </button>
      <button id="legs" onClick={selectFilter}>
        Legs
      </button>
      <button id="arms" onClick={selectFilter}>
        Arms
      </button>
      <button id="waist" onClick={selectFilter}>
        Core
      </button>
      <button id="cardio" onClick={selectFilter}>
        Cardio
      </button>
    </div>
    
    <div className="bodypart-buttons">
      <p>BY Equipment</p>
      <button id="body weight" onClick={selectFilter}>
      none
      </button>
      <button id="dumbell" onClick={selectFilter}>
      dumbell
      </button>
      <button id="barbell" onClick={selectFilter}>
      barbell
      </button>
      <button id="resistance" onClick={selectFilter}>
      resistance
      </button>
      <button id="machine" onClick={selectFilter}>
      machine
      </button>
      <button id="cable" onClick={selectFilter}>
      cable
      </button>
      <button id="kettlebell" onClick={selectFilter}>
      kettlebell
      </button>
      <button id="assisted" onClick={selectFilter}>
      assisted
      </button>
    </div>
    </>
  );
};

export default FilteredWorkout;