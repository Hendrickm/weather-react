import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import WeatherCurrent from '../weather/weatherCurrent';
import WeatherForecast from '../weather/weatherForecast';

export default () => (
  <>
    <Navbar />
    <Container>
      <WeatherCurrent />

      <WeatherForecast />
    </Container>
  </>
);
