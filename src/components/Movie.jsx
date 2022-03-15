import React from 'react';
import { Link } from 'wouter';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const MovieWrapper = styled(Link)`
    background: transparent;
`;

const MovieImg = styled.img`
    width: 16rem;
    height: 23rem;
    border-radius: 0.9rem;
    transition: 0.2s ease-in-out;
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;

export const Movie = ({ imdbID, Poster }) => (
    <MovieWrapper to={`/movie/${imdbID}`}>
        <MovieImg src={Poster} />
    </MovieWrapper>
);

Movie.propTypes = {
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string,
};
