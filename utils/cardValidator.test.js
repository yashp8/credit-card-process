/* eslint-disable no-undef */
const cardValidator = require('./cardValidator');

const dbMockMaster = ['5553 0422 4198 4105', '5555 5537 5304 8194'];
const dbMockVisa = ['4012 8888 8888 1881'];
const dbMockAmex = ['378282246310005'];
const dbMockInvalid = ['4012 8888 8888 1881 9'];

describe('Card Validate', () => {
  it('Validate MASTER cards', () => {
    expect(cardValidator(dbMockMaster[0])).toEqual('MASTERCARD');
    expect(cardValidator(dbMockMaster[1])).toEqual('MASTERCARD');
  });

  it('Validate VISA cards', () => {
    expect(cardValidator(dbMockVisa[0])).toEqual('VISA');
  });

  it('Validate AMEX cards', () => {
    expect(cardValidator(dbMockAmex[0])).toEqual('AMEX');
  });

  it('Validate Invalid cards', () => {
    expect(cardValidator(dbMockInvalid[0])).toEqual(false);
  });
});
