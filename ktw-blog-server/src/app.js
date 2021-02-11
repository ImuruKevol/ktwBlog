const createError = require('http-errors');
const express = require('express');
const debug = require('debug')('kevolwriter:app');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const userRouter = require('./routes/user');
const documentRouter = require('./routes/document');

// Auth
const redis = require("redis");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const sessionInfo = require("./auth/session");
const client = redis.createClient();

//passport
const passport = require('passport');
// const flash = require('connect-flash');
const passportConfig = require('./auth/passport');

const app = express();

app.set("trust proxy", 1);
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Session
sessionInfo.store = new RedisStore({
  client,
});
app.use(session(sessionInfo));

// Passport
// app.use(flash());
app.use(passportConfig);
app.use(passport.initialize());
app.use(passport.session());

// set middleware
// app.use(auth.checkExpired);

// routing
app.use('/api/user', userRouter);
app.use('/api/document', documentRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
});

module.exports = app;
