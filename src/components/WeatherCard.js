import React from "react";

const WeatherCard = ({ weather, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!weather) return <p>No weather data available</p>;

  return (
    <div>
      {weather.name && weather.weather && weather.main ? (
        <>
          <h2>Weather in {weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </>
      ) : (
        <p>Weather information is incomplete.</p>
      )}
    </div>
  );
};

export default WeatherCard;
