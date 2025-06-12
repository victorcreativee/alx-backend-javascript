describe('GET /available_payments', () => {
    it('returns payment options', (done) => {
        request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
            expect(body).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
            done();
        });
    });
});

describe('POST /login', () => {
    it('returns welcome message', (done) => {
        request.post(
            'http://localhost:7865/login',
            { json: { userName: 'Betty' } },
            (err, res, body) => {
                expect(res.body).to.equal(undefined); // because body is a string
                expect(res.text).to.equal('Welcome Betty');
                done();
            }
        );
    });
});
