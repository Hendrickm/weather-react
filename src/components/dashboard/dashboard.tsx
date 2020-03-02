import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import CurrentWeather from '../weather/currentWeather';

export default () => (
  <>
    <Navbar />
    <Container>
      <CurrentWeather />
    </Container>
  </>
);
