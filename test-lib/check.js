"use strict";
exports.__esModule = true;
var Check = /** @class */ (function () {
    function Check(observed_output, expected_output, description, checking_method) {
        this.observed_output = observed_output;
        this.expected_output = expected_output;
        this.description = description;
        if (checking_method == 'equal') {
            this.equal();
        }
    }
    Check.prototype.equal = function () {
        if (!(typeof this.observed_output == typeof this.expected_output)) {
            this.validated_check = false;
            this.error_description = "A saída observada não é do mesmo tipo da saída esperada.";
            return;
        }
        else {
            if (this.observed_output != this.expected_output) {
                this.validated_check = false;
                this.error_description = "A saída observada é diferente da saída esperada.";
            }
            else {
                this.validated_check = true;
                this.error_description = "Nenhum erro.";
            }
        }
    };
    Check.prototype.getDescription = function () {
        return this.description;
    };
    Check.prototype.getErrorDescription = function () {
        return this.error_description;
    };
    Check.prototype.validated = function () {
        return this.validated_check;
    };
    return Check;
}());
exports.Check = Check;
