"use strict";
exports.__esModule = true;
exports.findOdd = void 0;
var findOdd = function (xs) {
    var counts = xs.reduce(function (acc, x) {
        acc[x] = (acc[x] || 0) + 1;
        return acc;
    }, {});
    console.log('counts', counts);
    // console.log(Object.entries(counts).find(([_, count]) => count % 2 === 1))
    return Number(Object.entries(counts).find(function (_a) {
        var _ = _a[0], count = _a[1];
        return count % 2 === 1;
    }));
};
exports.findOdd = findOdd;
console.log('[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5): ', (0, exports.findOdd)([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
