var Validation;
(function (Validation) {
    Validation.isNumberReg = /^[0-9]+$/;
    Validation.checkNumber = function (text) {
        return Validation.isNumberReg.test(text);
    };
})(Validation || (Validation = {}));
