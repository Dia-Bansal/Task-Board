import React from 'react';
import moment from 'moment';

const WeatherCard = ({ data }) => {
  const date = moment(data.dt * 1000).format('dddd, MMM Do');
  const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <div className="weather-card">
      <h2>{date}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
