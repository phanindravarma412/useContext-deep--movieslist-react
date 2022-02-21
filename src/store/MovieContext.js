import React, { createContext, useReducer } from "react";

export const MovieContext = createContext({
  movies: [],
  addMovie: (movie) => {},
});

const initialMovies = [
  {
    name: "Harry Potter",
    price: "$10",
    id: 23124,
  },
  {
    name: "Game of thrones",
    price: "$10",
    id: 255614,
  },
  {
    name: "Inception",
    price: "$10",
    id: 23111,
  },
];

const movieReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedMovies = state.concat(action.movie);
    return updatedMovies;
  }

  return initialMovies;
};

export const MovieProvider = (props) => {
  const [movieState, movieAction] = useReducer(movieReducer, initialMovies);

  console.log("Inside provider");
  console.log(movieState);

  const addMovieToList = (movie) => {
    console.log("Add Movie to list function was called");
    movieAction({ type: "ADD", movie: movie });
  };

  const movieContext = {
    movies: movieState,
    addMovie: addMovieToList,
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
};
