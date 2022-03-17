const mysql = require('mysql2');
require('dotenv').config();

let pool;
pool = mysql.createPool({
  connectionLimit : 10,
  host     : process.env.BC_HOST,
  user     : process.env.BC_USER,
  password : process.env.BC_PASSWORD,
  database : process.env.BC_DATABASE,
  multipleStatements: true
});

module.exports = pool;