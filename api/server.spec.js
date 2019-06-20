const request = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        // asynchronous test need to either return the promise
        it('responds with 200 OK', () => {
            return request(server)
            .get('/')
            .expect(200);
        });

        // or use the squad async/await
        it('responds with 200 OK', async () => {
            await request(server)
            .get('/')
            .expect('Content-Type', /json/i);
        });

        // using done to test asynchronous code
        it('', done => {
            request(server)
            .get('/')
            .expect(200, done)
        })

        it('responds with { api: "up" }', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: 'up'})
            });
        });


    });
});