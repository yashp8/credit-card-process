const express = require('express');
const creditCardProcess = require('../controllers/creditCardProcessController');

const router = express.Router();

router
  .route('/')
  .get(creditCardProcess.getCards)
  .post(
    creditCardProcess.createCard,
  );

  module.exports = router;