import React from "react";
import FavoriteWorkouts from "../components/workouts/FavoriteWorkouts";

const FavoritePage = ({ showWorkout }) => {
  return (
    <div>
      <FavoriteWorkouts showWorkout={showWorkout} />
    </div>
  );
};

export default FavoritePage;
