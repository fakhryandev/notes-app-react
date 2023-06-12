import React from 'react'
import PropTypes from 'prop-types'

function SearchBar({ handleChangeSearch, searchText }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul..."
        onChange={(e) => handleChangeSearch(e)}
        value={searchText}
      />
    </section>
  )
}

SearchBar.propTypes = {
  handleChangeSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
}

export default SearchBar
