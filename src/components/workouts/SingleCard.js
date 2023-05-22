import { useContext } from "react";
import { FavoritesContext } from "../../FavoritesContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./card.css";

const SingleCard = ({ name, image, showWorkout, id }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === id);

  const MAX_NAME_LENGTH = 35;
  const truncatedName =
  name.length > MAX_NAME_LENGTH
    ? name.substring(0, MAX_NAME_LENGTH) + "..."
    : name;

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

        <div className="favorite-icon" onClick={handleToggleFavorite}>
          {isFavorite ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
      </div>

      <div className="card-content">
       <h4 onClick={() => showWorkout(id)} title={name}>
          {truncatedName}
        </h4>
        <button onClick={() => showWorkout(id)} className="card-button">
          Show details
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
