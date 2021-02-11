const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { userSvc } = require("../service");
const { encrypt, makeAccessToken } = require("../middle/authentification");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  userSvc.checkAccessToken(user.userId, user.accessToken)
    .then(result => {
      if(result) done(null, user);
      else done(null, false);
    })
    .catch(err => {
      done(null, false);
    })
});

passport.use(
  new LocalStrategy(
    {
        usernameField: "id",
        passwordField: "pw",
        session: true,
        passReqToCallback: false,
    },
    async (id, pw, done) => {
      const salt = await userSvc.getSalt(id);
      const encryptPW = await encrypt(pw, salt);
      const result = await userSvc.login(id, encryptPW);
      // fail
      if(!result) return done(null, false);
      //success
      const accessToken = await makeAccessToken(id, salt);
      return done(null, {
        userId: id,
        accessToken,
      });
    }
  )
);

router.login = (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if(err || !user) {
      return res.status(301).redirect('/api/user/failed');
    }
    req.login(user, err => {
      if(err) return res.status(301).redirect('/api/user/failed');
      next();
    });
  })(req, res, next);
}

module.exports = router;
