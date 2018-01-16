var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path = 'visit.ts' />
var element;
(function (element) {
    var ProductTypeEnum;
    (function (ProductTypeEnum) {
        ProductTypeEnum[ProductTypeEnum["BOOK"] = 1] = "BOOK";
        ProductTypeEnum[ProductTypeEnum["LIVING"] = 2] = "LIVING";
        ProductTypeEnum[ProductTypeEnum["ELECTRONIC"] = 3] = "ELECTRONIC";
    })(ProductTypeEnum = element.ProductTypeEnum || (element.ProductTypeEnum = {}));
    var Product = /** @class */ (function () {
        function Product(_productType, _name, _UnitPrice, _Amount, _totalPrice) {
            this.Amount = _Amount;
            this.name = _name;
            this.productType = _productType;
            this.UnitPrice = _UnitPrice;
            this.totalPrice = _totalPrice;
        }
        Product.prototype.accept = function (visit) {
            visit.visit(this);
        };
        return Product;
    }());
    element.Product = Product;
})(element || (element = {}));
/// <reference path = 'element.ts' />
var visit;
(function (visit) {
    var Visit = /** @class */ (function () {
        function Visit() {
        }
        return Visit;
    }());
    visit.Visit = Visit;
    var VisitDis40 = /** @class */ (function (_super) {
        __extends(VisitDis40, _super);
        function VisitDis40() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VisitDis40.prototype.visit = function (ele) {
            if (ele.Amount >= 10) {
                ele.totalPrice = ele.UnitPrice * ele.Amount * 0.8;
                console.log("total is " + ele.totalPrice + ",unit is " + ele.UnitPrice + ",amount is " + ele.Amount);
            }
            else {
                ele.totalPrice = ele.UnitPrice * ele.Amount;
                console.log("total is " + ele.totalPrice + ",unit is " + ele.UnitPrice + ",amount is " + ele.Amount);
            }
        };
        return VisitDis40;
    }(Visit));
    visit.VisitDis40 = VisitDis40;
    var VisitDis90 = /** @class */ (function (_super) {
        __extends(VisitDis90, _super);
        function VisitDis90() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VisitDis90.prototype.visit = function (ele) {
            var totalPrice = ele.UnitPrice * ele.Amount;
            if (totalPrice > 1000) {
                ele.totalPrice = ele.UnitPrice * ele.Amount * 0.8;
                console.log("total is " + ele.totalPrice + ",unit is " + ele.UnitPrice + ",amount is " + ele.Amount);
            }
            else {
                ele.totalPrice = ele.UnitPrice * ele.Amount;
                console.log("total is " + ele.totalPrice + ",unit is " + ele.UnitPrice + ",amount is " + ele.Amount);
            }
        };
        return VisitDis90;
    }(Visit));
    visit.VisitDis90 = VisitDis90;
})(visit || (visit = {}));
/// <reference path = 'visit.ts' />
/// <reference path = 'element.ts' />
var objectStructure;
(function (objectStructure) {
    var ObjectStrure = /** @class */ (function () {
        function ObjectStrure() {
            this.list = new Array();
        }
        ObjectStrure.prototype.attach = function (element) {
            this.list.push(element);
        };
        ObjectStrure.prototype.detach = function (element) {
            var index = this.list.indexOf(element);
            this.list.splice(index, 1);
        };
        ObjectStrure.prototype.accept = function (visit) {
            this.list.forEach(function (val) { val.accept(visit); });
        };
        return ObjectStrure;
    }());
    objectStructure.ObjectStrure = ObjectStrure;
})(objectStructure || (objectStructure = {}));
/// <reference path = 'visit.ts' />
/// <reference path = 'element.ts' />
/// <reference path = 'objectStructure.ts' />
///// single
var ele1 = new element.Product(element.ProductTypeEnum.BOOK, 'designA', 48, 20, 0);
ele1.accept(new visit.VisitDis40());
console.log('--single up-----');
console.log('--muti   down---');
///// muti
var ele4 = new element.Product(element.ProductTypeEnum.BOOK, 'designD', 23, 25, 0);
var eleArray = new Array(new element.Product(element.ProductTypeEnum.BOOK, 'designA', 480, 20, 0), new element.Product(element.ProductTypeEnum.ELECTRONIC, 'designB', 580, 5, 0));
var checkOut = new objectStructure.ObjectStrure();
eleArray.forEach(function (val) { checkOut.attach(val); });
checkOut.accept(new visit.VisitDis40());
