const express = require('express');
const router = express.Router();

const { verify } = require('../middle/authentification');
const { docCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router.use(verify);

router
  .route('/:userId/:category/:docId')
  .post(asyncWrap(docCtl.new))
  .get(asyncWrap(docCtl.load))
  .patch(asyncWrap(docCtl.save))
  .delete(asyncWrap(docCtl.delete))

module.exports = router;
