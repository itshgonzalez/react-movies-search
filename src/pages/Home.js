import React, { useContext } from "react";

// Import components
import SearchForm from "../components/SearchForm";
import { MoviesList } from "../components/MoviesList";

// Import contexts
import MoviesContext from "../context/MoviesContext";

function Home() {
  const { movies, searched } = useContext(MoviesContext);

  const renderResults = () => {
    return searched && movies.length === 0 
    ? (<p>No results found</p>) 
    : (<MoviesList movies={movies} />);
  };

  return (
    <div className="homepage">
      <div id="searchform-component">
        <SearchForm />
      </div>
      {renderResults()}
    </div>
  );
}

export default Home;
