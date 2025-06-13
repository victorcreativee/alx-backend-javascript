const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((res) => {
            expect(res).to.eql({ data: 'Successful response from the API' });
            done();
        });
    });
});
