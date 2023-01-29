import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import FavoriteMovies from "./Components/FavoriteMovies";
import { MovieProvider } from "./Components/MovieContext";
import MovieIndex from "./Components/MovieIndex";

function App() {
  return (
    <div className="bg-[#E2E5E9] w-auto h-screen flex ">
      <MovieProvider>
        <nav className="w-60 h-screen bg-[#1A1A21] flex flex-col justify-start ">
          <Link
            className="p-4 ml-10 text-[#E2E5E9] font-bold mt-20 hover:text-white"
            to="/movideIndex"
          >
            Browse Movies
          </Link>
          <Link
            className="p-4 ml-10 text-[#E2E5E9] font-bold hover:text-white"
            to="/FavoriteMovies"
          >
            Favorite Movies
          </Link>
        </nav>
        <Routes>
          <Route path="/movideIndex" element={<MovieIndex />} />;
          <Route path="/FavoriteMovies" element={<FavoriteMovies />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
