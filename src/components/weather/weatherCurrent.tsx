import React from 'react';
import './weather.css';

export default () => (
  <div className="current-weather-container">
    <h1>Fortaleza - CE</h1>
    <div className="temperature-container">
      <img src="http://openweathermap.org/img/wn/13n@2x.png" alt="icon" />
      <h2>
        23°C
      </h2>
    </div>
    <h3>Clear Sky</h3>
    <h3>Quarta 20:30</h3>
    <div className="weather-info-container">
      <div className="weather-info-item">
        Wind: 20km/h
      </div>
      <div className="weather-info-item">
        Pressure: 20km/h
      </div>
      <div className="weather-info-item">
        Umidade: 20km/h
      </div>
      <div className="weather-info-item">
        Wind: 20km/h
      </div>
    </div>
  </div>
);
