import React from "react";

const FilteredWorkout = ({ selectFilter }) => {
  const handleBodyPartClick = (e) => {
    selectFilter("bodyPart", e.target.id);
  };

  const handleEquipmentClick = (e) => {
    selectFilter("equipment", e.target.id);
  };

  return (
    <>
      <div className="bodypart-buttons">
        <p>BY BODY PART</p>
        <button id="" onClick={handleBodyPartClick}>All</button>
        <button id="shoulders" onClick={handleBodyPartClick}>Shoulders</button>
        <button id="chest" onClick={handleBodyPartClick}>Chest</button>
        <button id="back" onClick={handleBodyPartClick}>Back</button>
        <button id="legs" onClick={handleBodyPartClick}>Legs</button>
        <button id="arms" onClick={handleBodyPartClick}>Arms</button>
        <button id="waist" onClick={handleBodyPartClick}>Core</button>
        <button id="cardio" onClick={handleBodyPartClick}>Cardio</button>
      </div>

      <div className="bodypart-buttons">
        <p>BY Equipment</p>
        <button id="body weight" onClick={handleEquipmentClick}>body weight</button>
        <button id="dumbell" onClick={handleEquipmentClick}>dumbell</button>
        <button id="barbell" onClick={handleEquipmentClick}>barbell</button>
        <button id="resistance" onClick={handleEquipmentClick}>resistance</button>
        <button id="machine" onClick={handleEquipmentClick}>machine</button>
        <button id="cable" onClick={handleEquipmentClick}>cable</button>
        <button id="kettlebell" onClick={handleEquipmentClick}>kettlebell</button>
        <button id="assisted" onClick={handleEquipmentClick}>assisted</button>
      </div>
    </>
  );
};

export default FilteredWorkout;
