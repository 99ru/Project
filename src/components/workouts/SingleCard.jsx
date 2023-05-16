import { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./card.css";

const SingleCard = ({ name, image, showWorkout, id }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className="single-card-container">
      <div className="card-image">
        <img src={image} alt={name} className="workout-image" />
        <div
          className={`favorite-icon ${isFavorite ? "favorited" : ""}`}
          onClick={handleToggleFavorite}
        >
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
