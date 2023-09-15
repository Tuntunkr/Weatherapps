import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "ef7069ec305b1b0812b2f7c9f7a6621d";

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="weather-title">
      {/* header */}
      <h1>Weather App</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {error && <p className="error">{error}</p>}
      {weatherData.main && (
        <div>
          <section className="display">
            <div className="wrapper">
              <h2 id="cityoutput">
                Weather in : {weatherData.name}, {weatherData.sys.country}
              </h2>
              <p id="description">Temperature: {weatherData.main.temp}°C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p id="temp">Conditions: {weatherData.weather[0].description}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Weather;
