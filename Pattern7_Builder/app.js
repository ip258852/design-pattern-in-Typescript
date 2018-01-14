var data;
(function (data) {
    var Data = /** @class */ (function () {
        function Data() {
        }
        return Data;
    }());
    data.Data = Data;
})(data || (data = {}));
/// <reference path = 'data.ts'/>
var builder;
(function (builder) {
    //SOP 在這 或 可使用的方法在這!!!!!!
    var BuilderFI = /** @class */ (function () {
        function BuilderFI() {
        }
        BuilderFI.prototype.init = function () {
            console.log('ini build FI');
            var main = new data.Data();
            main.targetBU = "Financial Department";
            return main;
        };
        BuilderFI.prototype.buildReport = function (data) {
            data.report = 'ROI report';
            console.log("Building Report from BuilderFI which is " + data.report + "!");
        };
        BuilderFI.prototype.buildRecord = function (data) {
            data.record = '20180114';
            console.log("Building LeaveRecord from BuilderFI from " + data.record + "!");
        };
        return BuilderFI;
    }());
    builder.BuilderFI = BuilderFI;
    var BuilderIT = /** @class */ (function () {
        function BuilderIT() {
        }
        BuilderIT.prototype.init = function () {
            console.log('Initializing from BuilderIT!');
            var main = new data.Data();
            main.targetBU = "IT";
            return main;
        };
        BuilderIT.prototype.buildReport = function (data) {
            data.report = 'overtime report';
            console.log("Building Report from BuilderIT which is " + data.report + "!");
        };
        BuilderIT.prototype.buildRecord = function (data) {
            data.record = '20180214';
            console.log("Building LeaveRecord from BuilderIT from " + data.record + "!");
        };
        return BuilderIT;
    }());
    builder.BuilderIT = BuilderIT;
})(builder || (builder = {}));
/// <reference path='data.ts'/>
/// <reference path='builder.ts'/>
var direct;
(function (direct) {
    var Direct = /** @class */ (function () {
        function Direct(_builder) {
            this.builder = _builder;
        }
        Direct.prototype.construct = function () {
            var work = this.builder.init();
            this.builder.buildReport(work);
            this.builder.buildRecord(work);
            return work;
        };
        return Direct;
    }());
    direct.Direct = Direct;
})(direct || (direct = {}));
/// <reference path='data.ts'/>
/// <reference path='builder.ts'/>
/// <reference path='direct.ts'/>
var d = new direct.Direct(new builder.BuilderFI());
d.construct();
