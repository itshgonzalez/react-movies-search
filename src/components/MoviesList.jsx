import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { Movie } from 'components/Movie';

const MoviesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    align-content: space-evenly;
    justify-items: center;
    align-items: center;
    grid-gap: 4rem 2rem;

    @media (max-width: 92.5rem) {
        grid-template-columns: repeat(auto-fit, minmax(8rem, 18rem));
    }
`;

export const MoviesList = ({ movies }) => (
    <MoviesWrapper>
        {movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
        ))}
    </MoviesWrapper>
);

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
};
