const express = require('express');
const router = express.Router();
const passport = require("passport");

const { userCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router
  .route('/:userId/salt')
  .get(asyncWrap(userCtl.salt));

router
  .post('/login', passport.authenticate('local', {failureRedirect: '/user/failed'}), asyncWrap(userCtl.login));

router
  .route('/failed')
  .get(asyncWrap(userCtl.failed));

router
  .get('/:userId/list',
  asyncWrap(userCtl.list));

module.exports = router;
