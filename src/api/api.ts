import axios from 'axios';

export const WEATHER_API = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
});

export const CITY_API = axios.create({
  baseURL: 'http://localhost:3003/api/',
});
