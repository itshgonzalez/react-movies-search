import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { MoviesList } from "../components/MoviesList";

import MoviesContext from "../context/MoviesContext";
import { getMovie } from "../services/getMovie";

import ButtonBackToHome from "../components/ButtonBackToHome";

import Stars from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MovieDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 80%;
`;

const MovieDetailsContentInfo = styled.div`
  display: flex;

  @media (max-width: 60.75rem) {
    flex-direction: column;
    flex: 1 1 100%;
    width: 100%;
    align-items: center;
  }
`;

const MovieDetailContentInfoPoster = styled.div`
  padding: 1rem;
`;

const MovieImg = styled.img`
  border-radius: 0.9rem;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);
`;

const MovieDetailContentInfoResume = styled.div`
  flex: 1 1 60%;
  padding: 1rem;

  @media (max-width: 60.75rem) {
    padding: 1rem;
  }
`;

const InfoResumeWrapper = styled.div`
  max-width: 40rem;
  align-items: center;
  text-align: justify;
`;

const InfoContentTitle = styled.h1`
  padding-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const InfoContentPlot = styled.p`
  padding-bottom: 1rem;
`;

const InfoContentRating = styled.div`
  padding: 1rem 0;
  text-align: center;
  padding-bottom: 1rem;
`;

const InfoContentRatingVotes = styled.span`
  padding-left: 0.4rem;
`;

const InfoContentActorsWrapper = styled.div`
  padding-bottom: 1rem;
`;

const InfoContentMovieInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const InfoContentActors = styled.p``;

const InfoContentMovieDetails = styled.div`
  padding-bottom: 1rem;
`;

const InfoContentMovieInfoTitle = styled.h2`
  padding-left: 0.6rem;
`;

const InfoContentMovieInfoMovie = styled.ul`
  display: flex;
  list-style: none;
`;

const InfoContentMovieInfoMovieTitles = styled.div`
  flex: 1 1 30%;
  width: 30%;
`;

const InfoContentMovieInfoMovieTxts = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

const InfoContentMovieInfoMovieTxt = styled.li`
  padding-right: 1rem;
`;

const MovieDetailsContentMovies = styled.div``;

const MovieDetailsContentMoviesTitle = styled.h1`
  font-weight: 700;
`;

const MovieDetailsContentMoviesContent = styled.div`
  padding: 2rem 0;
`;

const InfoContentRatingsWrapper = styled.div`
  padding-bottom: 1rem;
`;

const InfoContentMovieInfoRatingsTitles = styled.div`
  flex: 1 1 80%;
  width: 80%;
`;

const InfoContentMovieInfoRatingsTxts = styled.div`
  flex: 1 1 auto;
  width: 30%;
`;

function Detail() {
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const {
    Actors,
    Director,
    Genre,
    imdbRating,
    Plot,
    Poster,
    Production,
    Ratings,
    Released,
    Runtime,
    Title,
  } = movie;

  return (
    <MovieDetailsWrapper>
      <ButtonBackToHome />
      <MovieDetailsContent>
        <MovieDetailsContentInfo>
          <MovieDetailContentInfoPoster>
            <MovieImg src={Poster} />
            <InfoContentRating>
              <Stars
                emptySymbol={
                  <FontAwesomeIcon
                    icon={["far", "star"]}
                    size="sm"
                    color="#ffc700"
                  />
                }
                fullSymbol={
                  <FontAwesomeIcon
                    icon={["fas", "star"]}
                    size="sm"
                    color="#ffc700"
                  />
                }
                initialRating={imdbRating / 2}
                readonly
              />
              <InfoContentRatingVotes>{imdbRating} / 10</InfoContentRatingVotes>
            </InfoContentRating>
          </MovieDetailContentInfoPoster>
          <MovieDetailContentInfoResume>
            <InfoResumeWrapper>
              <InfoContentTitle>{Title}</InfoContentTitle>
              <InfoContentPlot>{Plot}</InfoContentPlot>
              <InfoContentMovieDetails>
                <InfoContentMovieInfo>
                  <span role="img" aria-label="movieinfo">
                    🍿
                  </span>
                  <InfoContentMovieInfoTitle>
                    Movie Info
                  </InfoContentMovieInfoTitle>
                </InfoContentMovieInfo>
                <InfoContentMovieInfoMovie>
                  <InfoContentMovieInfoMovieTitles>
                    <InfoContentMovieInfoMovieTxt>
                      Genre:
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      Director:
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      Released:
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      Runtime:
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      Production:
                    </InfoContentMovieInfoMovieTxt>
                  </InfoContentMovieInfoMovieTitles>
                  <InfoContentMovieInfoMovieTxts>
                    <InfoContentMovieInfoMovieTxt>
                      {Genre}
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      {Director}
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      {Released}
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      {Runtime}
                    </InfoContentMovieInfoMovieTxt>
                    <InfoContentMovieInfoMovieTxt>
                      {Production}
                    </InfoContentMovieInfoMovieTxt>
                  </InfoContentMovieInfoMovieTxts>
                </InfoContentMovieInfoMovie>
              </InfoContentMovieDetails>
              <InfoContentActorsWrapper>
                <InfoContentMovieInfo>
                  <span role="img" aria-label="cast">
                    🎬
                  </span>
                  <InfoContentMovieInfoTitle>Cast</InfoContentMovieInfoTitle>
                </InfoContentMovieInfo>
                <InfoContentActors>{Actors}</InfoContentActors>
              </InfoContentActorsWrapper>
              <InfoContentRatingsWrapper>
                <InfoContentMovieInfo>
                  <span role="img" aria-label="ratings">
                    ⭐️
                  </span>
                  <InfoContentMovieInfoTitle>Ratings</InfoContentMovieInfoTitle>
                </InfoContentMovieInfo>
                {movie &&
                  Ratings.map(({ Source, Value }) => (
                    <InfoContentMovieInfoMovie key={Source}>
                      <InfoContentMovieInfoRatingsTitles>
                        <InfoContentMovieInfoMovieTxt>
                          {Source}:
                        </InfoContentMovieInfoMovieTxt>
                      </InfoContentMovieInfoRatingsTitles>
                      <InfoContentMovieInfoRatingsTxts>
                        <InfoContentMovieInfoMovieTxt>
                          {Value}
                        </InfoContentMovieInfoMovieTxt>
                      </InfoContentMovieInfoRatingsTxts>
                    </InfoContentMovieInfoMovie>
                  ))}
              </InfoContentRatingsWrapper>
            </InfoResumeWrapper>
          </MovieDetailContentInfoResume>
        </MovieDetailsContentInfo>
        {movies.length > 0 && (
          <MovieDetailsContentMovies>
            <MovieDetailsContentMoviesTitle>
              Other Movies
            </MovieDetailsContentMoviesTitle>
            <MovieDetailsContentMoviesContent>
              <MoviesList movies={movies} />
            </MovieDetailsContentMoviesContent>
          </MovieDetailsContentMovies>
        )}
      </MovieDetailsContent>
    </MovieDetailsWrapper>
  );
}

export default Detail;
Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
