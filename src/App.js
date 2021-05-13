import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import GeolocationForecast from './components/GeolocationForecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Storm Watch</h1>
      </header>
        <GeolocationForecast />
        <CurrentWeather />
        <WeatherForecast />
    </div>
  );
}

export default App;