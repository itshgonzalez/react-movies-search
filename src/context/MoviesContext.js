import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext({});

export function MoviesContextProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState(false);
    const [searching, setSearching] = useState(false);

    return (
        <Context.Provider
            value={{
                movies,
                setMovies,
                searched,
                setSearched,
                searching,
                setSearching,
            }}
        >
            {children}
        </Context.Provider>
    );
}

MoviesContextProvider.propTypes = {
    children: PropTypes.object,
};

export default Context;
