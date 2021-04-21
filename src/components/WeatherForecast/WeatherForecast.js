import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../../containers/WeatherCard';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function WeatherForecast() {
    // retreive API data
    const [ data, setData ] = useState('');
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=5391959&units=imperial&appid=${API_KEY}`
  
    useEffect(() => {
      fetchForecast();
    }, []);

    const fetchForecast = () => {
      axios.get(apiUrl)
      .then((res) => {
        const forecastData = res.data.list;
        setData(forecastData);
      })
      .catch(error => console.error(`Error: ${error}`));
    };

      return (
        <WeatherCard data={data}/>
      );
    
};