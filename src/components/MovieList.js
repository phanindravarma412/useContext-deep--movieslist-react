import React, { Fragment, useContext } from "react";

import Movie from "./Movie";
import { MovieContext } from "../store/MovieContext";

const MovieList = () => {
  const movieCtx = useContext(MovieContext);
  const moviesList = movieCtx.movies.map((movie) => (
    <Movie movie={movie} key={movie.id} />
  ));
  return (
    <Fragment>
      <h1>{moviesList}</h1>
    </Fragment>
  );
};

export default MovieList;
