import React from 'react'
import { Star, Calendar } from 'lucide-react'

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie.imdbID)}>
      <div className="movie-poster">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="poster-placeholder">
            <span>No Image</span>
          </div>
        )}
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        
        <div className="movie-meta">
          <div className="movie-year">
            <Calendar size={14} />
            <span>{movie.Year}</span>
          </div>
          
          {movie.imdbRating && movie.imdbRating !== 'N/A' && (
            <div className="movie-rating">
              <Star size={14} fill="currentColor" />
              <span>{movie.imdbRating}</span>
            </div>
          )}
        </div>
        
        <div className="movie-type">
          <span className="type-badge">{movie.Type}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard