import { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./card.css";

const SingleCard = ({ name, image, showWorkout, id }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === id);


  const handleAddFavorite = () => {
    console.log('Adding favorite for workout with id:', id);
    const workout = {
      id,
      name,
      image,
    };
    console.log('Workout to add:', workout);
    addFavorite(workout);
  };
  

  return (
    <div className="single-card-container">
      <div className="card-image">
        <img src={image} alt={name} className="workout-image" />
        <div className="favorite-icon" onClick={handleAddFavorite}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div>
      </div>
      <div className="card-content">
        <h3>{name}</h3>
        <button onClick={() => showWorkout(id)} className="card-button">
          Details
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
