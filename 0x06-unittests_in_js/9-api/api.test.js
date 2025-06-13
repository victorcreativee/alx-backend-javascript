const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
    it('should return 200 and welcome message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});

describe('Cart page', () => {
    it('should return 200 for numeric cart ID', (done) => {
        chai.request(app)
            .get('/cart/123')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 123');
                done();
            });
    });

    it('should return 404 for non-numeric cart ID', (done) => {
        chai.request(app)
            .get('/cart/abc')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
