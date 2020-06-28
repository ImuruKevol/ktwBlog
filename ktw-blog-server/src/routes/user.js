const express = require('express');
const router = express.Router();

const { userCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router
  .route('/:userId')
  .get(asyncWrap(userCtl.list))

module.exports = router;
