import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  function handleViewMovieDetails(movie) {
    //setting the movie that is selected in redux store
    dispatch({
      type: "SET_SELECTED",
      payload: movie,
    });

    //setting the genres being held in the redux store
    dispatch({
      type: "FETCH_GENRES",
      payload: movie.id,
    });

    history.push(`/details`);
  }

  //Fetch movies on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      {/* Mapping over and displaying the list of movies */}
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={movie.poster}
                alt={movie.title}
                // Send selected movie details to redux store and route to details page
                onClick={() => {
                  handleViewMovieDetails(movie);
                }}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
