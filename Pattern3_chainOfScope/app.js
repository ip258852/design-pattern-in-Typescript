/// <reference path="IHandler.ts" />
var Handler;
(function (Handler) {
    var header = /** @class */ (function () {
        function header(_data) {
            this.next = null;
            this.data = _data;
        }
        header.prototype.fix = function () {
            console.log("work is coming.");
            if (this.next == null)
                this.next = new USHandler(this.data);
            return this.next.fix(this.data);
        };
        return header;
    }());
    Handler.header = header;
    var USHandler = /** @class */ (function () {
        function USHandler(_data) {
            this.next = null;
            this.data = _data;
        }
        USHandler.prototype.fix = function () {
            if (this.data.lan === 'US')
                return "Hello " + this.data.name;
            else
                console.log("not US,next");
            if (this.next === null)
                this.next = new ErrorHandler();
            return this.next.fix(this.data);
        };
        return USHandler;
    }());
    Handler.USHandler = USHandler;
    var TWHandler = /** @class */ (function () {
        function TWHandler(_data) {
            this.next = null;
            this.data = _data;
        }
        TWHandler.prototype.fix = function () {
            if (this.data.lan === 'TW')
                return "NiHow " + this.data.name;
            else
                console.log("not TW,next");
            if (this.next === null)
                this.next = new ErrorHandler();
            return this.next.fix(this.data);
        };
        return TWHandler;
    }());
    Handler.TWHandler = TWHandler;
    var ErrorHandler = /** @class */ (function () {
        function ErrorHandler() {
        }
        ErrorHandler.prototype.fix = function () {
            return "No body can handle.";
        };
        return ErrorHandler;
    }());
    Handler.ErrorHandler = ErrorHandler;
})(Handler || (Handler = {}));
/// <reference path="IHandler.ts" />
/// <reference path="Handler.ts" />
var data = {
    lan: "JP",
    name: "John doe"
};
var app = new Handler.header(data);
var US = new Handler.USHandler(data);
var TW = new Handler.TWHandler(data);
app.next = US;
US.next = TW;
console.log(app.fix());
