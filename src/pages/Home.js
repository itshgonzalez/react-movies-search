import React, { useContext } from "react";

import styled from "styled-components";

import MoviesContext from "context/MoviesContext";

import SearchForm from "components/SearchForm";
import { MoviesList } from "components/MoviesList";


const MoviesListWrapper = styled.div`
  padding: 4rem 0;
`;

function Home() {
  const { movies, searched } = useContext(MoviesContext);

  const renderResults = () =>
    searched && movies.length === 0
    ? (<p>No results found</p>)
    : (<MoviesList movies={movies} />);

  return (
    <div className="home">
      <SearchForm />
      <MoviesListWrapper>{renderResults()}</MoviesListWrapper>
    </div>
  );
}

export default Home;
