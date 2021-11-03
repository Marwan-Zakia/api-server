'use strict';
const { server } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');


beforeAll(async () => {
  await db.sync();
});


afterAll(async () => {
  await db.drop();
});


describe('test the db and such', () => {
  test('Should respond with 404', async () => {
    const response = await mockRequest.get('/anything');
    expect(response.status).toBe(404);

  });



  it('can add food', async () => {
    const response = await mockRequest.post('/food').send({
      foodName: 'mensif',
    });
    expect(response.status).toBe(201);

  });


  it('can get all food items', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);

  });

 
  it('can get a specific food item', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
  });

 
  it('can update a specific food item', async () => {
  
    const response = await mockRequest.put('/food/1').send({
      foodName: 'food',
    });
    expect(typeof response.body).toEqual('object')
    expect(response.status).toBe(201);

  });

  it('can delete a specific food item', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(204);
  });
  
  
 

  it('can add games', async () => {

    const response = await mockRequest.post('/games').send({
      gamesName: 'cod',
    });
    expect(response.status).toBe(201);

  });


  it('can get all games items', async () => {
    const response = await mockRequest.get('/games');
    expect(response.status).toBe(200);

  });


  it('can get a specific games item', async () => {
    const response = await mockRequest.get('/games/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object')
  });

  
  it('can update a specific games item', async () => {
    const response = await mockRequest.put('/games/1').send({
      gamesName: 'games',
    });
    expect(typeof response.body).toEqual('object')
    expect(response.status).toBe(201);

  });

  it('can delete a specific games item', async () => {
    const response = await mockRequest.delete('/games/1');
    expect(response.status).toBe(204);
  });





});
