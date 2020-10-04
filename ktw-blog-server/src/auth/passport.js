const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { userSvc } = require("../service");

passport.serializeUser(function(user, done) {
  done(null, user.userId);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(
  new LocalStrategy(
    {
        usernameField: "id",
        passwordField: "pw",
        session: true,
        passReqToCallback: false,
    },
    (id, pw, done) => {
      userSvc.login(id, pw).then(result => {
        if(result) {
          return done(null, {
            userId: id,
          });
        }
        else {
          return done(null, false);
        }
      })
    }
  )
);

module.exports = router;
