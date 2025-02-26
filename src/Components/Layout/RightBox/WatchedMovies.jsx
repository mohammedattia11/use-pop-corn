import React from 'react'

const WatchedMovies = ({ movie , onDeleteMovie}) => {
  return (
    <li style={{position : "relative"}}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className='btn-delete' style={{color : '#ffff' , position: "absolute" , top : "1rem" , right : "1rem"}} onClick={() => onDeleteMovie(movie.imdbID)}>&#10005;</button>
      </div>
    </li>
  );
};

export default WatchedMovies