import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const history = useHistory();
  const selectedMovie = useSelector((store) => store.selectedMovieDetails);
  const genres = useSelector((store) => store.genres);

  return (
    <div>
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.poster} alt={selectedMovie.title} />
      <div>
        <h3>Genres:</h3>
        {genres.map((genre) => {
          return <h5>{genre.genre}</h5>;
        })}
      </div>
      <p>{selectedMovie.description}</p>
      <button
        onClick={() => {
          history.push(`/`);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default MovieDetails;
