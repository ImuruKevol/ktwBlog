const createError = require('http-errors');
const express = require('express');
const debug = require('debug')('kevolwriter:app');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
const documentRouter = require('./routes/document');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// async error handling
app.use('*', func => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  }
});

// app.use('/', indexRouter);
app.use('/document', documentRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
