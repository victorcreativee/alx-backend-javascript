const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('GET / returns welcome message', (done) => {
        request.get('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
