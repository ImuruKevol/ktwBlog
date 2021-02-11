const express = require('express');
const router = express.Router();
const { userCtl } = require('../controller');
const { asyncWrap } = require('../utils');
const { verify } = require('../middle/authentification');
const { login } = require('../auth/passport');

router
  .route('/:userId/salt')
  .get(asyncWrap(userCtl.salt));

router
  .post('/login', login, userCtl.login);

router
  .get('/:userId/logout', asyncWrap(userCtl.logout));

router
  .route('/failed')
  .get(userCtl.failed);

router
  .get('/:userId/list', verify, asyncWrap(userCtl.list));

module.exports = router;
