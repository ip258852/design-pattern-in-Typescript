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
var tree;
(function (tree) {
    var Organization = /** @class */ (function () {
        function Organization() {
        }
        return Organization;
    }());
    tree.Organization = Organization;
})(tree || (tree = {}));
/// <reference path='tree.ts'/>
var node;
(function (node) {
    var NewProdDev = /** @class */ (function (_super) {
        __extends(NewProdDev, _super);
        function NewProdDev(_title, _head) {
            var _this = _super.call(this) || this;
            _this.title = _title;
            _this.head = _head;
            _this.subOrganizations = new Array();
            return _this;
        }
        NewProdDev.prototype.add = function (item) {
            this.subOrganizations.push(item);
        };
        NewProdDev.prototype.remove = function (item) {
            var pos = this.subOrganizations.indexOf(item);
            this.subOrganizations.splice(pos, 1);
        };
        NewProdDev.prototype.printNow = function () {
            console.log('NewProdDev');
        };
        return NewProdDev;
    }(tree.Organization));
    node.NewProdDev = NewProdDev;
    var MobileProd = /** @class */ (function (_super) {
        __extends(MobileProd, _super);
        function MobileProd(_title, _head) {
            return _super.call(this, _title, _head) || this;
        }
        MobileProd.prototype.printNow = function () {
            console.log('MobileProd');
        };
        return MobileProd;
    }(NewProdDev));
    node.MobileProd = MobileProd;
    var MobileUSBProd = /** @class */ (function (_super) {
        __extends(MobileUSBProd, _super);
        function MobileUSBProd(_title, _head) {
            return _super.call(this, _title, _head) || this;
        }
        MobileUSBProd.prototype.printNow = function () {
            console.log('MobileUSBProd');
        };
        return MobileUSBProd;
    }(NewProdDev));
    node.MobileUSBProd = MobileUSBProd;
    var ITProd = /** @class */ (function (_super) {
        __extends(ITProd, _super);
        function ITProd(_title, _head) {
            return _super.call(this, _title, _head) || this;
        }
        ITProd.prototype.printNow = function () {
            console.log('ITProd');
        };
        return ITProd;
    }(NewProdDev));
    node.ITProd = ITProd;
})(node || (node = {}));
/// <reference path='tree.ts'/>
/// <reference path='node.ts'/>
var newP = new node.NewProdDev('', '');
var mobileP = new node.MobileProd('', '');
var mobileUSBP = new node.MobileUSBProd('', '');
var ITP = new node.ITProd('', '');
newP.add(mobileP);
newP.add(ITP);
mobileP.add(mobileUSBP);
newP.printNow();
console.log(newP.subOrganizations);
