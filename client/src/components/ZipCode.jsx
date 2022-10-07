import { useState, useEffect } from "react";
import WeatherRender from "./WeatherRender.jsx";


const ZipCode = () => {
  const [zip, setZip] = useState("")
  const [weatherReturn, setWeatherReturn] = useState({
    temp: "",
    feels: "",
    rain: ""
  });


  //use effect that contains the function that calls the fetch -- call from my express backend fetch
  //when it comes in will have a result from the res.json 
  //from result setWeatherReturn = { with notation from JSON temp = res.temp, feels =res.rain, etc.}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(zip);
    setZip("");
  };
  return (
    
    <><div>
    <h3> Enter your zip code to get instant access to weather basics in your area. 
      <br></br>Your submission contributes to our data collection efforts studying which 
      <br></br>resident regions of the country check the weather conditions most often.</h3>
      <form id="enterzip" onSubmit={handleSubmit}>
        <label>
        
          <input inputMode="numeric" type="text" onChange={(e) => setZip(e.target.value)} placeholder="Enter your Zip Code"/>
  </label>
  <input type="submit" value="Submit" />
</form>
<WeatherRender feels={98} rain={true} temp={100} zip={zip}/>
</div>


</>

  )
  
};



export default ZipCode;