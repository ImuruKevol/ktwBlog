const express = require('express');
const router = express.Router();

const { docCtl } = require('../controller');
const { asyncWrap } = require('../utils');

router
  .route('/:userId/:docId')
  .post(asyncWrap(docCtl.new))
  .get(asyncWrap(docCtl.load))
  .patch(asyncWrap(docCtl.save))
  .delete(asyncWrap(docCtl.delete))

module.exports = router;
