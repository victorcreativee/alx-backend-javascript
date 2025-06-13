const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi with stub', () => {
    it('stubs calculateNumber and checks log output', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const logSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);
        sinon.assert.calledWithExactly(logSpy, 'The total is: 10');

        stub.restore();
        logSpy.restore();
    });
});
