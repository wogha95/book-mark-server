require('dotenv').config({path: "./db/.env"});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// session 사용한다는 가정
// const session = require('express-session');

var bookmarkRouter = require('./routes/index');
var errorRouter = require('./routes/error');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// session 사용한다는 가정
// app.use(session({
//   key: 'bookmark',
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,  
// }))

app.use('/api', bookmarkRouter);
app.use('/', errorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
