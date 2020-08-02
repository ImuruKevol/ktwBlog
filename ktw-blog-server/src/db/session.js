module.exports = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 1000 * 60 * 20,
      secure: process.env.SESSION_SECURE,
  }
}
