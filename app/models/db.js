const mysql = require('mysql2');
const dbConfig = require('../config/db.config.js');

var connection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.db
});

module.exports = connection;
