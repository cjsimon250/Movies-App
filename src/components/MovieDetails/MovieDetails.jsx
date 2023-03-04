import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function MovieDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedMovie = useSelector((store) => store.selectedMovieDetails);

  return (
    <div>
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.poster} alt={selectedMovie.title} />
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
