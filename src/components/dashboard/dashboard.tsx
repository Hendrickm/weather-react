import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import WeatherCurrent from '../weather/weatherCurrent';
import WeatherForecast from '../weather/weatherForecast';

import { CurrentWeather } from '../../commons/types';

import API from '../../api/api';

interface State {
  currentWeather?: CurrentWeather;
}

interface Props {
  id?: number
}

export default class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentWeather: undefined };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((positon) => {
      const { latitude, longitude } = positon.coords;
      const params = {
        lat: latitude,
        lon: longitude,
        appid: '2e50810d3882ce89c4e7bd8e4ecbfda3',
        units: 'metric',
      };
      API.get<CurrentWeather>('weather', { params })
        .then((res: { data: CurrentWeather; }) => this.setState({ currentWeather: res.data }));
    });
  }

  render() {
    const { currentWeather } = this.state;
    if (currentWeather) {
      return (
        <>
          <Navbar />
          <Container>
            <WeatherCurrent currentWeather={currentWeather} />
            <WeatherForecast />
          </Container>
        </>
      );
    }
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}
