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
    it('should return 200 with cart ID', (done) => {
        chai.request(app)
            .get('/cart/99')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Payment methods for cart 99');
                done();
            });
    });

    it('should return 404 for invalid cart ID', (done) => {
        chai.request(app)
            .get('/cart/hello')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});

describe('Available Payments', () => {
    it('should return correct JSON object', (done) => {
        chai.request(app)
            .get('/available_payments')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                });
                done();
            });
    });
});

describe('Login endpoint', () => {
    it('should respond with welcome message', (done) => {
        chai.request(app)
            .post('/login')
            .send({ userName: 'Betty' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Welcome Betty');
                done();
            });
    });

    it('should respond with 400 if no userName', (done) => {
        chai.request(app)
            .post('/login')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.text).to.equal('Missing userName');
                done();
            });
    });
});
