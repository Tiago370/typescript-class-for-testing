"use strict";
exports.__esModule = true;
var check_1 = require("./check");
var Test = /** @class */ (function () {
    function Test(name_class) {
        this.name_class = name_class;
    }
    Test.prototype.equal = function (observed_output, expected_output, description) {
        var check = new check_1.Check(observed_output, expected_output, description, 'equal');
        if (!check.validated()) {
            console.log('Erro na classe: ' + this.name_class);
            console.log('Checagem: ' + check.getDescription());
            console.log('\t' + check.getErrorDescription() + '\n');
            process.exit(1);
        }
        return true;
    };
    Test.prototype.end = function () {
        console.log('Classe ' + this.name_class + ' OK');
    };
    return Test;
}());
exports.Test = Test;
