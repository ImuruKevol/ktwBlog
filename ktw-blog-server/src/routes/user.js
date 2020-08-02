const express = require('express');
const passport = require("passport");
const router = express.Router();
const isAuth = require("../auth/passport").isAuthenticated;

const { userCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router
  .post('/login', passport.authenticate("local"), asyncWrap(userCtl.login))

router
  .route('/failed')
  .get(asyncWrap(userCtl.failed))

router
  .route('/:userId')
  .get(asyncWrap(userCtl.list))

module.exports = router;
