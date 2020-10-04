module.exports = {
  name: "kevol",
  secret: process.env.SESSION_SECRET,
  // resave: true,
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //     maxAge: 1000 * 60 * 30, // 30분
  //     secure: process.env.SESSION_SECURE,
  //     secure: true,
  // }
}
