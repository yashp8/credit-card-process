const express = require('express');
const catchAsync = require('../utils/catchAsync');
const cardvalidator = require('../utils/cardValidator');

const router = express.Router();

router
  .route('/:cardNumber')
  .get(catchAsync(async (req, res, next) => {
    const isValid = cardvalidator(req.params.cardNumber)
    if(!isValid) {
        res.status(200).json({
          status: 'failed',
          message: isValid,
        });
    } else {
        res.status(200).json({
          status: 'success',
          message: isValid,
        });
    }
    
  }))

  module.exports = router;