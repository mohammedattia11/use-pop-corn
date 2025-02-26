import React from "react";
import WatchedMovies from "./WatchedMovies";

const WatchedMoviesList = ({ watched, setWatchedMovie }) => {
  const handleDeleteMovie = (id) => {
    setWatchedMovie(watched => watched.filter(movie => movie.imdbID !== id));
  };
  return (
    <ul className="list">
      {watched.map(movie => (
        <WatchedMovies movie={movie} key={movie.imdbID} onDeleteMovie = {handleDeleteMovie} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
