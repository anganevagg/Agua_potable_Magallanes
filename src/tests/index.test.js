const server = require('../server')
const request = require('supertest')

describe('GET /', ()=>{
	it('should respond with a 200 status code', async()=>{
		const response = await request(server).get('/').send()
		expect(response.statusCode).toBe(200)
	})
})