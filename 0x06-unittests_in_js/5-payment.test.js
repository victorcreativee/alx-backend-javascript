const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        logSpy.restore();
    });

    it('with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWith(logSpy, 'The total is: 120');
    });

    it('with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(logSpy);
        sinon.assert.calledWith(logSpy, 'The total is: 20');
    });
});
