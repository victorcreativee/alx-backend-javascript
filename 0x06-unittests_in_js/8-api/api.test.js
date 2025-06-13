const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
    it('should return status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it('should return welcome message', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});
