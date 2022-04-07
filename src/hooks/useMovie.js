import { useEffect, useState, useContext } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import MoviesContext from 'context/MoviesContext';

import { FILTERS_GET_MOVIE } from 'constants';

import { getMovies } from 'services';

function useMovie(movieId) {
    const [movie, setMovie] = useState({});
    const { setSearching, setSearched } = useContext(MoviesContext);

    useEffect(() => {
        setSearching(true);
        setSearched(false);
        getMovies(movieId, FILTERS_GET_MOVIE.filters).then((movie) => {
            setMovie(movie);
            setSearching(false);
            setSearched(true);
        });
        scroll.scrollToTop({
            smooth: true,
        });
    }, [movieId]);

    return { movie };
}

export default useMovie;
