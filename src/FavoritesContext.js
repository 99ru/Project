import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const FavoritesProvider = (props) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavorite = (workout) => {
    setFavorites((prevFavorites) => {
      const existingItem = prevFavorites.find(
        (favoriteItem) => favoriteItem.id === workout.id
      );

      let updatedFavorites;
      if (existingItem) {
        // If the workout is already in favorites, do nothing
        updatedFavorites = prevFavorites;
      } else {
        // If the workout isn't in favorites, add it
        updatedFavorites = [...prevFavorites, workout];
      }

      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  };

  const removeFavorite = (workoutId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favoriteItem) => favoriteItem.id !== workoutId
      );

      saveFavoritesToLocalStorage(updatedFavorites);
      return updatedFavorites;
    });
  };

  useEffect(() => {
    /* console.log("Current favorite items:", favorites); */
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};
