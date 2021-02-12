const express = require('express');
const router = express.Router();

const { verify } = require('../middle/authentification');
const { docCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router.use(verify);

router
  .post('/:userId/:category/new', asyncWrap(docCtl.new));

router
  .route('/:userId/:category/:docId')
  .get(asyncWrap(docCtl.load))
  .post(asyncWrap(docCtl.save))
  .delete(asyncWrap(docCtl.delete))

module.exports = router;
