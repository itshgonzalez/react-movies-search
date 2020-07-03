import React, { useState, useContext } from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getMovies } from "services/getMovies";
import MoviesContext from "context/MoviesContext";

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
  margin-left: 0.6rem;
  width: 12rem;
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
  const [inputKeywords, setInputKeywords] = useState("");
  const { setMovies, setSearched } = useContext(MoviesContext);

  function handleChange(event) {
    setInputKeywords(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getMovies(inputKeywords.trim()).then((movies) => {
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
