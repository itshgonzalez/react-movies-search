import React, { useContext } from "react";
import styled from "styled-components";

import { MoviesList } from "components/MoviesList";
import ButtonBackToHome from "components/ButtonBackToHome";
import { Rating } from "components/Rating";

import MoviesContext from "context/MoviesContext";

import useMovie from "hooks/useMovie";

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
  padding: 1rem 0;
  max-width: 120rem;

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
  width: 23rem;
  border-radius: 0.9rem;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);

  @media (max-width: 60.75rem) {
    width: 19rem;
  }
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
  padding: 0 2rem;
  align-items: center;

  @media (max-width: 60.75rem) {
    padding: 0;
  }
`;

const MovieTitle = styled.h1`
  padding-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const MoviePlot = styled.p`
  padding-bottom: 1rem;

  @media (max-width: 60.75rem) {
    text-align: justify;
  }
`;

const MovieInfoWrapper = styled.div`
  padding-bottom: 1rem;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  font-size: 2rem;
`;

const MovieTitleSection = styled.h2`
  padding-left: 0.6rem;
  font-size: 1.5rem;
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

const MovieRatingsWrapper = styled.div`
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

const MovieDetailsRecommended = styled.div`
  flex: 1 1 100%;
  width: 100%;
`;

const RecommendedTitleSection = styled.h1`
  font-weight: 700;
`;

const MovieDetailsContentMoviesContent = styled.div`
  padding: 1rem 0;
`;

function Detail({ match }) {
  const { movies } = useContext(MoviesContext);
  const { movie } = useMovie(match.params);

  const {
    Actors,
    Director,
    Genre,
    imdbID: currentMovie,
    imdbRating,
    Plot,
    Poster,
    Production,
    Ratings,
    Released,
    Runtime,
    Title,
  } = movie;

  const recommendedMovies = movies.filter(
    ({ imdbID }) => imdbID !== currentMovie
  );

  return (
    <MovieDetailsWrapper>
      <MovieDetailsContent>
        <ButtonBackToHome />
        <MovieInfo>
          <MoviePoster>
            <MovieImg src={Poster} />
            <MovieRating>
              <Rating imdbRating={imdbRating} />
              <MovieVotes>{imdbRating} / 10</MovieVotes>
            </MovieRating>
          </MoviePoster>
          <MovieDetails>
            <MovieTitle>{Title}</MovieTitle>
            <MoviePlot>{Plot}</MoviePlot>
            <MovieInfoWrapper>
              <SectionTitle>
                <span role="img" aria-label="movieinfo">
                  🍿
                </span>
                <MovieTitleSection>Info</MovieTitleSection>
              </SectionTitle>
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
              <SectionTitle>
                <span role="img" aria-label="cast">
                  🎬
                </span>
                <MovieTitleSection>Cast</MovieTitleSection>
              </SectionTitle>
              <ContentInfo>{Actors}</ContentInfo>
            </MovieCastWrapper>
            {movie && Ratings && Ratings.length > 0 && (
              <MovieRatingsWrapper>
                <SectionTitle>
                  <span role="img" aria-label="ratings">
                    ⭐️
                  </span>
                  <MovieTitleSection>Ratings</MovieTitleSection>
                </SectionTitle>
                {Ratings.map(({ Source, Value }) => (
                  <MovieInfoContentWrapper key={Source}>
                    <MovieRatingsContentLeft>{Source}:</MovieRatingsContentLeft>
                    <MovieRatingsContentRight>{Value}</MovieRatingsContentRight>
                  </MovieInfoContentWrapper>
                ))}
              </MovieRatingsWrapper>
            )}
          </MovieDetails>
        </MovieInfo>
        {recommendedMovies && recommendedMovies.length > 0 && (
          <MovieDetailsRecommended>
            <RecommendedTitleSection>Recommended</RecommendedTitleSection>
            <MovieDetailsContentMoviesContent>
              <MoviesList movies={recommendedMovies} />
            </MovieDetailsContentMoviesContent>
          </MovieDetailsRecommended>
        )}
      </MovieDetailsContent>
    </MovieDetailsWrapper>
  );
}

export default Detail;
