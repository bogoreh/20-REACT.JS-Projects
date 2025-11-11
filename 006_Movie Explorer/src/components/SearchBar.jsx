import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="search-bar">
      <form onSubmit={onSearchSubmit} className="search-form">
        <div className="search-input-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar