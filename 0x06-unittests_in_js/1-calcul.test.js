const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('SUM', () => assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6));
    it('SUBTRACT', () => assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4));
    it('DIVIDE normal', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2));
    it('DIVIDE by zero', () => assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'));
});
