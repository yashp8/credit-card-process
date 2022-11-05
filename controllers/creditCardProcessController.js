const catchAsync = require('../utils/catchAsync');

exports.getCards = catchAsync(async (req, res, next) => {
    res.status(200).send(`Get Card`);
  });

exports.createCard = catchAsync(async (req, res, next) => {
    res.status(200).send(`Create Card`);
  });
