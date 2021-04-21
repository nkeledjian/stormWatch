import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          StormWatch
        </h1>
      </header>
        <CurrentWeather />
        <WeatherForecast />
    </div>
  );
}

export default App;