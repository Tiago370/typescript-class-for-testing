"use strict";
exports.__esModule = true;
var test_1 = require("./test-lib/test");
var test = new test_1.Test('Classe 1');
test.equal(1, 1, '1 tem que ser igual a 1');
test.equal(2, 2, '2 tem que ser igual a 2');
test.equal(2, 1, '1 tem que ser igual a 1');
test.end();
