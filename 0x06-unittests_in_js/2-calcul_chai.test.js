const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('SUM', () => expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6));
    it('SUBTRACT', () => expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4));
    it('DIVIDE normal', () => expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2));
    it('DIVIDE by zero', () => expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'));
});
