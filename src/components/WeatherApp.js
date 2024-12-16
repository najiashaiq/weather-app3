import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "3c51bf5e0ffecc2d539a2854e1c73471";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to fetch weather data: ${errorData.message}`);
      }
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error("Error details: ", err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {weather && !loading && !error && <WeatherCard weather={weather} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default WeatherApp;
