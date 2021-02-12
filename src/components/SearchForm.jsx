import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MoviesContext from "context/MoviesContext";

import { getMovies } from "services/getMovies";

import useForm from "hooks/useForm";

const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const SearchFrom = styled.form`
  padding: 0.8rem;
  border-radius: 8rem;
  background-color: #efefef;
`;

const FormInput = styled.input`
  margin: 0 0.9rem 0 0.6rem;
  height: 2rem;
  background-color: transparent;
  border: 0;
  outline: none;
  box-shadow: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  padding-left: 0.3rem;
`;

function SearchForm() {
  const { inputMovie, handleChange } = useForm();
  const { setMovies, setSearched } = useContext(MoviesContext);

  function handleSubmit(event) {
    event.preventDefault();
    getMovies(inputMovie.trim()).then((movies) => {
      const { Search = [] } = movies;
      setMovies(Search);
      setSearched(true);
    });
  }

  return (
    <SearchFormWrapper>
      <SearchFrom onSubmit={handleSubmit}>
        <SearchIcon icon={["fa", "search"]} size="sm" color="#b8b8b8" />
        <FormInput
          className="input"
          name="inputMovie"
          onChange={handleChange}
          placeholder="Search a movie"
        />
      </SearchFrom>
    </SearchFormWrapper>
  );
}

export default SearchForm;
