var Validation;
(function (Validation) {
    var isLetterReg = /[A-Za-z]+$/;
    Validation.checkLetter = function (text) {
        return isLetterReg.test(text);
    };
})(Validation || (Validation = {}));
