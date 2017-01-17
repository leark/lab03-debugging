"use strict";
var stringProcessor = (function () {
    function stringProcessor(input) {
        this.data = input;
    }
    stringProcessor.prototype.getString = function () {
        return this.data;
    };
    stringProcessor.prototype.setString = function (data) {
        this.data = data;
    };
    stringProcessor.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 0; i < chars.length / 2; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - (i * 1) - 1];
            chars[chars.length - (i * 1) - 1] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringProcessor;
}());
var ex = new stringProcessor('abcd');
console.log(ex.getString());
ex.reverse();
console.log(ex.getString());
var ex2 = new stringProcessor('abcde');
console.log(ex2.getString());
ex2.reverse();
console.log(ex2.getString());
//# sourceMappingURL=stringBuilder.js.map