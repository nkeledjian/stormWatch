import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../../containers/WeatherCard';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// retreive API data, display forecast info
export default function WeatherForecast() {
  // initialize state variable 'data'
  const [data, setData] = useState('');
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=5389489&units=imperial&appid=${API_KEY}`

  useEffect(() => {
    fetchForecast();
  }, []);

  const fetchForecast = () => {
    axios.get(apiUrl)
      .then((res) => {
        console.log('basic forecast', res)
        // forecast data response (res.data.list)
        const forecastData = res.data.list;
        // update state variable 'data'
        setData(forecastData);
      })
      .catch(error => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <WeatherCard data={data} />
    </div>
  );

};