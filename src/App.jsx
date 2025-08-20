import { useState } from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorite";
import { MovieProvider } from "./context/Moviecontext";
import NavBar from "./components/NavBar";

function App() {
  const movieNumber = 1;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
