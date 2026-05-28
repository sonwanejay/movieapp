import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      className="flex items-center justify-between mx-auto p-3 w-full max-w-7xl bg-background text-foreground rounded-full border border-foreground/20 shadow-lg"
    >
      <div className="flex items-center space-x-3">
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center justify-center h-12 w-12 rounded-full bg-foreground border border-muted-foreground"
        >
          <svg
            className="w-7 h-7 text-background"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12c0 5.53 4.47 10 10 10s10-4.47 10-10C22 6.47 17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.29.31-2.51.85-3.6L16.2 16.6C15.11 17.14 13.89 17.45 12.6 17.45zM12 6.55c1.29 0 2.51.31 3.6.85l-11.35 11.35C5.14 17.14 6.36 17.45 7.65 17.45h4.35V6.55zM12 17.45c1.29 0 2.51-.31 3.6-.85l-11.35-11.35C5.14 6.86 6.36 6.55 7.65 6.55H12v10.9z" />
          </svg>
        </motion.div>

        <Link to="/" className="text-2xl font-bold text-foreground leading-tight">
          Movie App
        </Link>
      </div>

      <div className="flex items-center space-x-8 font-medium">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-foreground opacity-90 hover:opacity-100 transition-opacity">
            Home
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/favorites" className="text-foreground opacity-90 hover:opacity-100 transition-opacity">
            Favorites
          </Link>
        </motion.div>
      </div>

      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center h-11 px-5 py-2 bg-foreground rounded-full border border-background shadow-inner text-background cursor-default"
        >
          NekoMovies
        </motion.div>
      </div>
    </motion.nav>
  );
}
