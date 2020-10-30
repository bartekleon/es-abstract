'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

// https://tc39.es/ecma262/2020/#sec-binaryxor

module.exports = function BinaryXor(x, y) {
	if ((x !== 0 && x !== 1) || (y !== 0 && y !== 1)) {
		throw new $TypeError('Assertion failed: `x` and `y` must be either 0 or 1');
	}
	return x ^ y;
};
