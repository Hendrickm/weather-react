import React from 'react';
import { WeatherData } from '../../commons/types';

const DAYS: Key = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

interface Key {
  [key: number]: string
}


interface Props {
  weatherData: WeatherData;
}

export default (props: Props) => {
  const {
    weatherData: {
      main, weather, dt,
    },
  } = props;

  const weatherInfo = weather ? weather[0] : undefined;

  return (
    <div>
      <h2>{ DAYS[new Date(dt * 1000).getDay()]}</h2>
      <img src={`http://openweathermap.org/img/wn/${weatherInfo?.icon ? weatherInfo.icon : 'a'}@2x.png`} alt="icon" />
      <p>{weatherInfo?.main}</p>
      <p>{weatherInfo?.description}</p>
      <p>{`${Math.round(main.temp_min)}°C - ${Math.round(main.temp_max)}°C`}</p>
    </div>
  );
};
