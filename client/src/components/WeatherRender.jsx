
const WeatherRender = (props) => {

  return (
    <div className="data-display">
     <h1> Current weather details for: {props.zip} </h1>
      <p> Current Temperature: {props.temp}</p>
      <p>Feels like: {props.feels}</p>
      <p>Chance of Rain: {props.rain}</p>     
    </div>
  )
};

export default WeatherRender;