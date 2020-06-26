const express = require('express');
const router = express.Router();

const { docCtl } = require('../controller');

router
  .route('/:userId/:docId')
  .post(docCtl.new)
  .get(docCtl.load)
  .patch(docCtl.save)
  .delete(docCtl.delete)

module.exports = router;
