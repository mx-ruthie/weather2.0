//import logo from './logo.svg';
import './App.css';
import ZipCode from './components/ZipCode';
//import WeatherRender from './components/WeatherRender';


function App() {
  return (
    <div className="App">
      <h1 className="App-header">Weather Fast U.S.A</h1>
      <ZipCode />
      {/* <WeatherRender className="data-display"/> */}
    </div>
  );
}

export default App;
