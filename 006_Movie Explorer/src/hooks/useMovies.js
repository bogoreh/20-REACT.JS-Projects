import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_OMDB_API_URL
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export const useMovies = (searchTerm, page = 1) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    if (!searchTerm) {
      setMovies([])
      return
    }

    const fetchMovies = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch(
          `${API_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&page=${page}`
        )
        const data = await response.json()
        
        if (data.Response === 'True') {
          setMovies(data.Search || [])
          setTotalResults(parseInt(data.totalResults))
        } else {
          setError(data.Error || 'No movies found')
          setMovies([])
        }
      } catch (err) {
        setError('Failed to fetch movies')
        setMovies([])
      } finally {
        setLoading(false)
      }
    }

    const timeoutId = setTimeout(fetchMovies, 500)
    return () => clearTimeout(timeoutId)
  }, [searchTerm, page])

  return { movies, loading, error, totalResults }
}

export const useMovieDetails = (imdbID) => {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!imdbID) return

    const fetchMovieDetails = async () => {
      setLoading(true)
      setError(null)
      
      try {
        const response = await fetch(
          `${API_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`
        )
        const data = await response.json()
        
        if (data.Response === 'True') {
          setMovie(data)
        } else {
          setError(data.Error || 'Movie details not found')
        }
      } catch (err) {
        setError('Failed to fetch movie details')
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [imdbID])

  return { movie, loading, error }
}