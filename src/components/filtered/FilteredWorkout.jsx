import React from "react";

const FilteredWorkout = ({ handleFilterChange }) => {
  const bodyparts = ["All", "Shoulders", "Chest", "Back", "Legs", "Arms", "Core", "Cardio"];
  const equipment = ["body weight", "dumbbell", "barbell", "band", "machine", "cable", "kettlebell", "assisted"];
  
  const renderButtons = (items) => 
    items.map(item => (
      <button key={item} id={item.toLowerCase()} onClick={handleFilterChange}>
        {item}
      </button>
    ));
 
  return (
    <div className="filter-buttons">
      <div className="bodypart-buttons">
        <p className="filter-header">by bodypart</p>
        {renderButtons(bodyparts)}
      </div>
      <div className="bodypart-buttons">
        <p className="filter-header">by equipment</p>
        {renderButtons(equipment)}
      </div>
    </div>
  );
};

export default FilteredWorkout;
