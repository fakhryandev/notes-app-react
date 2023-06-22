import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../context/LocaleContext";
import { activeNotePage } from "../utils/content";

function SearchBar({ handleChangeSearch, searchText }) {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={activeNotePage[locale].search}
        onChange={(e) => handleChangeSearch(e)}
        value={searchText}
      />
    </section>
  );
}

SearchBar.propTypes = {
  handleChangeSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
