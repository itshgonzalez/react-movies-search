import React, { useContext } from "react";

import styled from "styled-components";

import MoviesContext from "context/MoviesContext";

import SearchForm from "components/SearchForm";
import { MoviesList } from "components/MoviesList";

const MoviesListWrapper = styled.div`
  padding: 4rem 0;
`;

function Home() {
  const { movies } = useContext(MoviesContext);

  return (
    <React.Fragment>
      <SearchForm />
      <MoviesListWrapper>
        <MoviesList movies={movies} />
      </MoviesListWrapper>
    </React.Fragment>
  );
}

export default Home;
