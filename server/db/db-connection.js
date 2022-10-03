//this is how my server/backend connects to the database (postgresql)

const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DB_URI
  });

  module.exports = db;