const supertest = require('supertest');

const app = require('../app');

const agent = supertest.agent(app);

describe('simple get request', () => {
  it('should return 200 ok', async () => {
    const response = await agent.get('/').send();
    expect(response.status).toEqual(200);
  });
});

// SENDGRID=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