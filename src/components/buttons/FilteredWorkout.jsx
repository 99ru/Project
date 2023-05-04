import React from "react";

const FilteredWorkout = ({ selectFilter }) => {
  return (
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
      <button id="core" onClick={selectFilter}>
        Core
      </button>
      <button id="cardio" onClick={selectFilter}>
        Cardio
      </button>
    </div>
  );
};

export default FilteredWorkout;
