import React, { useEffect, useState } from "react";
import StartRating from "../../../StartRating";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";

const MovieDetails = ({
  selectedID,
  onResetID,
  apiKey,
  setWatchedMovie,
  watched,
}) => {
  const [error, setError] = useState("");
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedID);
  console.log(isWatched);

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedID}`
          );
          if (!res.ok)
            throw new Error("there was a problem while fetching the data");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovie(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedID, apiKey]
  );

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAddMovie = () => {
    const addedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    setWatchedMovie(addedMovie);
    onResetID();
  };

  return (
    <div className="details">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <header>
            <button className="btn-back" onClick={() => onResetID(null)}>
              &larr;
            </button>
            <img src={poster} alt={`${title} poster`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>⭐️ {imdbRating} IMDb Rating</p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <StartRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
              ) : (
                <p style={{ textAlign: "center" }}>
                  Added to watched movies list 🎉
                </p>
              )}
            </div>
            {userRating > 0 && (
              <button className="btn-add" onClick={handleAddMovie}>
                + Add to list
              </button>
            )}
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring : {actors}</p>
            <p>Directed by : {director}</p>
          </section>
        </>
      )}

      {/* <p>{selectedID}</p> */}
    </div>
  );
};

export default MovieDetails;
