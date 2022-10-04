const ZipCode = () => {

  return (
    <div>
    <h3> Enter your zip code to get instant access to weather basics in your area. 
      <br></br>Your submission contributes to our data collection efforts studying which 
      <br></br>regions of the country check the weather conditions most often.</h3>
      <form>
        <label>
        
          <input type="text" name="name" placeholder="Enter your Zip Code"/>
  </label>
  <input type="submit" value="Submit" />
</form>
</div>

  )
};

export default ZipCode;