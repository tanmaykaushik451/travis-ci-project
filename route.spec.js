const request = require('supertest') //importing the supertest library
const app = require('./index.js') //importing the 'index.js' file

describe('Get route', () => {
  it('page should return hello world travis', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual('Hello world from Travis')
  })
})

afterAll(async () => { await app.close() })