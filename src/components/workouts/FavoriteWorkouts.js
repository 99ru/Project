import React, { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import SingleCard from "./SingleCard";

const FavoriteWorkouts = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map((workout) => (
          <SingleCard key={workout.id} id={workout.id} name={workout.name} image={workout.image} />
        ))
      ) : (
        <p>No favorite workouts found.</p>
      )}
    </div>
  );
};

export default FavoriteWorkouts;
