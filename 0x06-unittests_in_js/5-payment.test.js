const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with hooks', () => {
    let logSpy;

    beforeEach(() => {
        logSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        logSpy.restore();
    });

    it('logs 120 when input is 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 120');
    });

    it('logs 20 when input is 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 20');
    });
});
