import { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const API_KEY = "dc16e2e2392b838e7041456e10a4747b";

  const [city, setCity] = useState("Delhi");
  const [searchCity, setSearchCity] = useState("Delhi");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather() {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`,
      );

      const data = await response.json();

      if (data.cod === "404" || data.cod === 404) {
        setError(data.message);
        return;
      }

      setWeather(data);
    } catch (err) {
      setError("Unable to fetch weather");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, [searchCity]);

  function handleSearch() {
    if (city.trim() === "") return;
    setSearchCity(city);
  }

  return (
    <div className="container">
      <h1>🌤 Weather Dashboard</h1>

      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {weather && !loading && !error && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
