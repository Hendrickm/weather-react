import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import WeatherCurrent from '../weather/weatherCurrent';
import WeatherComing from '../weather/weatherComing';

import { WeatherData, WeatherForecast } from '../../commons/types';

import API from '../../api/api';
import { API_KEY } from '../../api/enviroment';


export default () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(undefined);
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | undefined>(undefined);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const params = {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: 'metric',
      };

      API.get<WeatherData>('weather', { params })
        .then((res: { data: WeatherData; }) => setWeatherData(res.data));

      API.get('forecast', { params })
        .then((res: { data: WeatherForecast }) => setWeatherForecast(res.data));
    });
  }, []);

  if (weatherData && weatherForecast) {
    return (
      <>
        <Navbar />
        <Container>
          <WeatherCurrent weatherData={weatherData} />
          <WeatherComing weatherForecast={weatherForecast} />
        </Container>
      </>
    );
  }
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};
