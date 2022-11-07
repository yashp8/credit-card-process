/* eslint-disable radix */
/*
Description Luhn algorithm: https://en.wikipedia.org/wiki/Luhn_algorithm
*/
const cardvalidator = (creditCardNumber) => {
  creditCardNumber = creditCardNumber.replace(/\s/g, '');
  let workingCC = creditCardNumber * 1;
  let sum = 0;
  const count = creditCardNumber.toString().length;
  let result = null;

  while (workingCC > 0) {
    const lastDigit = parseInt(workingCC % 10);
    sum = parseInt(sum + lastDigit);
    workingCC = parseInt(workingCC / 100);
  }

  workingCC = creditCardNumber / 10;
  while (workingCC > 0) {
    const lastDigit = parseInt(workingCC % 10);
    const timesTwo = parseInt(lastDigit * 2);
    sum = parseInt(sum + (timesTwo % 10) + timesTwo / 10);
    workingCC = parseInt(workingCC / 100);
  }

  const firstDigit = String(creditCardNumber)[0] * 1;
  const firstTwoDigits = String(creditCardNumber).slice(0, 2) * 1;

  // validate
  if (sum % 10 === 0) {
    if (firstDigit === 4 && (count === 13 || count === 16)) {
      result = 'VISA';
    } else if ((firstTwoDigits === 34 || firstTwoDigits === 37) && count === 15) {
      result = 'AMEX';
    } else if (firstTwoDigits > 50 && firstTwoDigits < 56 && count === 16) {
      result = 'MASTERCARD';
    } else {
        result = false;
    }
  } else {
    result = false;
  }
  return result;
};

module.exports = cardvalidator;
