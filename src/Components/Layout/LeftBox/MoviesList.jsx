import React from 'react'
import Movie from './Movie';

const MoviesList = ({ movies, onSelectedID }) => {
  return (
    <ul className="list list-movies">
      {movies?.map(movie => (
        <Movie key={movie.imdbID} movie={movie} onSelectedID={onSelectedID} />
      ))}
    </ul>
  );
};

export default MoviesList