import React from 'react';

import PropTypes from 'prop-types';

import { StarOutline } from 'iconoir-react';

import Stars from 'react-rating';

export const Rating = ({ imdbRating }) => (
    <Stars
        emptySymbol={<StarOutline color={'#ffc700'} width={20} height={20} />}
        fullSymbol={
            <StarOutline
                fill={'#ffc700'}
                color={'#ffc700'}
                width={20}
                height={20}
            />
        }
        initialRating={imdbRating / 2}
        readonly
    />
);

Rating.propTypes = {
    imdbRating: PropTypes.string,
};
