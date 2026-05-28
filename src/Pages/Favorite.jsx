import { useMovieContext } from "../context/Moviecontext";
import MovieCard from "../components/MovieCard";
import { motion } from "framer-motion";
import { Film } from "lucide-react";

export default function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto px-4 py-8"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-foreground/10 pb-4">
          Your Favorites
        </h2>

        {/* Responsive Grid: 1 col on mobile, 2 on small tablets, 3 on tablets, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </motion.div>
    );
  }

  // Beautiful Empty State
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center px-4 bg-background"
    >
      <div className="bg-foreground/5 p-6 rounded-full mb-6 shadow-inner border border-foreground/10">
        <Film size={64} className="text-foreground/40" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        No Favorite Movies Yet
      </h2>
      <p className="text-foreground/60 text-lg max-w-md">
        Start adding movies to your favorites by clicking the heart icon, and they will appear here.
      </p>
    </motion.div>
  );
}
