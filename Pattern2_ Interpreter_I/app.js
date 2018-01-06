var arrayA = [50, 7, 6, 8, 2];
var arrayB = [15, 87, 51, 2, 64, 79, 65, 79, 47];
var Interpeter = /** @class */ (function () {
    function Interpeter(array) {
        this._Arr = array;
    }
    Interpeter.prototype.interpeter = function () {
        if (this._Arr.length > 5) {
            var sum = this._Arr.reduce(function (pre, data) { return pre + data; });
            return sum % 10;
        }
        else if (this._Arr.length <= 5) {
            var sum = this._Arr.reduce(function (pre, data) { return pre - data; });
            return sum * 3;
        }
    };
    return Interpeter;
}());
var itA = new Interpeter(arrayA);
var itB = new Interpeter(arrayB);
console.log(itA.interpeter());
console.log(itB.interpeter());
