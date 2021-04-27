import React from 'react';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default class CurrentWeather extends React.Component {

  state = {
    city: [],
    conditions: [],
    humidity: "",
    temp: []
  }

  componentDidMount() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=5391959&units=imperial&appid=${API_KEY}`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      this.setState({
        city: data.city.name,
        conditions: data.list[0].weather[0].description,
        humidity: data.list[1].main.humidity,
        temp: data.list[0].main.temp
      })
    });
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <h4>-Current Weather-</h4>
        <h3>{Math.floor(this.state.temp)} °F</h3>
        <h3>{this.state.conditions}</h3>
        <h3>Humidity: {this.state.humidity}%</h3>
        <br></br>
      </div>
    )
  }
}