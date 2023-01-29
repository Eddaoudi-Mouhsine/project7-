import React, { useContext, useEffect } from "react";
import MovieContext from "./MovieContext";

const FavoriteMovies = () => {
  const { FavoriteMovie, getFavoriteMovie, handleChange, handleKeyUp, remove } =
    useContext(MovieContext);
  useEffect(() => {
    getFavoriteMovie();
  }, []);
  console.log(FavoriteMovie);
  return (
    <div className="w-screen ">
      <div className="flex flex-col  ">
        {" "}
        <input
          className="mx-auto mb-2 mt-8  p-1 rounded-md pl-6"
          type="text"
          onKeyUp={handleKeyUp}
        ></input>
      </div>

      <div class="flex justify-evenly flex-wrap space-y-4  ">
        {FavoriteMovie.map((movie) => (
          <div className="bg-white  shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg p-4 h-60 mx-auto"
              src={movie.imgUrl}
              alt="product image"
            />
            <div class="px-5 pb-5">
              <a href="#">
                <h4 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white text-center">
                  {movie.name}
                </h4>
              </a>
              <div class="flex flex-col  justify-between items-center">
                <span>
                  <span className="font-bold text-[#7B8186]">Score:</span>{" "}
                  {movie.rating}
                </span>
                <span>
                  <span className="font-bold text-[#7B8186]">Schedules:</span> :
                  {movie.schedule}
                </span>
                <span className="text-center">
                  <span className="font-bold text-[#7B8186]">Status :</span>
                  {movie.status}
                </span>
                <span className="text-center">
                  <span className="font-bold text-[#7B8186]">
                    Streaming Service :
                  </span>
                  {movie.source}
                </span>

                <button
                  onClick={(e) => remove(e, movie.id)}
                  class="text-white bg-[#787176]  p-1 mt-2 rounded-md hover:bg-[#1A1A21]  "
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
