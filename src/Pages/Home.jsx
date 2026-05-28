import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import { Search, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to Load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      window.location.reload()
      return
    }
    if (loading) return
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)

    } catch (err) {
      console.log(err);
      setError("Failed to search Movies...")
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="home">
      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-8"
      >
        <div className="relative flex items-center w-full group">
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full py-4 pl-6 pr-36 text-lg transition-all border shadow-lg bg-background text-foreground rounded-full border-foreground/20 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 focus:outline-none placeholder:text-foreground/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bottom-2 flex items-center gap-2 px-6 font-semibold text-white transition-all bg-red-500 rounded-full hover:bg-red-600 active:scale-95 focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            <Search size={18} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="flex items-center w-full gap-2 px-4 py-3 mt-4 text-red-500 bg-red-500/10 rounded-2xl border border-red-500/20"
            >
              <AlertCircle size={20} className="shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>      {error && <div className="error-massage">{error}</div>}


      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
