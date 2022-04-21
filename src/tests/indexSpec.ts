import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test main and image preccesing responses:', () => {
  it('gets OK the main api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets wrong path the main api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(404);
  });

  //test for image processing.
  it('gets OK the image api route endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
  it('gets missing hight parameter image route endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=500'
    );
    expect(response.status).toBe(400);
  });
  it('gets hight is less than 0 image route endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=500&height=0'
    );
    expect(response.status).toBe(400);
  });
  it('gets missing filename parameter image route endpoint', async () => {
    const response = await request.get('/api/images?width=500&height=500');
    expect(response.status).toBe(400);
  });
  it('gets missing all parameters image route endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });
});
