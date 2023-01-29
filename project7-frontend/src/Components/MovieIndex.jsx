import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "./MovieContext";

const MovieIndex = () => {
  const {
    Movies,
    handleClick,
    handleChange,
    input,
    handleFavorite,
    FavoriteMovie,
  } = useContext(MovieContext);
  return (
    <div className="w-screen ">
      <div className="flex flex-col  ">
        {" "}
        <input
          className="mx-auto mb-2 mt-8  p-1 rounded-md pl-6"
          type="text"
          onChange={handleChange}
        ></input>
        <button
          className="bg-[#1A1A21] w-20 mx-auto text-white rounded-md"
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      <div class="flex justify-evenly flex-wrap space-y-4  ">
        {Movies.map((movie) => (
          <div className="bg-white  shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg p-4 h-60 mx-auto"
              src={movie.show.image.medium}
              alt="product image"
            />
            <div class="px-5 pb-5">
              <a href="#">
                <h4 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white text-center">
                  {movie.show.name}
                </h4>
              </a>
              <div class="flex flex-col  justify-between items-center">
                <span>
                  <span className="font-bold text-[#7B8186]">Score:</span>{" "}
                  {movie.score}
                </span>
                <span>
                  <span className="font-bold text-[#7B8186]">Schedules:</span> :
                  {movie.show.schedule.days}
                </span>
                <span className="text-center">
                  <span className="font-bold text-[#7B8186]">
                    Streaming Service :
                  </span>
                  {movie.show.officialSite}
                </span>

                <button
                  onClick={(e) => handleFavorite(e, movie)}
                  class="text-white bg-[#787176]  p-1 mt-2 rounded-md hover:bg-[#1A1A21]  "
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieIndex;
