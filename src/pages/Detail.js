import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";

import styled from "styled-components";

import MoviesContext from "context/MoviesContext";
import { getMovie } from "services/getMovie";

import { MoviesList } from "components/MoviesList";
import ButtonBackToHome from "components/ButtonBackToHome";

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

const MovieInfo = styled.div`
  display: flex;

  @media (max-width: 60.75rem) {
    flex-direction: column;
    flex: 1 1 100%;
    width: 100%;
    align-items: center;
  }
`;

const MoviePoster = styled.div`
  padding: 1rem;
`;

const MovieImg = styled.img`
  border-radius: 0.9rem;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);
`;

const MovieRating = styled.div`
  padding: 1rem 0;
  text-align: center;
  padding-bottom: 1rem;
`;

const MovieVotes = styled.span`
  padding-left: 0.4rem;
`;

const MovieDetails = styled.div`
  flex: 1 1 60%;
  max-width: 40rem;
  padding: 1rem;
  align-items: center;
  text-align: justify;
`;

const MovieTitle = styled.h1`
  padding-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const MoviePlot = styled.p`
  padding-bottom: 1rem;
`;

const MovieInfoWrapper = styled.div`
  padding-bottom: 1rem;
`;

const MovieInfoTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const MovieTitleSection = styled.h2`
  padding-left: 0.6rem;
  font-weight: 700;
`;

const MovieInfoContentWrapper = styled.ul`
  display: flex;
  list-style: none;
`;

const MovieInfoContentLeft = styled.div`
  flex: 1 1 30%;
  width: 30%;
  padding-right: 1rem;
`;

const MovieInfoContentRight = styled.div`
  flex: 1 1 80%;
  width: 80%;
`;

const ContentInfo = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

const MovieCastWrapper = styled.div`
  padding-bottom: 1rem;
`;

const MovieInfoCast = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const MovieRatingsWrapper = styled.div`
  padding-bottom: 1rem;
`;

const MovieInfoRatings = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

const MovieRatingsContentLeft = styled.div`
  flex: 1 1 80%;
  width: 80%;
`;

const MovieRatingsContentRight = styled.div`
  flex: 1 1 30%;
  width: 30%;
  padding-left: 1rem;
`;

const MovieDetailsOtherMovies = styled.div`
  flex: 1 1 100%;
  width: 100%;
`;

const OtherMoviesTitleSection = styled.h1`
  font-weight: 700;
`;

const MovieDetailsContentMoviesContent = styled.div`
  padding: 2rem 0;
`;

function Detail() {
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then((movie) => {
      setMovie(movie);
    });
    scroll.scrollToTop({
      smooth: true,
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
        <MovieInfo>
          <MoviePoster>
            <MovieImg src={Poster} />
            <MovieRating>
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
              <MovieVotes>{imdbRating} / 10</MovieVotes>
            </MovieRating>
          </MoviePoster>
          <MovieDetails>
            <MovieTitle>{Title}</MovieTitle>
            <MoviePlot>{Plot}</MoviePlot>
            <MovieInfoWrapper>
              <MovieInfoTitle>
                <span role="img" aria-label="movieinfo">
                  🍿
                </span>
                <MovieTitleSection>Movie Info</MovieTitleSection>
              </MovieInfoTitle>
              <MovieInfoContentWrapper>
                <MovieInfoContentLeft>
                  <ContentInfo>Genre:</ContentInfo>
                  <ContentInfo>Director:</ContentInfo>
                  <ContentInfo>Released:</ContentInfo>
                  <ContentInfo>Runtime:</ContentInfo>
                  <ContentInfo>Production:</ContentInfo>
                </MovieInfoContentLeft>
                <MovieInfoContentRight>
                  <ContentInfo>{Genre}</ContentInfo>
                  <ContentInfo>{Director}</ContentInfo>
                  <ContentInfo>{Released}</ContentInfo>
                  <ContentInfo>{Runtime}</ContentInfo>
                  <ContentInfo>{Production}</ContentInfo>
                </MovieInfoContentRight>
              </MovieInfoContentWrapper>
            </MovieInfoWrapper>
            <MovieCastWrapper>
              <MovieInfoCast>
                <span role="img" aria-label="cast">
                  🎬
                </span>
                <MovieTitleSection>Cast</MovieTitleSection>
              </MovieInfoCast>
              <ContentInfo>{Actors}</ContentInfo>
            </MovieCastWrapper>
            <MovieRatingsWrapper>
              <MovieInfoRatings>
                <span role="img" aria-label="ratings">
                  ⭐️
                </span>
                <MovieTitleSection>Ratings</MovieTitleSection>
              </MovieInfoRatings>
              {movie &&
                Ratings.map(({ Source, Value }) => (
                  <MovieInfoContentWrapper key={Source}>
                    <MovieRatingsContentLeft>{Source}:</MovieRatingsContentLeft>
                    <MovieRatingsContentRight>{Value}</MovieRatingsContentRight>
                  </MovieInfoContentWrapper>
                ))}
            </MovieRatingsWrapper>
          </MovieDetails>
        </MovieInfo>
        {movies.length > 0 && (
          <MovieDetailsOtherMovies>
            <OtherMoviesTitleSection>Other Movies</OtherMoviesTitleSection>
            <MovieDetailsContentMoviesContent>
              <MoviesList movies={movies} />
            </MovieDetailsContentMoviesContent>
          </MovieDetailsOtherMovies>
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
