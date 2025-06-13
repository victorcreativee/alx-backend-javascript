const Utils = {
    calculateNumber: function (type, a, b) {
        const aR = Math.round(a);
        const bR = Math.round(b);
        if (type === 'SUM') return aR + bR;
        if (type === 'SUBTRACT') return aR - bR;
        if (type === 'DIVIDE') {
            if (bR === 0) return 'Error';
            return aR / bR;
        }
    }
};

module.exports = Utils;
