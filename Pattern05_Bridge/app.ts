/// <reference path="method.ts" />
/// <reference path="order.ts" />


//
let orderA : order.IOrder = new order.A4PaperOrder(new method.UsualPrint());
orderA.printOrderA();
orderA.printOrderB();
console.log('...................');

let orderB : order.IOrder = new order.A4PaperOrder(new method.EmergencyPrint());
orderB.printOrderA();
orderB.printOrderB();
console.log('...................');

let orderC : order.IOrder = new order.B5PaperOrder(new method.EmergencyPrint());
orderC.printOrderA();
orderC.printOrderB();
console.log('...................');

let orderD : order.IOrder = new order.B5PaperOrder(new method.UsualPrint());
orderD.printOrderA();
orderD.printOrderB();