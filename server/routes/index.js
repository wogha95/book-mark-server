let express = require('express');
let router = express.Router();
let path = require('path');
const pool = require('../db/config');

// localhost:3000/api/login
router.post('/login', async function (req, res, next) {
  console.log('im login');

  let email = req.body.email;
  let pw = req.body.pw;

  const sql = 'SELECT * FROM user WHERE email = ? AND pw = ?';
  const params = [email, pw];

  try {
    const [rows, fields] = await pool.query(sql, params);

    if(rows.length > 0){
      res.send({
        login: true,
      });
    }
    else
      res.send({login: false});
    
  } catch (error) {
    console.log(error);
  }
});

// localhost:3000/api/logout
router.get('/logout', async function (req, res, next) {
  console.log('im logout');
});

// localhost:3000/api/register
router.post('/register', async function (req, res, next) {
  console.log('im register');

  let email = req.body.email;
  let pw = req.body.pw;

  const sql = 'INSERT INTO user VALUES(?, ?)';
  const params = [email, pw];

  try {
    const [rows, fields] = await pool.query(sql, params);

    if(!(rows.length > 0))
      res.send({register: true});
  } catch (error) {
    console.log(error);
    res.send({register: false});
  }
});

// localhost:3000/api/bookmark
router.post('/bookmark', async function (req, res, next) {
  console.log('im bookmark');

  let email = req.body.email;
  const sql = 'SELECT * FROM bookmark WHERE email = ?';
  const params = [email];

  try {
    const [rows, fields] = await pool.query(sql, params);
    console.log(rows);
    if(rows.length > 0)
      res.send({done: true, rows});
    else
      res.send({done: false});
  } catch (error) {
    console.log(error);
  }
});

// localhost:3000/api/deleteBookmark
router.post('/deleteBookmark', async function (req, res, next) {
  console.log('im DELETE bookmark');

  let email = req.body.email;
  let name = req.body.name;

  const sql = 'DELETE FROM bookmark WHERE email = ? AND name = ?';
  const params = [email, name];

  try {
    const [rows, fields] = await pool.query(sql, params);
    console.log(rows);
    if(rows.length > 0){
      res.send({
        
      });
    }
    else
      res.send({ });
    
  } catch (error) {
    console.log(error);
  }
});

// localhost:3000/api
router.get('/', function (req, res, next) {
  console.log('##############################');
  console.log('im blank');
  console.log('##############################');
  res.sendFile(path.join(__dirname, '../public/index.html'));
  
});

module.exports = router;