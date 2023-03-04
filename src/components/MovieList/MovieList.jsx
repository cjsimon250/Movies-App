import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";
// MUI
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

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
      <Typography variant="h2" color="#e8e8e8">
        MovieList
      </Typography>
      {/* Mapping over and displaying the list of movies */}
      <Box
        className="movies"
        borderRadius="15px"
        sx={{ width: "90wv", minHeight: 829, m: "auto", p: 2 }}
      >
        <Masonry columns={4} spacing={2}>
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <Typography variant="h6" color="#e8e8e8">
                  {movie.title}
                </Typography>
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
        </Masonry>
      </Box>
    </main>
  );
}

export default MovieList;
