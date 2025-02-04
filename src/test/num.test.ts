import request from 'supertest';
import app from '../../index'; 

describe('Number Classification API', () => {
  
  test('✅ Should return classification for a valid number (e.g., 371)', async () => {
    const response = await request(app).get('/api/classify-number?number=371');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('number', 371);
    expect(response.body).toHaveProperty('is_prime');
    expect(response.body).toHaveProperty('is_perfect');
    expect(response.body).toHaveProperty('properties');
    expect(response.body).toHaveProperty('digit_sum');
    expect(response.body).toHaveProperty('fun_fact');
  });

  test('❌ Should return a 400 error for an invalid number (e.g., "abc")', async () => {
    const response = await request(app).get('/api/classify-number?number=abc');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: true, number: "abc" });
  });

  test('❌ Should return a 400 error if no number is provided', async () => {
    const response = await request(app).get('/api/classify-number');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: true }); 
  });

});
