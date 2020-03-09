import React, { Component } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import WeatherCurrent from '../weather/weatherCurrent';
import WeatherComing from '../weather/weatherComing';

import { WeatherData, WeatherForecast } from '../../commons/types';

import API from '../../api/api';

interface State {
  weatherData?: WeatherData;
  weatherForecast?: WeatherForecast;
}

interface Props {
  id?: number
}

export default class Dashboard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { weatherData: undefined };
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
      API.get<WeatherData>('weather', { params })
        .then((res: { data: WeatherData; }) => this.setState({ weatherData: res.data }));

      API.get('forecast', { params })
        .then((res: { data: WeatherForecast}) => this.setState({ weatherForecast: res.data }));
    });
  }

  render() {
    const { weatherData, weatherForecast } = this.state;
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
  }
}
