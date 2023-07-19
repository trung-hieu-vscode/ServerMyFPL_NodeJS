let createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
// session,cookies
const session = require('express-session');
const mongoose = require('mongoose');

// API
let UserAPIRouter = require('./routes/api/UserAPI')
let NewsAPIRouter = require('./routes/api/NewsAPI')
let SubjectsAPIRouter = require('./routes/api/SubjectsAPI')


// CPANEL


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// API 
// http://localhost:3000/user/api
app.use('/user/api', UserAPIRouter);
// http://localhost:3000/news/api
app.use('/news/api', NewsAPIRouter);
app.use('/subjects/api',SubjectsAPIRouter);
//C Panel
//http:localhost:3000/users
app.use('/users', usersRouter);





// khai bao thong tin cua session
app.use(session({
  secret: 'iloveyou',//bi mat.
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

mongoose.connect('mongodb+srv://nguyenvanson2622003:abc123456@cluster0.iuwkypv.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));
app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
