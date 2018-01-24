const request = require('supertest');
const expect = require('chai').expect;

var app = require('./server').app;

it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).to.include({
                error:'Page not found',
                name:'Todo App v1.0'
            });
        })
        .end(done);
});

it('should return my user object',(done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).to.be.an('Array');
        })
        .end(done);
});