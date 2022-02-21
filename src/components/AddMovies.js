import React, { useState, useContext } from "react";

import { MovieContext } from "../store/MovieContext";

const AddMovies = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const movieCtx = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    const newMovie = {
      name: name,
      price: `$${price}`,
      id: parseInt(Math.random() * 100000),
    };
    movieCtx.addMovie(newMovie);
  };
  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="name"
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
        placeholder="price"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddMovies;
