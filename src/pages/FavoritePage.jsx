import React from "react";
import FavoriteWorkouts from "../components/workouts/FavoriteWorkouts";

const FavoritePage = ({ showWorkout }) => {
  return (
    <div className="favorite-container">
      <FavoriteWorkouts showWorkout={showWorkout} />
    </div>
  );
};

export default FavoritePage;
