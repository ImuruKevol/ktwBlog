const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const crypto = require("crypto");
const db = require("../db");

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const encrypt = (pw) => {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(32).toString("base64");
    crypto.pbkdf2(pw, salt, process.env.SALT_NUMBER*1, 64, "sha512", (err, hash) => {
      if(err) {
        console.log(err);
        reject(err);
      }
      else {
        resolve({
          hash: hash.toString("base64"),
          salt: salt,
        });
      }
    });
  })
}

passport.use(
    new LocalStrategy(
        {
            usernameField: "id",
            passwordField: "pw",
            passReqToCallback: true
        },
        async (req, id, pw, done) => {
          const { hash, salt } = await encrypt(pw);
          //todo service로 고쳐야댐
          // let result = await db.user.login(id, pw);

          // if (!result) {
          //     return done(new Error("Check Your ID or PW"));
          // }
          // let autoLogin = req.body.autoLogin;
          // let sess = req.session;

          // if (autoLogin) {
          //     sess.cookie.expires = false;
          //     sess.cookie.maxAge = 100 * 365 * 24 * 60 * 60 * 1000;    // 100 years

          //     sess.save();
          // }

          return done(null, {
              id,
          });
        }
    )
);

router.isAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/user/failed");
};

module.exports = router;
