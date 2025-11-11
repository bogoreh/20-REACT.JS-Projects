import React from 'react'
import { X, Star, Calendar, Clock, Award } from 'lucide-react'

const MovieModal = ({ movie, loading, error, onClose }) => {
  if (!movie) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <div className="modal-loading">Loading...</div>
        ) : error ? (
          <div className="modal-error">{error}</div>
        ) : (
          <>
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-body">
              <div className="modal-poster">
                {movie.Poster !== 'N/A' ? (
                  <img src={movie.Poster} alt={movie.Title} />
                ) : (
                  <div className="poster-placeholder large">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              
              <div className="modal-details">
                <h2 className="modal-title">{movie.Title}</h2>
                
                <div className="modal-meta-grid">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>Year: {movie.Year}</span>
                  </div>
                  
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>Runtime: {movie.Runtime}</span>
                  </div>
                  
                  {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                    <div className="meta-item">
                      <Star size={16} fill="currentColor" />
                      <span>IMDb: {movie.imdbRating}/10</span>
                    </div>
                  )}
                  
                  {movie.imdbVotes && movie.imdbVotes !== 'N/A' && (
                    <div className="meta-item">
                      <Award size={16} />
                      <span>Votes: {movie.imdbVotes}</span>
                    </div>
                  )}
                </div>
                
                <div className="modal-section">
                  <h4>Plot</h4>
                  <p>{movie.Plot !== 'N/A' ? movie.Plot : 'No plot available.'}</p>
                </div>
                
                <div className="modal-section">
                  <h4>Genre</h4>
                  <div className="genre-tags">
                    {movie.Genre && movie.Genre !== 'N/A' 
                      ? movie.Genre.split(', ').map(genre => (
                          <span key={genre} className="genre-tag">{genre}</span>
                        ))
                      : 'N/A'
                    }
                  </div>
                </div>
                
                <div className="modal-section">
                  <h4>Director</h4>
                  <p>{movie.Director !== 'N/A' ? movie.Director : 'N/A'}</p>
                </div>
                
                <div className="modal-section">
                  <h4>Cast</h4>
                  <p>{movie.Actors !== 'N/A' ? movie.Actors : 'N/A'}</p>
                </div>
                
                {movie.Ratings && movie.Ratings.length > 0 && (
                  <div className="modal-section">
                    <h4>Ratings</h4>
                    <div className="ratings-list">
                      {movie.Ratings.map((rating, index) => (
                        <div key={index} className="rating-item">
                          <strong>{rating.Source}:</strong> {rating.Value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MovieModal