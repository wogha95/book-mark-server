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

// localhost:3000/api/user
router.post('/user', async function (req, res, next) {
  console.log('im registerUser');

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

// localhost:3000/api/password
router.put('/password', async function (req, res, next) {
  console.log('im updateUser');

  let email = req.body.email;
  let pwBefore = req.body.pwBefore;
  let pwAfter = req.body.pwAfter;

  const sql = 'SELECT * FROM user WHERE email = ? AND pw = ?';
  const sql2 = 'UPDATE user SET pw = ? WHERE email = ?';
  const params = [email, pwBefore];
  const params2 = [pwAfter, email];

  try {
    const [rows, fields] = await pool.query(sql, params);

    if(rows.length > 0) {
      const [rows2, fields2] = await pool.query(sql2, params2);

      if(!(rows2.length > 0))
        res.send({update: true});
      else
        res.send({update: false})
    }
    else
      res.send({update: false})
  } catch (error) {
    console.log(error);
    res.send({update: false});
  }
});

// localhost:3000/api/user
router.put('/user', async function (req, res, next) {
  console.log('im deleteUser');

  let email = req.body.email;
  let pw = req.body.pw;

  const sql = 'SELECT * FROM user WHERE email = ? AND pw = ?';
  const sql2 = 'DELETE FROM user WHERE email = ? AND pw = ?';
  const params = [email, pw];

  try {
    // 계정 유무 확인
    const [rows, fields] = await pool.query(sql, params);

    if(rows.length > 0) {
      // 삭제 작업
      const [rows2, fields2] = await pool.query(sql2, params);
      
      if(!(rows2.length > 0))
        res.send({delete: true});
      else
        res.send({delete: false});
    }
    else
      res.send({delete: false});
  } catch (error) {
    console.log(error);
  }
});

// localhost:3000/api/bookmarks
router.post('/bookmarks', async function (req, res, next) {
  console.log('im bookmark');

  let email = req.body.email;
  const sql = 'SELECT * FROM bookmark WHERE email = ?';
  const params = [email];

  try {
    const [rows, fields] = await pool.query(sql, params);
    
    if(rows.length > 0)
      res.send({done: true, rows});
    else
      res.send({done: false});
  } catch (error) {
    console.log(error);
  }
});

//localhost:3000/api/createBookmark
router.post('/createBookmark', async function (req, res, next) {
  console.log('im CREATE bookmark');

  let email = req.body.email;
  let star = parseInt(req.body.star);
  let name = req.body.name;
  let address = req.body.address;

  const sql = 'INSERT INTO bookmark VALUES(?, ?, ?, ?)';
  const params = [email, star, name, address];

  try {
    const [rows, fields] = await pool.query(sql, params);

    // if edit success
    if(!(rows.length > 0)) {
      console.log('CREATE SUCCESS');
      res.send({ });
    }
    else
      res.send({ });
    
  } catch (error) {
    console.log(error);
  }
});

// localhost:3000/api/editBookmark
router.post('/editBookmark', async function (req, res, next) {
  console.log('im EDIT bookmark');

  let email = req.body.email;
  let name = req.body.name;
  let nextName = req.body.nextName;
  let nextAddress = req.body.nextAddress;

  const sql = 'UPDATE bookmark SET name = ?, address = ? WHERE email = ? and name = ?';
  const params = [nextName, nextAddress, email, name];

  try {
    const [rows, fields] = await pool.query(sql, params);

    // if edit success
    if(!(rows.length > 0)) {
      console.log('EDIT SUCCESS');
      res.send({ });
    }
    else
      res.send({ });
    
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

// localhost:3000/api/updateStar
router.post('/updateStar', async function (req, res, next) {
  console.log('im UPDATE star');

  let email = req.body.email;
  let star = req.body.star;
  let name = req.body.name;
  let address = req.body.address;

  const sql = 'UPDATE bookmark SET star = ? WHERE email = ? AND name = ? AND address = ?';
  const params = [star, email, name, address];

  try {
    const [rows, fields] = await pool.query(sql, params);
    
    if(!(rows.length > 0)){
      res.send({ star: true });
    }
    else
      res.send({ star: false });
    
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