// test/index.spec.js
const assert = require('chai').assert;
const invariants = require('invariants');
const uuidex = require('../index.js');

describe('EX4 function', function(){
	it('It should return 36 char string', function(){
		invariants(uuidex.ex14().split('').length === 36, "Error: It's not returning 36 char string");
	});
});

describe('V1 function', function(){
	it('It should return 36 char string', function(){
		invariants(uuidex.v1().split('').length === 36, "Error: It's not returning 36 char string");
	});
});

describe('V4 function', function(){
	it('It should return 36 char string', function(){
		invariants(uuidex.v4().split('').length === 36, "Error: It's not returning 36 char string");
	});
});
