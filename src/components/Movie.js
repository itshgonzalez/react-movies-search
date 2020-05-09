import React from "react";
import PropTypes from "prop-types";

// Router
import { Link } from "react-router-dom";

export const Movie = ({ id, title, poster }) => (
  <div className="MovieList-item-wrapper">
    <div className="MovieList-item-in">
      <div className="MovieList-item-into">
        <Link className="card" to={`/detail/${id}`}>
          <div className="card-image">
            <img className="image" alt={title} src={poster} />
          </div>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

Movie.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  poster: PropTypes.string,
};
