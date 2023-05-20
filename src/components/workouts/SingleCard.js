import { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./card.css";

const SingleCard = ({ name, image, showWorkout, id }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      const workout = {
        id,
        name,
        image,
      };
      addFavorite(workout);
    }
  };

  return (
    <div className="single-card-container">
      <div className="card-image">
        <img src={image} alt={name} className="workout-image" />
       
        {/* <div className="favorite-icon" onClick={handleToggleFavorite}>
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </div> */}
      </div>

      <div className="card-content">
        <h4 onClick={() => showWorkout(id)}>{name}</h4>

        <button onClick={() => showWorkout(id)} className="card-button">
          Details
        </button>
        <button onClick={handleToggleFavorite} className="card-button">
          Favorite
        </button>
      </div>

    </div>
  );
};

export default SingleCard;
