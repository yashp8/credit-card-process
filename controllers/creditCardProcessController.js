/* eslint-disable no-unused-vars */
const { v4: uuidv4 } = require('uuid');
const catchAsync = require('../utils/catchAsync');
const cardvalidator = require('../utils/cardValidator');
const AppError = require('../utils/appError');

const CardMemory = {
  cards: [],
  get card() {
    return this.cards;
  },
  set(value) {
    this.cards.push(value);
  },
};

exports.isValidCard = catchAsync(async (req, res, next) => {
  const isValid = cardvalidator(req.body.cardNumber)
  if (!isValid) {
    return next(new AppError('Invalid card number', 400));
  }
  req.body.type = isValid;
  next();
});

exports.isCardExist = catchAsync(async (req, res, next) => {
  const isExist = CardMemory.cards.find(card => card.cardNumber === req.body.cardNumber);
  if(isExist) {
    return next(new AppError('Card already exist', 400));
  }
  next();
});


exports.getCards = catchAsync(async (req, res, next) => {
  res.status(200).json(CardMemory.cards);
});

exports.createCard = catchAsync(async (req, res, next) => {
  req.body.id = uuidv4();
  CardMemory.set(req.body)
  res.status(200).json({
    status: 'success',
    message: 'Card Inserted',
    data: req.body
  });
});
