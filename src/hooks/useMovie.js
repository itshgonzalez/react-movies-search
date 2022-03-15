import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { getMovie } from 'services/getMovie';

function useMovie(movieId) {
    const [movie, setMovie] = useState('');

    useEffect(() => {
        getMovie(movieId).then((movie) => {
            setMovie(movie);
        });
        scroll.scrollToTop({
            smooth: true,
        });
    }, [movieId]);

    return { movie };
}

export default useMovie;
