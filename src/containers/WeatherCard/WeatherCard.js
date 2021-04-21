import React from "react";

export default function WeatherCard(props) {

  const displayWeatherData = props => {
    const {data} = props;
    
    if(data.length > 0) {
      return (
        data.map((item, index) => {
          console.log(item);
          return (
            <div key={index}>
              <h3>{item.main.temp} °F</h3>
              <h4>Humidity: {item.main.humidity} %</h4>
              <h5>{item.dt_txt}</h5>
            </div>
          )
        })
      )
    } else {
      return (<h3>Loading...</h3>)
    }
  }
  
  return (
    <>
      {displayWeatherData(props)}
    </>
  )
}
