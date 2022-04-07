import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Loading } from 'components/Loading';
import { ButtonBack } from 'components/ButtonBack';
import { MovieDetail } from 'components/MovieDetail';

import MoviesContext from 'context/MoviesContext';
import { useStorage } from 'hooks/useStorage';

import useMovie from 'hooks/useMovie';

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

function Detail({ params }) {
    const { movieId } = params;
    const { movies: moviesContext, searched } = useContext(MoviesContext);
    const moviesStorage = useStorage('s_movies')[0];
    const { movie } = useMovie(movieId);

    const movies =
        moviesContext.length < 1 ? moviesStorage.movies : moviesContext;

    const { imdbID: currentMovie } = movie;

    const recommendedMovies = movies.filter(
        ({ imdbID }) => imdbID !== currentMovie
    );

    return !searched ? (
        <Loading />
    ) : (
        <MovieDetailsWrapper>
            <MovieDetailsContent>
                <ButtonBack />
                <MovieDetail
                    movie={movie}
                    recommendedMovies={recommendedMovies}
                />
            </MovieDetailsContent>
        </MovieDetailsWrapper>
    );
}

Detail.propTypes = {
    params: PropTypes.object.isRequired,
};

export { Detail };
