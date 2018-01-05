/// <reference path="method.ts" />
/// <reference path="method.ts" />
/// <reference path="role.ts" />
var student;
(function (student) {
    var JK = /** @class */ (function () {
        function JK(property, method) {
            this.hair = property.hair;
            this.age = property.age;
            this.times = property.times;
            this.showAge = method.showAge;
            this.showHair = method.showHair;
            this.showTimes = method.showTimes;
        }
        JK.prototype.showTimes = function () {
        };
        ;
        JK.prototype.showAge = function () {
        };
        ;
        JK.prototype.showHair = function () {
        };
        ;
        return JK;
    }());
    student.JK = JK;
})(student || (student = {}));
/// <reference path="method.ts" />
/// <reference path="role.ts" />
/// <reference path="student.ts" />
var baiscEle = {
    hair: 6,
    age: 18,
    times: 2
};
var baiscFuc = {
    showAge: function () { console.log("My age is " + this.age); },
    showTimes: function () { console.log("Sex " + this.times); },
    showHair: function () { console.log('My hair is black'); }
};
 
