const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'edison_15',
  database: 'indiec_bd',
  port:'3306'
  
});

module.exports = pool;