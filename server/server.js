const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const db = require('./db/db-connection.js');

const app = express();
const API_KEY = `${env.REACT_APP_API_KEY}`;
const PORT = 5005;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});

// How to call the openweather API 
// 

app.get("/weather", async (req, res) => {
  const zipCode = req.query.zip;
  const latLongURL = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},US&APPID=${REACT_APP_API_KEY};
}



// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
