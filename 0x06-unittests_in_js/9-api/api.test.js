describe('Cart page', () => {
    it('Valid ID returns message', (done) => {
        request.get('http://localhost:7865/cart/12', (err, res, body) => {
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('Invalid ID returns 404', (done) => {
        request.get('http://localhost:7865/cart/hello', (err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
