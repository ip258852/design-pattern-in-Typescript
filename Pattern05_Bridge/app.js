var method;
(function (method) {
    var UsualPrint = /** @class */ (function () {
        function UsualPrint() {
        }
        UsualPrint.prototype.printA = function () {
            console.log('usual A print');
        };
        UsualPrint.prototype.printB = function () {
            console.log('usual B print');
        };
        return UsualPrint;
    }());
    method.UsualPrint = UsualPrint;
    var EmergencyPrint = /** @class */ (function () {
        function EmergencyPrint() {
        }
        EmergencyPrint.prototype.printA = function () {
            console.log('emergency A print');
        };
        EmergencyPrint.prototype.printB = function () {
            console.log('emergency B print');
        };
        return EmergencyPrint;
    }());
    method.EmergencyPrint = EmergencyPrint;
})(method || (method = {}));
///<reference path="method.ts"/>
var order;
(function (order) {
    var A4PaperOrder = /** @class */ (function () {
        function A4PaperOrder(_printer) {
            this.printer = _printer;
        }
        A4PaperOrder.prototype.printOrderA = function () {
            this.printer.printA();
        };
        A4PaperOrder.prototype.printOrderB = function () {
            this.printer.printB();
        };
        return A4PaperOrder;
    }());
    order.A4PaperOrder = A4PaperOrder;
    var B5PaperOrder = /** @class */ (function () {
        function B5PaperOrder(_printer) {
            this.printer = _printer;
        }
        B5PaperOrder.prototype.printOrderA = function () {
            this.printer.printA();
        };
        B5PaperOrder.prototype.printOrderB = function () {
            console.log("printerB can't print B5");
        };
        return B5PaperOrder;
    }());
    order.B5PaperOrder = B5PaperOrder;
})(order || (order = {}));
/// <reference path="method.ts" />
/// <reference path="order.ts" />
//
var orderA = new order.A4PaperOrder(new method.UsualPrint());
orderA.printOrderA();
orderA.printOrderB();
console.log('...................');
var orderB = new order.A4PaperOrder(new method.EmergencyPrint());
orderB.printOrderA();
orderB.printOrderB();
console.log('...................');
var orderC = new order.B5PaperOrder(new method.EmergencyPrint());
orderC.printOrderA();
orderC.printOrderB();
console.log('...................');
var orderD = new order.B5PaperOrder(new method.UsualPrint());
orderD.printOrderA();
orderD.printOrderB();
