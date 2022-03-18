import React, { useContext } from 'react';

import styled from 'styled-components';

import MoviesContext from 'context/MoviesContext';
import { useStorage } from 'hooks/useStorage';

import SearchForm from 'components/SearchForm';
import { MoviesList } from 'components/MoviesList';

const MoviesListWrapper = styled.div`
    padding: 4rem 0;
`;

function Home() {
    const moviesContext = useContext(MoviesContext);
    const moviesStorage = useStorage('s_movies')[0];

    const { movies } =
        moviesContext.movies.length < 1 ? moviesStorage : moviesContext;

    return (
        <React.Fragment>
            <SearchForm />
            <MoviesListWrapper>
                <MoviesList movies={movies} />
            </MoviesListWrapper>
        </React.Fragment>
    );
}

export { Home };
