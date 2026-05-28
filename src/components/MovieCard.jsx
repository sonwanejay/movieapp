import { Heart } from "lucide-react";
import { useMovieContext } from "../context/Moviecontext";
import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (favorite) removeFromFavorite(movie.id);
    else addToFavorite(movie);
  }

  const overlayVariants = {
    hidden: {
      clipPath: "circle(0% at 100% 100%)",
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      clipPath: "circle(120% at 100% 100%)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-gray-900 shadow-xl cursor-pointer text-white"
      initial="hidden"
      whileHover="hover"
    >
      <img
        className="w-full h-138 object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <button
        className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md transition-all hover:bg-black/60 focus:outline-none"
        onClick={onFavoriteClick}
        aria-label="Toggle Favorite"
      >
        <Heart
          size={24}
          fill={favorite ? "#ef4444" : "transparent"}
          color={favorite ? "#ef4444" : "white"}
          className={`transition-transform duration-300 ${favorite ? "scale-110" : "scale-100"}`}
        />
      </button>

      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 z-20 flex flex-col justify-center bg-black/85 backdrop-blur-sm p-6"
      >
        <h4 className="text-lg font-bold mb-2 text-red-500">Overview</h4>
        <p className="text-sm text-gray-200 line-clamp-6 leading-relaxed">
          {movie.overview || "No description available for this movie."}
        </p>
      </motion.div>

      <div className="absolute bottom-0 w-full p-5 bg-gradient-t from-black via-black/80 to-transparent z-30 pointer-events-none">
        <h3 className="text-xl font-bold truncate drop-shadow-md">{movie.title}</h3>
        <p className="text-gray-300 font-medium text-sm mt-1 drop-shadow-md">
          {movie.release_date?.split("-")[0] || "Unknown Year"}
        </p>
      </div>
    </motion.div>
  );
}
