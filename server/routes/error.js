let express = require('express');
let router = express.Router();
var path = require('path');

router.get('/main', function (req, res, next) {
  console.log('##############################');
  console.log('Main page');
  console.log('##############################');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/edit', function (req, res, next) {
  console.log('##############################');
  console.log('Edit page');
  console.log('##############################');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/register', function (req, res, next) {
  console.log('##############################');
  console.log('Register page');
  console.log('##############################');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('*', function (req, res, next) {
  console.log('##############################');
  console.log('GO MAIN page');
  console.log('##############################');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;