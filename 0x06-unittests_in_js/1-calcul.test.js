const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when summing 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when summing 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when subtracting 4.5 from 1.4', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 0 when subtracting 2.5 from 2.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when dividing 1.4 by 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return Error when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 3 when dividing 5.5 by 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2), 3);
        });
    });
});
