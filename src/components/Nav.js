import React, { useContext } from "react";

import { MovieContext } from "../store/MovieContext";

const Nav = () => {
  const movieCtx = useContext(MovieContext);
  console.log(movieCtx);
  return (
    <div>
      <h3>Phanindra</h3>
      <p>List of Movies : {movieCtx.movies.length} </p>
    </div>
  );
};

export default Nav;
