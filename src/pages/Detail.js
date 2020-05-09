import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

// Import components
import ButtonBackToHome from "../components/ButtonBackToHome";

// Import services
import { getMovie } from "../services/getMovie";

// Import contexts
import MoviesContext from "../context/MoviesContext";

// Import rating
import Stars from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Detail() {
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movies, movieId]);

  const {
    Title,
    Poster,
    Actors,
    imdbRating,
    Plot,
    Year,
    Language,
    Runtime,
  } = movie;

  return (
    <div className="movie-detail">
      <ButtonBackToHome />
      <div className="movie-detail-in">
        <img alt={Title} className="movieDetailPoster" src={Poster} />
        <div className="movieText">
          <div className="movieTextIn">
            <h1>{Title}</h1>
            <p>
              <Stars
                emptySymbol={
                  <FontAwesomeIcon
                    icon={["far", "star"]}
                    size="lg"
                    color="#ffc700"
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    icon={["fas", "star"]}
                    size="lg"
                    color="#ffc700"
                  />
                }
                initialRating={imdbRating / 2}
                readonly
              />
              {Language} / {Runtime} / {Year}
            </p>
            <h3>{Actors}</h3>
            <p>{Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
