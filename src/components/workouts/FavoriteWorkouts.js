import React, { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import SingleCard from "./SingleCard";

const FavoriteWorkouts = ({ showWorkout }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <div className="main-content">
        {favorites.length > 0 ? (
          <>
            {favorites.map((workout) => (
              <SingleCard
                key={workout.id}
                id={workout.id}
                name={workout.name}
                image={workout.image}
                showWorkout={showWorkout}
              />
            ))}
          </>
        ) : (
          <h1>Your favorite list is empty</h1>
        )}
      </div>
    </>
  );
};

export default FavoriteWorkouts;
