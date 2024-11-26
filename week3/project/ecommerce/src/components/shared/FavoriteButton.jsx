import PropTypes from "prop-types";

import { useFavorites } from "../../contexts/FavoritesContext";
import "./FavoriteButton.css";

const FavoriteButton = ({ id }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorited = favorites.includes(id);

    return (
        <button
            className="favorite-button"
            onClick={() => toggleFavorite(id)}
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
            <img
                src={isFavorited ? "/assets/heart-solid.svg" : "/assets/heart-regular.svg"}
                alt={isFavorited ? "Favorited" : "Not Favorited"}
            />
        </button>
    );
};

FavoriteButton.propTypes = {
    id: PropTypes.number.isRequired,
    
};

export default FavoriteButton;
