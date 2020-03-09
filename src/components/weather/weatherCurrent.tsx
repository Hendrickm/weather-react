import React from 'react';
import './weather.css';

import { WeatherData } from '../../commons/types';


interface Props {
  weatherData: WeatherData;
}

export default (props: Props) => {
  const {
    weatherData: {
      name, main, wind, weather, dt,
    },
  } = props;

  const weatherInfo = weather ? weather[0] : undefined;
  return (
    <div className="current-weather-container">
      <h1>{ name }</h1>
      <div className="temperature-container">
        <img src={`http://openweathermap.org/img/wn/${weatherInfo?.icon ? weatherInfo.icon : 'a'}@2x.png`} alt="icon" />
        <h2>
          { `${Math.round(main?.temp)} °C`}
        </h2>
      </div>
      <h3>{weatherInfo?.main}</h3>
      <h3>{weatherInfo?.description}</h3>
      <h5>{ new Date(dt * 1000).toLocaleString() }</h5>
      <div className="weather-info-container">
        <div className="weather-info-item">

          { `Wind: ${wind?.speed} m/s` }
        </div>
        <div className="weather-info-item">

          { `Pressure: ${main?.pressure} hPa`}
        </div>
        <div className="weather-info-item">
          { `Humidity: ${main?.humidity}% `}
        </div>
        <div className="weather-info-item">
          { `Feels like: ${Math.round(main?.feels_like)}  °C` }
        </div>
      </div>
    </div>
  );
};
