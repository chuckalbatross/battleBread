const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fluffymango057',
  database: 'battlebread'
});

connection.connect();

module.exports = connection;