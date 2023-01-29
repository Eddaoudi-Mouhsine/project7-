import { createContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [Movies, setMovies] = useState([]);
  const [FavoriteMovie, setFavoriteMovieState] = useState([]);
  const handleChange = async (e) => {
    setInput(e.target.value);
  };
  const handleClick = async (e) => {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${input}`
    );
    setMovies([...res.data]);
    console.log(Movies);
  };
  const handleFavorite = async (e, movieObj) => {
    e.preventDefault();
    console.log("inside handleFavorite");
    await axios.post("/favoriteMovie", {
      ...FavoriteMovie,
      name: movieObj.show.name,
      rating: movieObj.score,
      imgUrl: movieObj.show.image.medium,
      schedule: movieObj.show.schedule.days[0],
      source: movieObj.show.officialSite,
      status: "Favorited",
    });
  };
  const getFavoriteMovie = async () => {
    const res = await axios.get("/favoriteMovie");
    setFavoriteMovieState(res.data);
  };
  const handleKeyUp = async (e) => {
    setInput(e.target.value);

    const res = await axios.get(`/favoriteMovie/${input}`);
    setFavoriteMovieState(res.data);
  };
  const remove = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const res = await axios.delete("/favoriteMovie/" + id);
    // setFavoriteMovieState([...FavoriteMovie.filter((obj) => obj.id != id)]);
    setFavoriteMovieState(res.data);
  };
  return (
    <MovieContext.Provider
      value={{
        Movies,
        input,
        FavoriteMovie,
        getFavoriteMovie,
        handleClick,
        handleChange,
        handleFavorite,
        handleKeyUp,
        remove,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
