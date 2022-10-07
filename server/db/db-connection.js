//this is how my server/backend connects to the database (postgresql)

const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.REACT_APP_API_KEY
  });

  module.exports = db;