import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { FILTERS_GET_MOVIE } from 'constants';

import { getMovies } from 'services';

function useMovie(movieId) {
    const [movie, setMovie] = useState('');

    useEffect(() => {
        getMovies(movieId, FILTERS_GET_MOVIE.filters).then((movie) => {
            setMovie(movie);
        });
        scroll.scrollToTop({
            smooth: true,
        });
    }, [movieId]);

    return { movie };
}

export default useMovie;
