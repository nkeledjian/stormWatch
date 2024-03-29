import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeoForecast from '../../containers/GeoForecast';
// import Geolocation from '../Geolocation';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// retreive API data, display forecast info
export default function GeolocationForecast() {
  // initialize state variables for weather data and geo coordinates
  const [data, setData] = useState('');
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);
  // const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${API_KEY}`;
  
  // hard coded Sacramento Long and Lat for testing
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=38.606110&lon=-121.457497&units=imperial&appid=${API_KEY}`;

  // const getLocation = () => {
  //   // get geolocation
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     setStatus('Loading...');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //     }, () => {
  //       setStatus('Unable to retrieve your location :(');
  //     });
  //   }
  // };

  useEffect(() => {
    fetchForecast();
  }, []);

  const fetchForecast = () => {
    // getLocation();
    axios.get(apiUrl)
      .then((res) => {
        // forecast data response
        const forecastData = res.data.daily;
        // update state variable with response data
        setData(forecastData);
        // console.log('geoForecast', forecastData);
      })
      .catch(error => console.error(`Error: ${error}`)); 
  };

  return (
    <div>
      <LocationOnIcon fontSize="large"/>
      {/* <h4>{status}</h4> */}
      <GeoForecast data={data} />
      <hr></hr>
    </div>
  );

};