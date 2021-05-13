import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeoForecast from '../../containers/GeoForecast';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// retreive API data, display forecast info
export default function GeolocationForecast() {
  // initialize state variable 'data'
  const [data, setData] = useState('');
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${API_KEY}`;

  useEffect(() => {
    getLocation();
    fetchForecast();
  }, []);

  const getLocation = () => {
    // get geolocation
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Loading...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log('current position located!');
      }, () => {
        setStatus('Unable to retrieve your location :(');
      });
    }
  }

  const fetchForecast = () => {
    axios.get(apiUrl)
      .then((res) => {
        // forecast data response
        const forecastData = res;
        // update state variable with response data
        setData(forecastData);
        console.log('geoForecast', forecastData);
      })
      .catch(error => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <hr></hr>
      <h2>Geo Forecast</h2>
      <h4>{status}</h4>
      <GeoForecast data={data} />
      <hr></hr>
    </div>
  );

};