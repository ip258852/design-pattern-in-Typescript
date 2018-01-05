/// <reference path="JKelements.ts" />
var Role;
(function (Role) {
    var Student = /** @class */ (function () {
        function Student(length, color, sex) {
            this.length = length;
            this.color = color;
            this.Sex = sex;
        }
        Student.prototype.show = function () {
            return "my hair is " + this.color + ",and len is " + this.length + " cm";
        };
        Student.prototype.showSex = function () {
            return "I sex " + this.Sex + " times";
        };
        return Student;
    }());
    Role.Student = Student;
    var HotSister = /** @class */ (function () {
        function HotSister(Sex, age, showAge) {
            this.showAge = showAge || this.showAge;
            this.age = age;
            this.Sex = Sex;
        }
        HotSister.prototype.showSex = function () {
            return "I sex " + this.Sex + " times";
        };
        HotSister.prototype.showAge = function () {
            return "I am " + this.age;
        };
        ;
        return HotSister;
    }());
    Role.HotSister = HotSister;
})(Role || (Role = {}));
/// <reference path="JKelements.ts" />
/// <reference path="Role.ts" />
var RoleDetail;
(function (RoleDetail) {
    var JK = /** @class */ (function () {
        function JK(ele) {
            this.ele = ele;
        }
        JK.prototype.show = function () {
            return this.ele.show();
        };
        JK.prototype.showSex = function () {
            return this.ele.showSex();
        };
        return JK;
    }());
    RoleDetail.JK = JK;
    var Dancer = /** @class */ (function () {
        function Dancer(ele) {
            this.ele = ele;
        }
        Dancer.prototype.showAge = function () {
            return this.ele.showAge();
        };
        Dancer.prototype.showSex = function () {
            return this.ele.showSex();
        };
        return Dancer;
    }());
    RoleDetail.Dancer = Dancer;
})(RoleDetail || (RoleDetail = {}));
/// <reference path="JKelements.ts" />
/// <reference path="Role.ts" />
/// <reference path="RoleDetail.ts" />
var Mimi = new RoleDetail.JK(new Role.Student(50, 'black', 5));
console.log(Mimi.show());
console.log(Mimi.showSex());
var Vivi = new RoleDetail.Dancer(new Role.HotSister(18, 18, null));
console.log(Vivi.showAge());
console.log(Vivi.showSex());
var Pipi = new RoleDetail.Dancer(new Role.HotSister(18, 18, function () { return "I don't know?"; }));
console.log(Pipi.showAge());
console.log(Pipi.showSex());
