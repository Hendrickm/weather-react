import React from 'react';
import WeatherDay from './weatherDay';

import { WeatherForecast } from '../../commons/types';

interface Props {
  weatherForecast?: WeatherForecast;
}

export default (props: Props) => {
  const { weatherForecast } = props;

  const renderDays = () => {
    const filteredForecast = weatherForecast?.list
      .filter((item) => new Date(item.dt * 1000).getHours() === 12);
    return filteredForecast?.map(
      (weather) => <WeatherDay key={weather.dt} weatherData={weather} />);
  };

  return (
    <div className="weather-forecast-container">

      { renderDays() }
    </div>
  );
};
