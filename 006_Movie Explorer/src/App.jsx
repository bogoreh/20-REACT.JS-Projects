import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieModal from './components/MovieModal'
import LoadingSpinner from './components/LoadingSpinner'
import { useMovies, useMovieDetails } from './hooks/useMovies'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedMovieId, setSelectedMovieId] = useState(null)
  
  const { movies, loading, error, totalResults } = useMovies(searchTerm, currentPage)
  const { movie: selectedMovie, loading: movieLoading } = useMovieDetails(selectedMovieId)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      setCurrentPage(1)
    }
  }

  const handleMovieClick = (imdbID) => {
    setSelectedMovieId(imdbID)
  }

  const handleCloseModal = () => {
    setSelectedMovieId(null)
  }

  const totalPages = Math.ceil(totalResults / 10)

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">🎬 Movie Explorer</h1>
          <p className="app-subtitle">Discover your next favorite movie</p>
          
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSearchSubmit={handleSearchSubmit}
          />
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <>
              <div className="results-header">
                <h2>Search Results</h2>
                <p className="results-count">
                  Found {totalResults} results for "{searchTerm}"
                </p>
              </div>

              <div className="movies-grid">
                {movies.map(movie => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onClick={handleMovieClick}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>
                  
                  <span className="pagination-info">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {!loading && !error && searchTerm && movies.length === 0 && (
            <div className="empty-state">
              <h3>No movies found</h3>
              <p>Try searching for a different title</p>
            </div>
          )}

          {!loading && !error && !searchTerm && (
            <div className="welcome-state">
              <h3>Welcome to Movie Explorer</h3>
              <p>Search for movies above to get started</p>
            </div>
          )}
        </div>
      </main>

      <MovieModal
        movie={selectedMovie}
        loading={movieLoading}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App