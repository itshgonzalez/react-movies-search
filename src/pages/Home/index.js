import React, { useContext } from 'react';

import styled from 'styled-components';

import MoviesContext from 'context/MoviesContext';

import { Loading } from 'components/Loading';
import SearchForm from 'components/SearchForm';
import { MoviesList } from 'components/MoviesList';

const MoviesListWrapper = styled.div`
    padding: 4rem 0;
`;

function Home() {
    const { movies, searching, searched } = useContext(MoviesContext);

    return (
        <React.Fragment>
            <SearchForm />
            {searching && !searched ? (
                <Loading />
            ) : (
                <MoviesListWrapper>
                    <MoviesList movies={movies} />
                </MoviesListWrapper>
            )}
        </React.Fragment>
    );
}

export { Home };
