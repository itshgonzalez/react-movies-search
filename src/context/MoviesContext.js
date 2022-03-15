import React, { useState } from 'react';

const Context = React.createContext({});

export function MoviesContextProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState(false);

    return (
        <Context.Provider value={{ movies, setMovies, searched, setSearched }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
