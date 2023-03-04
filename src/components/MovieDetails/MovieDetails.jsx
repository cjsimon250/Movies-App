import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MovieDetails() {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((store) => store.selectedMovieDetails);
  return (
    <div>
      <h1>{selectedMovie.title}</h1>
      <img src={selectedMovie.poster} alt={selectedMovie.title} />
      <p>{selectedMovie.description}</p>
    </div>
  );
}

export default MovieDetails;
