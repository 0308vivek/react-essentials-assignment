function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>📍 {weather.name}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>
        <span>☁️ Condition</span>
        <span>{weather.weather[0].main}</span>
      </p>

      <p>
        <span>💧 Humidity</span>
        <span>{weather.main.humidity}%</span>
      </p>

      <p>
        <span>🌬 Wind</span>
        <span>{weather.wind.speed} m/s</span>
      </p>

      <p>
        <span>🌡 Feels Like</span>
        <span>{Math.round(weather.main.feels_like)}°C</span>
      </p>
    </div>
  );
}

export default WeatherCard;