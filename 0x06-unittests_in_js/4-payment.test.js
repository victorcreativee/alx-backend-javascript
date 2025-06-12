const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should log correct message with stubbed return', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const logSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWith(stub, 'SUM', 100, 20);
        sinon.assert.calledWith(logSpy, 'The total is: 10');

        stub.restore();
        logSpy.restore();
    });
});
