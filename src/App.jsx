import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./Pages/Favorite";
import { MovieProvider } from "./context/Moviecontext";
import NavBar from "./components/NavBar";

function App() {
  return (<div className="dark bg-background min-h-screen" >
    <MovieProvider>
      <main className="bg-background p-4">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  </div>);
}

export default App;
