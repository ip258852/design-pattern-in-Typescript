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
var data;
(function (data) {
    var Transport = /** @class */ (function () {
        function Transport() {
        }
        return Transport;
    }());
    data.Transport = Transport;
})(data || (data = {}));
/// <reference path ='data.ts' />
var passiveDec;
(function (passiveDec) {
    var MilePricer = /** @class */ (function () {
        function MilePricer(obj) {
            this.customer = obj._customer;
            this.receiver = obj._receiver;
            this.freight = obj._receiver;
        }
        MilePricer.prototype.price = function (transport) {
            var totalprice = transport.miles * 30;
            console.log("mile price is " + totalprice);
            return totalprice;
        };
        return MilePricer;
    }());
    passiveDec.MilePricer = MilePricer;
    var PlacePricer = /** @class */ (function () {
        function PlacePricer(obj) {
            this.customer = obj._customer;
            this.receiver = obj._receiver;
            this.freight = obj._receiver;
        }
        PlacePricer.prototype.price = function (transport) {
            var totalprice = 0;
            switch (transport.place) {
                case 'Taina':
                    totalprice = 2000;
                    break;
                case 'Taipei':
                    totalprice = 5000;
                    break;
                default:
                    totalprice = 9999;
                    break;
            }
            console.log("place cnt is " + totalprice);
            return totalprice;
        };
        return PlacePricer;
    }());
    passiveDec.PlacePricer = PlacePricer;
})(passiveDec || (passiveDec = {}));
/// <reference path ='data.ts' />
/// <reference path ='passivedec.ts' />
var dec;
(function (dec) {
    var Decorator = /** @class */ (function () {
        function Decorator(_stdPricer) {
            this.stdPricer = _stdPricer;
            this.customer = _stdPricer.customer;
            this.receiver = _stdPricer.receiver;
        }
        return Decorator;
    }());
    dec.Decorator = Decorator;
    var extracPlacePricer = /** @class */ (function (_super) {
        __extends(extracPlacePricer, _super);
        function extracPlacePricer(_stdPricer) {
            return _super.call(this, _stdPricer) || this;
        }
        extracPlacePricer.prototype.price = function (transport) {
            // call loop for every price!!!!!!!!
            var defaultPrice = this.stdPricer.price(transport);
            var servicePrice = 0;
            if (transport.ExtraPlaceCnt > 0) {
                servicePrice = defaultPrice * 0.1;
            }
            var totalprice = defaultPrice + Math.floor(servicePrice);
            console.log("your Extra place price is " + totalprice);
            return totalprice;
        };
        return extracPlacePricer;
    }(Decorator));
    dec.extracPlacePricer = extracPlacePricer;
    var DelayPricer = /** @class */ (function (_super) {
        __extends(DelayPricer, _super);
        function DelayPricer(_stdPricer) {
            return _super.call(this, _stdPricer) || this;
        }
        DelayPricer.prototype.price = function (transport) {
            var defaultPrice = this.stdPricer.price(transport);
            var servicePrice = transport.DelayHours * 500;
            var totalprice = defaultPrice + servicePrice;
            console.log("your Delay price is " + totalprice);
            return totalprice;
        };
        return DelayPricer;
    }(Decorator));
    dec.DelayPricer = DelayPricer;
})(dec || (dec = {}));
/// <reference path ='data.ts' />
/// <reference path ='passivedec.ts' />
/// <reference path ='decorator.ts' />


var transport = {
    miles: 200,
    place: 'Taina',
    ExtraPlaceCnt: 1,
    IsHoliday: false,
    DelayHours: 3
};
var stdPricer = new passiveDec.MilePricer({ _customer: '', _receiver: '', _freight: '' });
var ExtraPlaceCnt = new dec.extracPlacePricer(stdPricer);
ExtraPlaceCnt.price(transport);
var delayPrice = new dec.DelayPricer(ExtraPlaceCnt);
delayPrice.price(transport);
