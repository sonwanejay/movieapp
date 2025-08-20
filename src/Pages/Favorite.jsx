import "../css/Favorites.css";
import { useMovieContext } from "../context/Moviecontext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favroite-emty">
      <h2>No Favroite Movies Yet</h2>
      <p>Start adding Movies to your favroite and they will appear here</p>
    </div>
  );
}

export default Favorites;
