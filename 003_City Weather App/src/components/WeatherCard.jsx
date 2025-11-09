import './WeatherCard.css'

const WeatherCard = ({ data }) => {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity, pressure },
    weather: [{ main, description, icon }],
    wind: { speed },
    visibility
  } = data

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  }

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location">
          <h2 className="city-name">{name}, {country}</h2>
          <p className="weather-description">{description}</p>
        </div>
        <img 
          src={getWeatherIcon(icon)} 
          alt={main}
          className="weather-icon"
        />
      </div>

      <div className="temperature">
        <span className="temp-value">{Math.round(temp)}</span>
        <span className="temp-unit">°C</span>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels like</span>
          <span className="detail-value">{Math.round(feels_like)}°C</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{speed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        
        <div className="detail-item">
          <span className="detail-label">Visibility</span>
          <span className="detail-value">{visibility / 1000} km</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard