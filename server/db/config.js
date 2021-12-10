const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'bookmark523',
  password: '523bookmark',
  database: 'bookmarkdb'
});

module.exports = pool;