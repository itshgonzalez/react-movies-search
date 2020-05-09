import React from "react";
import PropTypes from "prop-types";

// Import components
import { Movie } from "./Movie";

export const MoviesList = ({ movies }) => (
  <div className="MoviesList">
    {movies.map((movie) => (
      <Movie
        id={movie.imdbID}
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.array,
};
