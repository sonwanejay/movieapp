import { Heart } from "lucide-react";
import { useMovieContext } from "../context/Moviecontext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorite(movie.id);
    else addToFavorite(movie);
  }

  return (
    <div className="border rounded-4xl overflow-hidden text-foreground">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}  `}
            onClick={onFavoriteClick}
          >{isFavorite(movie.id) ?
            (<Heart fill="red" stroke="red" />)
            : (<Heart />)
            }
          </button>
        </div>
      </div>

      <div className="">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
