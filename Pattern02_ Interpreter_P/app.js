/// <reference path="methos.ts" />
var interpeter;
(function (interpeter) {
    var Interpeter = /** @class */ (function () {
        function Interpeter(method) {
            this.fix5Up = method.fix5Up;
            this.fix5Less = method.fix5Less;
        }
        Interpeter.prototype.fix5Less = function (arr) { };
        ;
        Interpeter.prototype.fix5Up = function (arr) { };
        ;
        Interpeter.prototype.fix = function (arr) {
            if (arr.length > 5)
                this.fix5Up(arr);
            else if (arr.length <= 5)
                this.fix5Less(arr);
        };
        return Interpeter;
    }());
    interpeter.Interpeter = Interpeter;
})(interpeter || (interpeter = {}));
/// <reference path="interpeter.ts" />
/// <reference path="methos.ts" />
var method = {
    fix5Up: function (arr) {
        var fix = arr.reduce(function (pre, data) { return pre + data; });
        console.log("ths answer is " + fix % 10 + ".");
    },
    fix5Less: function (arr) {
        var fix = arr.reduce(function (pre, data) { return pre - data; });
        console.log("ths answer is " + fix * 3 + ".");
    }
};
var itA = new interpeter.Interpeter(method);
var arrayA = [50, 7, 6, 8, 2];
var arrayB = [15, 87, 51, 2, 64, 79, 65, 79, 47];
itA.fix(arrayA);
itA.fix(arrayB);
