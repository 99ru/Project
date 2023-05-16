import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (workoutId) => {
    setFavorites((prevFavorites) => [...prevFavorites, workoutId]);
  };

  const removeFavorite = (workoutId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== workoutId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
