
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css';

const API_KEY = 'aab716f64e407ffba09271126e3ac461'; // Replace with your API key

const WeatherApp = () => {
  const [cityName, setCityName] = useState(''); // State for user input
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('City not found');
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cityName]);

  // Handle user input change
  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    fetchData();
  };

  return (
    <div className="weather-card">
      <h1>5-Day Weather Forecast</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city name..."
          value={cityName}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error ? (
        <div className="error">{error}</div>
      ) : weatherData ? (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            className="weather-icon"
          />
          <h2 className="city">{weatherData.name}</h2>
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
          <p className="weather-description">
            {weatherData.weather[0].description}
          </p>
          <div className="details">
            <div>
              <p>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div>
              <p>Wind Speed</p>
              <p>{weatherData.wind.speed} m/s</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default WeatherApp;

