const request = require('supertest');
const app = require('../../src/backend/api/app');

describe('User API Integration Tests', () => {
  let userId;

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  it('should retrieve an existing user by ID', async () => {
    const res = await request(app)
      .get(`/api/users/${userId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
    expect(res.body).toHaveProperty('username', 'testuser');
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('should update an existing user', async () => {
    const updatedEmail = 'updated@example.com';
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        email: updatedEmail
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
    expect(res.body).toHaveProperty('email', updatedEmail);
  });

  it('should delete an existing user', async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`);

    expect(res.statusCode).toEqual(204);

    const getRes = await request(app).get(`/api/users/${userId}`);
    expect(getRes.statusCode).toEqual(404);
  });
});
