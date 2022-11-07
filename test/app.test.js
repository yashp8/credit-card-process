/* eslint-disable no-undef */
const request = require('supertest');

const baseURL = 'http://localhost:3001';

const dbMockValid = {
  id: null,
  name: 'User',
  cardNumber: '4111111111111111',
  balance: 0,
  limit: 1500,
};

describe('GET /cards', () => {
  beforeAll(async () => {
    await request(baseURL).post('/api/v1/card-process').send(dbMockValid);
  });
  // afterAll(async () => {
  //   await request(baseURL).delete(`/api/v1/card-process`)
  // })
  it('should return 200', async () => {
    const response = await request(baseURL).get('/api/v1/card-process');
    expect(response.statusCode).toBe(200);
  });
  it('should return card success', async () => {
    const response = await request(baseURL).get('/api/v1/card-process');
    expect(response.status).toBe(200);
  });
});
