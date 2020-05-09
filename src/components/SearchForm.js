import React, { useState, useContext } from "react";

// Import Services
import { getMovies } from "../services/getMovies";

// Import contexts
import MoviesContext from "../context/MoviesContext";

function SearchForm() {
  const [inputKeywords, setInputKeywords] = useState("");
  const { setMovies, setSearched } = useContext(MoviesContext);

  const handleChange = (event) => {
    setInputKeywords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    getMovies(inputKeywords).then((movies) => {
      const { Search = [] } = movies;
      setMovies(Search);
      setSearched(true);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            name="inputMovie"
            /*onIconClick={handleSubmit}*/
            onChange={handleChange}
            placeholder="Movie to search.."
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
