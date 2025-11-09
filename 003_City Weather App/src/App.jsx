import { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_KEY = '40c42f9eed351677d71026af3d58b96d' // Get free API key from OpenWeatherMap
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

  const fetchWeather = async (e) => {
    e.preventDefault()
    if (!city.trim()) return

    setLoading(true)
    setError('')
    
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      )
      
      if (!response.ok) {
        throw new Error('City not found')
      }
      
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">🌤️ Weather App</h1>
          <p className="subtitle">Get current weather for any city</p>
        </header>

        <form onSubmit={fetchWeather} className="search-form">
          <div className="input-group">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="search-input"
            />
            <button 
              type="submit" 
              className="search-button"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  )
}

export default App